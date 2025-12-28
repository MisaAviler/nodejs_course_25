// Task 06


//Створіть іменований модуль integerPart, який отримує десятковий дріб і повертає його цілу частину.


module.exports.integerPart =(num)=>{
    try{
        if( typeof num !== 'number') {
            throw new TypeError('Argument is not a number');
        }
        return Math.trunc(num)
    }
    catch(err){
        throw err;
    }
}