import {Router} from 'express';
import { getUrlsCollections } from '../db/collections.js';
import crypto from 'crypto'
const router = Router();

router.get('/', async (req,res)=>{
    const cursor = getUrlsCollections().find() // just link to collection's documents;
    const data = await cursor.toArray() // the documents of collection
    res.render('main', {urls: data})
});

router.post('/create', async (req,res)=>{
    const {url} = req.body;
    const documentUrl = await getUrlsCollections().findOne({url : url}); //method findOne - filtratiion rules


    if (!documentUrl){

    // insertOne({}) - for insert One; insertMany - for many
        const result = await getUrlsCollections().insertOne({
            "url" : url,
            "shortUrl" : crypto.randomBytes(3).toString('hex'),
            "createdAt" : new Date()
        });
    }
    res.end('1')
})

export default router;