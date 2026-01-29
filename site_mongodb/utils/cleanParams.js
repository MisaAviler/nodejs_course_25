let param = null;
let param_array = null;
let parameter = null;

export const getConsoleParams = () =>{
    const param = process.argv.slice(2)
    parameter = cleanParams(param);
    return parameter;
}


export const cleanParams = (params) => {
    for(let i = 0; i<=params.length -1; i++){
        param = params[i].startsWith('--') ? params[i].slice(2) : params[i];
        param_array = param
    }
    return param_array;
    
}

