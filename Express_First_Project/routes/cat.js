import express from 'express';

const routerCat = express.Router();


routerCat.get('/', (req,res)=>{
    
    res.send(`
    <ul>
        <li><a href="/cat/smartphones">Смартфони</a></li>
        <li><a href="/cat/laptop">Ноутбуки</a></li>
    </ul>
    `)
})

routerCat.get('/:categoryName', (req,res)=>{
    res.send(req.params['categoryName'])
})

export default routerCat;