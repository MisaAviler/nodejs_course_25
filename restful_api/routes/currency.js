import express from 'express';
import { get_api_data } from '../utils/get_api_data.js';


const router = express.Router()
router.get('/', async (req, res) => {
    try {
        const filtered_data = await get_api_data();
        res.json(filtered_data);
    }
    catch(err){
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.get('/:specific', async(req,res)=>{
    try{
        const api_data = await get_api_data();
        const key = req.params.specific.toUpperCase();
        if(!api_data[key]){
            return res.status(404).json({
            code: 404,
            message: 'This currency does not found'
        })}
        else {
            return res.json({[key]:[api_data[key]]})
        }
    }
     catch(err){
        res.status(500).json({ error: 'Ooops. Something went wrong' });
    }
})

export default router;