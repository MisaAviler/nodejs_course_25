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
//    const cursor = getCollectionsData().find(
//     {},{projection:{ name: 1, _id:0 }});  // find - not async method (work with buffer)
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)

//    const cursor = getCollectionsData().find(
//     {},{projection:{ name: 1, _id:0 }}).limit(4).skip(3);  // find - not async method (work with buffer)
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)

//    const cursor = getCollectionsData().find(
//     {
//         name: {$exists:true}
//     },{projection:{ name: 1, _id:0 }}).limit(4);  // find - not async method (work with buffer)
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data);

//    const cursor = getCollectionsData().find(
//     {
//         name: {$exists:true},
//         age: {$exists:true}
//     },{projection:{ name: 1,age:1, _id:0 }}).limit(4).sort({age:-1});  // find - not async method (work with buffer)
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)


// OPERATOR 'AND'
//    const cursor = getCollectionsData().find(
//     {
//        $and:[{city: "Dnipro"}, {age:30}] 
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)


//OPERATOR 'OR'
// const cursor = getCollectionsData().find(
//     {
//        $or:[{age: 35}, {age:98}] 
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)
// }


//OPERATOR 'NE'
// const cursor = getCollectionsData().find(
//     {
//         age: {$ne:35}
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)
// }



//OPERATOR 'IN'
// const cursor = getCollectionsData().find(
//     {
//         age: {$in:[30,98]}
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)
// }


//OPERATOR 'NIN' = not in
// const cursor = getCollectionsData().find(
//     {
//         age: {$nin:[30,98]}
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)
// }



// OPERATOR 'gt' = greater than
// 'gte' = greater thand and equal (included 35 and more)
// 'lt' = less than
// 'lte' = less thand and equal (included 35 and less)
// const cursor = getCollectionsData().find(
//     {
//         age: {$gt:35}
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)
// }



//range (диапазон между)
// const cursor = getCollectionsData().find(
//     {
//         $and : [
//             {age: {$gt: 30}},
//             {age: {$lt: 98}}
//         ]
//     })
//    const data = await cursor.toArray(); // toArray - async method
//    console.log(data)
// }


//dot notation (when field is an Object and we want to get an object field(key) address : Object)
const cursor = getCollectionsData().find(
    {
        "address.country": "Ukraine"
    })
   const data = await cursor.toArray(); // toArray - async method
   console.log(data)
}


await getBooksCollection();

await closeClient();