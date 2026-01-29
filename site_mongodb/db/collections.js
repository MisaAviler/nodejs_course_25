import {getDb} from './db.js';

let COLLECTION_BOOKS;
let COLLECTION_MIGRATIONS;


export const getCollectionBooks = () =>{
    if(!COLLECTION_BOOKS){
        const DB = getDb(process.env.DB_NAME);
        COLLECTION_BOOKS = DB.collection('books')
    }
    return COLLECTION_BOOKS ;
}

export const getCollectionMigrations = () =>{
    if(!COLLECTION_MIGRATIONS){
        const DB = getDb(process.env.DB_NAME);
        COLLECTION_MIGRATIONS = DB.collection('migrations')
    }
    return COLLECTION_MIGRATIONS ;
}