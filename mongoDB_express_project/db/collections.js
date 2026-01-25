import { getDb} from './db.js';

let COLLECTIONS_URLS;


export const getUrlsCollections = () => {
    if(!COLLECTIONS_URLS){
        const DB = getDb(process.env.DB_NAME);
        COLLECTIONS_URLS = DB.collection('urls');
    }
    return COLLECTIONS_URLS
}