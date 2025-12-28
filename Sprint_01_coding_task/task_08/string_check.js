module.exports = (str) =>{

    try{
        if (typeof str !=='string'){
            throw new TypeError('Argument is not a string')
        }
        const newStr = str.split("");
        const hasUppercase = newStr.some((el)=> el === el.toUpperCase() && el !== ' ' );
        if (!hasUppercase){
            return true;
        }
        else return false;

    }
    catch(err){
        throw err;
    }
}
