import express from 'express';
import router from './routes/main.js';
import routerCat from './routes/cat.js';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});

app.use(router);
app.use('/cat', routerCat)

app.use((req,res)=>{
    res.status(404).send('404 Not Found')
})