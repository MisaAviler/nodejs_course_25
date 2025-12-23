// Task 07

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_7.csv і повертає масив об'єктів. Забезпечьте видалення пробілів на початку та кінці рядків даних.
// Для відображення рядків в редакторі VSCode знайдіть та ввімкніть опцію Editor -> Render Whitespace -> all


import {parse} from 'csv-parse/sync';
import {readFile} from 'fs/promises';

export const task_07 = async (pathToFile) => {
    try{
        const data = await readFile(pathToFile, 'utf8');

        const records = parse(data, {
            columns: true,
            trim: true,
            skip_records_with_error: true
        })
        return records;
    }
    catch(err){
        console.log(err);
    }
}