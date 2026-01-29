import {getDb} from './db.js';

let COLLECTIONS_DATA;

export const getCollectionsData = () =>{
    if(!COLLECTIONS_DATA){
        const DB = getDb(process.env.DB_NAME);
        COLLECTIONS_DATA = DB.collection('urls')
    }
    return COLLECTIONS_DATA;
}