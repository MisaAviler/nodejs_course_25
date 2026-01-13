import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('main page')
})

router.get('/test-json', (req,res)=>{
    res.json({ "foo": 3, "bar": 3 })
})

router.get('/redirect', (req,res)=> {
    res.redirect('/test-json')
})

router.post('/random', (req,res)=>{
    res.send(String(Math.floor(Math.random() * (20 - 10 + 1)) + 10))
})

export default router;