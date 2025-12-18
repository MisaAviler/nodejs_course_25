// Task 06


//Створіть іменований модуль integerPart, який отримує десятковий дріб і повертає його цілу частину.


module.exports.integerPart =(num)=>{
    if( typeof num !== 'number') {
        return console.log('Is not a number');
    }
    return Math.trunc(num)
}