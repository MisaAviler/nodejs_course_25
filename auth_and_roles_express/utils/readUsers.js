import { readFile } from 'fs/promises';
import { getFilePath } from './getFilePath.js';


export const readUsersFileJson = async () => {

    try{
        const pathToFile = getFilePath();
        const data = await readFile(pathToFile, 'utf-8');
        const parsedData = JSON.parse(data);
        return parsedData;
    }
    catch(err){
        throw new Error(`Failed to read users.json: ${err.message}`);
    }
}


