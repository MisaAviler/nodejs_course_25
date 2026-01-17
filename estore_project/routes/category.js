import express from 'express';
import { getGoods } from '../utils/goods.js';

const categoryRouter = express.Router();

categoryRouter.get('/', (req,res)=>{
    const info = {
        title: "Categories"
    }
    res.render('category', {info})
});

const allowedCategories = ['phones', 'laptops'];

categoryRouter.get('/:category', async (req,res)=>{

    const {category} = req.params;

    if(!allowedCategories.includes(category)){
        res.status(404).send('Not Found');
        return;
    }
    const goods = await getGoods();
    const singleCategory = goods.filter((item)=> item.category === category );

    res.render('category_single', {singleCategory});

});

export default categoryRouter;