// Task 05

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_5.csv і повертає масив об'єктів. У цьому файлу є проблема - зайві пусті рядки.



import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_05 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            skip_empty_lines: true
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}