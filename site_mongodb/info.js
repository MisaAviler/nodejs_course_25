import {connectDB} from './db/connections.js'
import {getCollectionBooks} from './db/collections.js';
import {closeClient} from './db/db.js';
import { getConsoleParams } from './utils/cleanParams.js';

await connectDB();



//Task 07
 const getBooksInfo = async() =>{
    const cursor = getCollectionBooks().find({});
    const data = await cursor.toArray();
    const dataLength= data.length;

    const titleInfo =  getCollectionBooks().find({},
       {projection:{ title: 1, _id:0 }
    });
    const title = await titleInfo.toArray();
    const values = title.map((el)=>{
        return el.title
    })
    console.log(`Number of documents in collection: ${dataLength} \n`,values)
};


//author
 const getAuthor = async(key, value) =>{
    const cursor = getCollectionBooks().find({},{
        projection: { [key] : 1, _id:0}
    });
   
    const data = await cursor.toArray();
    const values = data.map((el)=>{
        return el.author
    })
    console.log(values);
}

//Task 08
 const getGenre = async(key,value) =>{
    const cursor = getCollectionBooks()
    const uniqueValues = await cursor.distinct(key);
    console.log(uniqueValues);
}

//Task 09
 const getRating = async(key,value)=>{
    const cursor = getCollectionBooks().find(
    {
         [key]: {$gte: parseFloat(value)}
    },{
        projection: { title : 1, _id:0}
    });    
    const data = await cursor.toArray();
    const values = data.map((el)=>{
        return el.title
    })
    console.log(`Rating from and include: ${JSON.stringify(values)}`)

}

//Task 10
 const getTags = async(key,value) =>{

    const cursor = await getCollectionBooks().updateMany(
    {},{
       $addToSet : {
        [key] : value
       }
    });    

    console.log(cursor.modifiedCount)

}

const options = {
    'author': getAuthor,
    'genre':  getGenre,
    'rating': getRating,
    'tags' : getTags
}


 const callOption = async() =>{
        const param = getConsoleParams();

        if (param){
            const [key, value] = param.split('=');
            if(!options[key]) {
                return;
            } 
            await options[key](key,value);
        }
}
await getBooksInfo();
await callOption();
await closeClient();