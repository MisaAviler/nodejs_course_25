import dotenv from 'dotenv';
import {MongoClient, ObjectId} from 'mongodb';
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

// GET by Id
const getById = async() =>{
   const data = await getCollectionsData().findOne({
    "_id": new ObjectId("69776d46ef087829dfe27d70")
   });  // find - not async method (work with buffer)
    console.log(data)
}
// SET new Object Id
const setUserWithNewId = async()=>{
    const user_id = await getCollectionsData().insertOne({
        _id: new ObjectId(),
        name: 'Denis',
        age: 98
    })
}

//find one

const findOne = async()=>{
    const user_name = await getCollectionsData().findOne({
        name: 'Denis'
    })
    console.log(user_name._id.getTimestamp())
}

await findOne()
// await setUserWithNewId()
// await getById()
// await getBooksCollection();
await closeClient();