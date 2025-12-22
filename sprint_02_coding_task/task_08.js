// Task 08

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_8.csv і повертає масив об'єктів. 


import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_08 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            columns: true,
            skip_records_with_error: true
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}