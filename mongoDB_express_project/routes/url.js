import {Router} from 'express';
import { getUrlsCollections } from '../db/collections.js';

const urlRoute = Router();

urlRoute.get('/url/:url',  async (req,res)=>{
    const {url} = req.params;
    const documentUrl = await getUrlsCollections().findOne({shortUrl : url}); //method findOne - filtratiion rules

    if(!documentUrl){
        return res.status(404).send('Not Found')
    }

    // res.redirect(documentUrl.url);   
    res.render('url', {url: documentUrl.url}) 
})

export default urlRoute;