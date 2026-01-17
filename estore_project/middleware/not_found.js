export const not_found = (req,res,next)=>{
    res.status(404).send('Not Found')
}