import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';
import {setClient, closeClient} from './db/db.js';
import {getCollectionBooks, getCollectionMigrations} from './db/collections.js';
import { getBooks } from './utils/books.js';
import { getBooksInfo } from './info.js';
import { callOption } from './info.js';


dotenv.config();

const MONGO_URI = process.env.MONGO_URI;


//connect to mongoDB
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

const setBooksCollection = async() =>{
   const books = await getBooks();
   await getCollectionBooks().insertMany(books.dataBooks);  
}

// Task 05
const getBooksCollection = async() =>{
   const cursor = getCollectionBooks().find();  
   const data = await cursor.toArray();
    if(data.length){
        return data;
    }
    await setBooksCollection();
}   

// Task 06
const insertDocInMigrations = async() =>{
    const booksFilaName = await getBooks();
    const cursor = getCollectionBooks().find();  
    const data = await cursor.toArray(); 

    await getCollectionMigrations().insertOne({
            file_name: `${booksFilaName.fileName}`,
            length: `${data.length}`,
            time: `${data[0]._id.getTimestamp()}`
    })
}
await callOption()
await getBooksCollection();
await insertDocInMigrations();
await getBooksInfo();
await closeClient();