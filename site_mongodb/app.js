import {connectDB} from './db/connections.js'
import {getCollectionBooks, getCollectionMigrations} from './db/collections.js';
import {closeClient} from './db/db.js';
import {getBooks} from './utils/books.js'

await connectDB();

//Task 05
const getBooksCollection = async() =>{
    try{
        const titleInfo =  getCollectionBooks().find({},
            {projection:{ title: 1, _id: 0 }
        });
        const data = await titleInfo.toArray();
        if (data.length){
            console.log( 'Array length:', data.length, data,data.length);
            return;
        }

        const books = await getBooks();
        await getCollectionBooks().insertMany(books.dataBooks);  
        await getCollectionMigrations().insertOne({
                file_name: `${books.fileName}`,
                length: `${books.dataBooks.length}`,
                createdAt: new Date()
        })
    }
  
    catch(err){
        console.log(err)
    }
}   


await getBooksCollection();
await closeClient();