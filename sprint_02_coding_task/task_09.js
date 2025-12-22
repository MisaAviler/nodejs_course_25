// Task 09

// Напишіть модуль який отримує аргумент рядок даних і повертає масив об'єктів. Перший рядок - рядок заголовків.


import {parse} from 'csv-parse/sync';

export const task_09 =  (data) => {
    try{
        const dataParsed = parse(data, {
            columns: true
        });
        return dataParsed;
    }
    catch(err){
        console.log(err);
    }
}