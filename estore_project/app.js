import express from 'express'
import {router, categoryRouter} from './routes/index.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import {not_found} from './middleware/index.js'
import {ROUTES} from './common/index.js'
import dotenv from 'dotenv'
import {getGoods} from './utils/goods.js'

dotenv.config()

const app = express();


app.set('view engine', 'pug');
app.set('views','./views');

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

app.use(ROUTES.HOME, router);
app.use(ROUTES.CATEGORY, categoryRouter);
app.use(ROUTES.DOWNLOAD, express.static(join(__dirname, 'data')))

app.use(not_found)

   
app.listen(PORT, ()=> {
    console.log(`server works on http://localhost:${PORT}`)
})
