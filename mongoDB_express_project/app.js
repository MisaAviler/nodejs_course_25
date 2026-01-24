import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/main.js';
import morgan from 'morgan';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4100;


app.use(express.urlencoded({extended:true})); //get data from POST method
app.use(express.json())

app.set('view engine', 'pug');
app.set('views','./views');

app.use(mainRouter);
app.use(morgan('dev'));

app.listen(PORT, ()=>{
    console.log(`Server works on http://localhost:${PORT}`)
})