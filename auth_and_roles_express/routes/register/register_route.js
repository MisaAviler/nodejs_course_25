import express from 'express';
import { writeNewUser } from '../../utils/writeNewUser.js';
import { readUsersFileJson } from '../../utils/readUsers.js'

const users_data = await readUsersFileJson();
const register_route = express.Router();


register_route.get('/register', (req,res)=>{
    if(req.session.username){
         res.render('index', {message: 'You have been registered'})
    }
    else{
        res.render('register')
    }
    
})

register_route.post('/register', async (req,res)=>{
    const check_user = users_data.find(username=> username.email===req.body.email);
    if (!check_user){
            const new_user = {
                'username': req.body.username,
                'password': req.body.password,
                'email': req.body.email,
                'role': 'user'
            }
        users_data.push(new_user)
        await writeNewUser(JSON.stringify(users_data))
        res.render('login', {message: "Congrats, you've been registered, now please login"})
    }
    else {
        res.render('register', {error: "Email isn't allowed"})
    }
})

export default register_route;