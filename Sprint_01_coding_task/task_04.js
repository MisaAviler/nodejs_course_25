// Task 04

// Створіть іменований модуль prepareString, який отримує рядок, видаляє пробіли на початку та в кінці, переводить текст у нижній регістр і робить першу літеру великою.
// Модуль повинен повертати опрацьований рядок. 

// Ці дії дуже корисні під час обробки інформації перед збереженням у базу даних,
// наприклад, під час збереження імен. Подумайте, які додаткові вимоги ви б додали до цього завдання в реальному проєкті.


module.exports.prepareString = (str) => {

    try{
        if(!str || typeof str !== 'string') {
             throw new TypeError('Argument is not a string or is empty');
        }

        const mainStr = str.trim().toLowerCase();
        return mainStr.charAt(0).toUpperCase() + mainStr.slice(1);
    }
    catch(err){
        throw err;
    }
}