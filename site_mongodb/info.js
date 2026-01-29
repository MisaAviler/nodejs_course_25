import {getCollectionBooks} from './db/collections.js';
import { getConsoleParams } from './utils/cleanParams.js'

//Task 07
export const getBooksInfo = async() =>{
    const cursor = getCollectionBooks().find({});
    const data = await cursor.toArray();
    const dataLength= data.length;

    const titleInfo =  getCollectionBooks().find({},
       {projection:{ title: 1, _id:0 }
    });
    const title = await titleInfo.toArray()
    console.log(`Number of documents in collection: ${dataLength} \n`,title)
};


//author
 const getAuthor = async(key, value) =>{
    const cursor = getCollectionBooks().find({},{
        projection: { [key] : 1, _id:0}
    });
   
    const data = await cursor.toArray();
    console.log(data);
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

    console.log(`Rating from and include: ${JSON.stringify(data)}`)

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


export const callOption = async() =>{
        const param = getConsoleParams();

        if (param){
            const [key, value] = param.split('=');
            if(!options[key]) {
                return;
            } 
            await options[key](key,value);
        }
}
