import {readFile} from 'fs/promises'
import { types } from './types.js';

export const getFileContent = async (res, filePath, contentType) =>{
    try{
        console.log(filePath)
        const data = await readFile(filePath);
        res.setHeader('Content-Type', types[contentType]);
        res.end(data);
       }
    catch(err){
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Image not found');
        }
}