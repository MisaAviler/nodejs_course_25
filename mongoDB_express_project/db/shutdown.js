import {closeClient} from './db.js'


// Gracefull shutdown
process.on('SIGINT', async()=>{
    console.log('Recieved SIGINT, closing mongoDB client and exiting');
    try {await closeClient();}
    catch(err){console.log(err)};
    process.exit(0);
});

process.on('SIGTERM', async()=>{
    console.log('Recieved SIGTERM, closing mongoDB client and exiting');
    try {await closeClient();}
    catch(err){console.log(err)};
    process.exit(0);
})