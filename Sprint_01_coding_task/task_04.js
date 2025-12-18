// Task 04

// Створіть іменований модуль prepareString, який отримує рядок, видаляє пробіли на початку та в кінці, переводить текст у нижній регістр і робить першу літеру великою.
// Модуль повинен повертати опрацьований рядок. 

// Ці дії дуже корисні під час обробки інформації перед збереженням у базу даних,
// наприклад, під час збереження імен. Подумайте, які додаткові вимоги ви б додали до цього завдання в реальному проєкті.


module.exports.prepareString = (str) => {
    if(!str || typeof str !== 'string') {
        return console.log('String is empty or not a string');
    }
   
    const mainStr = str.trim().toLowerCase();
    const beggingIs = mainStr.charAt(0).toUpperCase() + mainStr.slice(1);
    return beggingIs; 
}