import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/main.js';
import morgan from 'morgan';
import {MongoClient} from 'mongodb'
import {setClient} from './db/db.js'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4100;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;


app.use(express.urlencoded({extended:true})); //get data from POST method
app.use(express.json())

app.set('view engine', 'pug');
app.set('views','./views');

app.use(mainRouter);
app.use(morgan('dev'));

// connect to MondoDb

const client = new MongoClient(MONGO_URI);

try{
    await client.connect() //connect to DB
    setClient(client)
    console.log(`Connected to Db ${client}`)
}
catch(err){
    console.log(err);
    process.exit(1)
}

app.listen(PORT, ()=>{
    console.log(`Server works on http://localhost:${PORT}`)
})

import './db/shutdown.js' //for learning, not needed on prod