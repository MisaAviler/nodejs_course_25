import { writeFile } from 'fs/promises';
import { getFilePath } from './getFilePath.js';

const usersFile = getFilePath();


export const writeNewUser = async (content) =>{
    try{
        const updated_user_file = writeFile(usersFile,content,{ encoding: 'utf-8' });
        return updated_user_file;
    }
    catch(err){
        throw new Error(`No data file ${err}`)
    }
}

