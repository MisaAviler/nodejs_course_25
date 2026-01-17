let cached_goods = null;

export const setCachedGoods = (goods)=>{
    cached_goods = goods;
}

export const getCachedGoods = ()=>{
    return cached_goods;
}