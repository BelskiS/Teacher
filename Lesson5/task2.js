const compact = (array) => {
    let responce = [];
    array.forEach((el) => {
        if (!!el) responce.push(el);
    })
    return responce;
};
