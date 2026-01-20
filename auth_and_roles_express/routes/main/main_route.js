import express from 'express'

const main_route = express.Router();

const requireAuth = (req,res,next) => {
    if(req.session.username) next();
    else{ 
        res.redirect('/login')
    }
}

main_route.get('/', (req,res) => {
    res.render('index', {message:'main page'})
})

main_route.get('/only-users', requireAuth, (req,res)=>{
    res.render('only_users', {message:'Only users'})
  })

main_route.get('/logout', (req,res) =>{
    req.session.destroy((err) => {
        if(err){
            console.log('Error destroy session')
        }
        res.redirect('/')
  
    })
})

main_route.get('/about', (req,res) => {
    res.render('about', {message: 'About page'})
})
main_route.get('/admin', requireAuth, (req,res) => {

    if(req.session.role === 'admin'){
        res.render('admin')
    }
    else{
         res.redirect('/')
    }
})
export default main_route