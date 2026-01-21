import express from 'express';
import session from 'express-session';
import FileSession from 'session-file-store'
import fs from 'fs'
import dotenv from 'dotenv'
import {main_route, login_route, register_route} from './routes/index.js'
import { not_found } from './middleware/not_found.js';
dotenv.config();

const SessionFileStore = FileSession(session)

if(!fs.existsSync('./sessions')){
    fs.mkdir('./sessions', (err) => {
        if(err) console.error(err);
    })
}

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views')


app.use((req,res,next)=>{
    console.log(req.method, req.url)
    next()
})
app.use(session({
    secret : 'secret key',
    resave: false,
    saveUninitialized: false, // false- for practice, true - for production
    cookie: {secure: false}, // false- for practice, true - for production
    store: new SessionFileStore({
        path: './sessions',
        ttl: 24 * 60 * 60 * 30,
        retries: 1
    })
}));


//For POST method
app.use(express.urlencoded({extended:true}));

app.listen(PORT,()=>{
console.log(`Server works on http://localhost:${PORT}`);
})

app.use((req,res,next) => {
    if(req.session.username) {
        res.locals.username = req.session.username
        res.locals.role = req.session.role
        res.locals.email = req.session.email
    }
    next();
})
app.use(main_route);
app.use(login_route);
app.use(register_route)
app.use(not_found)