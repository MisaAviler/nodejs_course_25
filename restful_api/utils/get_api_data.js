import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 4100;
const PB_API='https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'

export const get_api_data = async() => { 
    try {
        const response = await fetch(PB_API);
        const data = await response.json();
        const filtered_data = {};


        data.forEach(el => {
        filtered_data[el.ccy] = {
            buy: parseFloat(el.buy),
            sale: parseFloat(el.sale)
        };
        });

    return filtered_data;
  } catch (err) {
        throw new Error(err)
}}