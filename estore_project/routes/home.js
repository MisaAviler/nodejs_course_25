import express from 'express';
import { getGoods } from '../utils/goods.js';
import { getRandomObjects } from '../utils/randomSelectedData.js';


const router = express.Router();

router.get('/', async (req,res) => {
        const goods =  await getGoods()
        const phones = goods.filter((item)=>item.category ==='phones');
        const laptops = goods.filter((item)=>item.category ==='laptops');


        const section = [
                { category: 'phones', items: getRandomObjects(phones, 4) },
                { category: 'laptops', items: getRandomObjects(laptops, 4) }
        ];

        res.render('main', {section})
})
export default router;