// Task 07

// Створіть анонімний модуль у цьому файлі, який отримує рядок і перевіряє наявність пробілу всередині рядка.
// Повертає false, якщо пробіл існує, і true — якщо всередині рядка пробілів немає.
// Пробіли на початку та в кінці рядка не повинні впливати на результат.

// Сподіваюся, у вас відображаються пробіли в коді.
// Такі перевірки корисні для валідації даних.


// Приклади
// 'abcd efjklsjdududdd' -> false
// 'abcdefjklsjdududdd   ' -> true
// ' foo ' -> true
// ' f oo ' -> false

module.exports=(str)=>{

    try{
        if (typeof str !=='string'){
            throw new TypeError('Argument is not a string')
        }
        const newStr = str.trim();
        return newStr.includes(' ') ? false : true;
    }
    catch(err){
        throw err;
    }
     
   

}