import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url); //current file getUsers
const __dirname = dirname(fileName); //current folder utils

export const getFilePath = () => {
    const pathToFile = join(__dirname, '../data/users.json');
    return pathToFile;

}