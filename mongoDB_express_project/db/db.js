import {MongoClient} from 'mongodb';
let _client = null;
export const setClient = (client) => {
    _client = client;
}


export const getClient = () =>{
    if(!_client) throw new Error('MongoClient not initialized. Call setClient(client) from app.js');
    return _client;
};

export const getDb = (dbName) =>{
    const client = getClient();
    return client.db(dbName);
};

export const closeClient = async() => {
    if(_client){
        await _client.close();
        _client = null;
    } 
};

export default {setClient, getClient, getDb, closeClient }