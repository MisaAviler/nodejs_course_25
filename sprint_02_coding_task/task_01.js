// Task 01

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_1.csv і повертає масив об'єктів виду. В цьому CSV файлів не буде помилок. 
// Оскільки ми відпрацьовуємо роботу с пакетом csv-parse то перевіряти існування файла - не треба. Тобто файл існує, не пустий.
// Приклад виклику - написаний у app.js

// В налаштуваннях csv-parse тут і в інших тасках використовуйте МІНІМАЛЬНИЙ набір параметрів

// [
//     {Title : Neon AudioWorklet, Year: 1981..}
//     ...
// ]


import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_01 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            columns: true
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}