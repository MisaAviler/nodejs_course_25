// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.



module.exports.randomSymbol = (str)=>{
    try{
        if(typeof str !== 'string') {
            throw new TypeError('Argument is not a string')
        }
        return str.charAt(Math.floor(Math.random() * str.length));

    }
    catch(err){
        throw err;
    }
   

}