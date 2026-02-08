import express from 'express';
import { get_api_data, PORT } from './utils/get_api_data.js';

const app = express();

app.get('/', async (req, res) => {
    try {
        const filtered_data = await get_api_data();
        res.json(filtered_data);
    }
    catch(err){
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/:currency', async(req,res)=>{
    try{
        const api_data = await get_api_data();
        const {currency} = req.params;
        let filtered_data = {};
        if(api_data[currency.toUpperCase()]){
            filtered_data = {[currency.toUpperCase()] : api_data[currency.toUpperCase()]}
        }
        else {
            return res.status(404).json({
            code: 404,
            message: 'This currency does not found'
      });
        }
        res.json(filtered_data)
    }
     catch(err){
        res.status(500).json({ error: 'Something went wrong' });
    }

})

app.listen(PORT, ()=>{
    console.log(`Server works on http://localhost:${PORT}`)
})