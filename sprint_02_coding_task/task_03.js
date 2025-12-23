// Task 03

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_3.csv і повертає масив об'єктів. При читанні пропустіть рядки так, щоб результат починався з "Title" : "Phantom...". Тобто результат повинен починатися так:
// [
//     { "Title" : "Phantom Array"



import {parse} from 'csv-parse/sync';
import {stringify} from 'csv-stringify/sync';
import {readFile} from 'fs/promises';

export const task_03 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const recordsOne = parse(data, {
            to_line: 1
        })
        const recordsTwo = parse(data, {
            from_line: 3
        })
        const recordsFull = stringify([recordsOne[0], ...recordsTwo]);
        const recordsParsed = parse(recordsFull, {
            columns: true,
        });
        return recordsParsed;
        
    }
    catch(err){
        console.log(err);
    }
}