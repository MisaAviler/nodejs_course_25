import {Router} from 'express';

const router = Router();

router.get('/', (req,res)=>{
   res.render('main', {})
});

router.post('/create', (req,res)=>{
    const {url} = req.body;
    console.log(url);
    res.end('1')
})

export default router;