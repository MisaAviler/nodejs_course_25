// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.



module.exports.randomSymbol = (str)=>{
    if(typeof str !== 'string') {
        return console.log('String is not a string');
    }
const symbolIs = str.charAt(Math.floor(Math.random() * str.length));
return symbolIs;
}