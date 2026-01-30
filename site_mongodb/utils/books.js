import {readFile} from 'fs/promises';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import path from 'path';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);
let booksFileData = {};

export const getBooks = async () => {
    try{
        const filePath = join(__dirname, '../data/books.json');
        const data = await readFile(filePath, 'utf-8');
        const parsedData = JSON.parse(data);
        const filePathBaseName =  path.basename(filePath);

        booksFileData.fileName = filePathBaseName;
        booksFileData.dataBooks = parsedData;
        return booksFileData;
    }
    catch(err){
        console.log(err)
    }
}