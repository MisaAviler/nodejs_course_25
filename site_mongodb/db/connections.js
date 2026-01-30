import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';
import {setClient} from './db.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async() => {
    const client = new MongoClient(MONGO_URI);

try{
    await client.connect();
    setClient(client)
    console.log('CONNECTED to MongoDB - ok');
}
catch(err){
    console.log(err);
    process.exit(1)
}
}



