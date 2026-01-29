import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';
import {setClient, closeClient} from './db/db.js';
import {getCollectionsData} from './db/collections.js'

dotenv.config();

const DB_NAME = process.env.DB_NAME;
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

// READ bd CRUD 
const getBooksCollection = async() =>{
   const cursor = getCollectionsData().find();  // find - not async method (work with buffer)
   const data = await cursor.toArray(); // toArray - async method
   console.log(data)
}

// CREATE CRUD
const setUser = async () => {
    const result = await getCollectionsData().insertOne({ // insertOne - async method (works with collection)
        "name": "Lera",
        "age": 27,
        "city": "Dnipro"
    });
    console.log(result)
}


// CREATE MANY CRUD
const setUsers = async () => {
    const result = await getCollectionsData().insertMany([ // insertOne - async method (works with collection) 
        { 
            "name": "Vasya",
            "age": 30,
            "city": "Dnipro"
        },
        {
            "name": "Petro",
            "age": 19,
            "city": "Dnipro"
        }
    ]);
    console.log(result)
}   

// UPDATE ONE CRUD
const updateUser = async() => {
    const result = await getCollectionsData().updateOne({
        "name":"Lera"
    },
    {
        $set: {"age": 57},
        $set: {"city": "Kyiv"},
        $set: {"status": "single"},
        //or you can write ( it is better ) like thar
         $set: {"info": "work", "remote": true}


    })
    console.log(result)
}


// UPDATE MANY CRUD (DO back up before Many)
const updateUsers = async() => {
    const result = await getCollectionsData().updateMany({
        "city":"Dnipro"
    },
    {
        $set: {"post_code": 49000},
    })
    console.log(result)
}


// DELETE one(In real life we don't delete data from db. Better to add some key-value 'delete' : true)
const deleteUser = async()=>{
    const result = await getCollectionsData().deleteOne({
        "name": "Petro"
    });
    console.log(result)
}
// DELETE many(In real life we don't delete data from db. Better to add some key-value 'delete' : true)
const deleteUsers = async()=>{
    const result = await getCollectionsData().deleteMany({
        "name": "Lera"
    });
    console.log(result)
}


// await deleteUsers();
// await deleteUser();
// await updateUsers();
// await updateUser();
// await setUsers();
// await getBooksCollection();
// await setUser();
await closeClient();