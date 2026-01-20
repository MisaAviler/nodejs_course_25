import express from 'express'
import { readUsersFileJson } from '../../utils/readUsers.js'

const users_data = await readUsersFileJson();
const login_route = express.Router();


login_route.get('/login', (req,res) => {
    res.render('login')
  })
login_route.post('/login', (req,res) => {
    const {username, password} = req.body;


    const user = users_data.find(user_data=>user_data.username===username && user_data.password===password)
    if (user){
        req.session.username = username; // save username in ./sessions/cookie
        req.session.role = user.role; // save role in ./sessions/cookie
        req.session.email = user.email; // save email in ./sessions/cookie
        res.redirect('/');
    }
    else{
        res.render('login', {error: "Invalid login and password"})
    }
});

export default login_route;