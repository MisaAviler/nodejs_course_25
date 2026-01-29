import { closeClient } from "./db/db.js";


process.on('SIGINT', async () => { 
    console.log('Recieved SIGINT. Closing MongoDb client and exiting');
    try{ await closeClient() }
    catch(err){
        console.log(err)
    }
    process.exit(0)
});

process.on('SIGTERM', async () => { 
    console.log('Recieved SIGTERM. Closing MongoDb client and exiting');
    try{ await closeClient() }
    catch(err){
        console.log(err)
    }
        process.exit(0)

});