// Task 06

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_6.csv і повертає масив об'єктів. Зауважте - деяки рядки не містять повні дані іх треба фільтрувати за допомогою csv-parse.


import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_06 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            columns: true,
            skip_empty_lines: true,
            skip_records_with_error: true
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}