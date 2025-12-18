module.exports = (str) =>{

        if (typeof str !=='string'){
            return console.log('Is not a string');
        }
        const newStr = str.split("");
        const hasUppercase = newStr.some((el)=> el === el.toUpperCase() && el !== ' ' );
        if (!hasUppercase){
            return console.log(true);
        }
       else return console.log(false);

        
    }
