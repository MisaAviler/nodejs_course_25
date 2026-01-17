import {readFile} from 'fs/promises';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import { getCachedGoods, setCachedGoods } from './cache.js';

/**
 * @typedef {Object} Product
 * @property {string} category
 * @property {string} title
 * @property {string} url
 * @property {number} price
 * @property {string} image
 * @property {string} description
 * @property {number} stock
 * @returns {Promise<[object<Product>]>}
 */


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

export const getGoods = async () => {
    const cached = getCachedGoods();
    if(cached){
        return cached;
    }
    const filePath = join(__dirname, '../data/goods.json');
    const data = await readFile(filePath, 'utf-8');
    setCachedGoods(JSON.parse(data))
    return JSON.parse(data)

    
}