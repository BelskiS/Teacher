//палиндром

const isPolindrom = str => {
    str = str.lowerCase();
    return str === str.split('').revert().join('');
}
