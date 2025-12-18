// Task 02

// Створіть анонімний модуль, який реалізує функцію, що отримує три цілі числа як аргумент та повертає найбільше з них. 
// Якщо всі числа однакові — функція повертає будь-яке з них. 

// У цьому та подальших завданнях діє правило FairPlay — під час перевірки завжди передаватимуться всі аргументи, 
// і вони будуть цілими числами (для цього завдання).

// Якщо буде потрібно додавати додаткові перевірки — це буде вказано в умові.

module.exports = getMaxValue = (a,b,c) => {
    if( !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)){
        return console.log('Not all arguments are integers');
    }
    if(a===b && b===c){
        const anyNumberArray = [a,b,c];
        return anyNumberArray[Math.floor(Math.random() * anyNumberArray.length)];
    }
    return Math.max(a,b,c);
}


