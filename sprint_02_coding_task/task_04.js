// Task 04

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_4.csv і повертає масив масивів рядків. Тобто:
// [
//  ["Atlas Protocol", 2004, 4.0, ],






import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_04 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            from_line: 2,
            delimiter: '='
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}