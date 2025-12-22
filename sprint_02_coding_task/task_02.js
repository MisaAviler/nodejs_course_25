// Task 02

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_2.csv і повертає масив об'єктів. В цьому CSV файлів не буде помилок. 


import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_02 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            columns: true,
            delimiter: ';'
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}