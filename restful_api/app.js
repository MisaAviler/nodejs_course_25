import express from 'express';
import { PORT } from './utils/get_api_data.js';
import router from './routes/currency.js'


const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/currency', router)

app.get('/',  (req, res) => {
   res.render('main', {})
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, ()=>{
    console.log(`Server works on http://localhost:${PORT}`)
})