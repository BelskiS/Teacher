// *****
// ****
// ***
// **
// *

const star = "*";
let stars = "";
for (let i = 1; i < 8; i++) {
    for(let j = i; j < 8; j++) {
        stars += star;
    }
    console.log(`${stars}\n`);
    stars = "";
}

// *
// **
// ***
// ****
// *****
// ******

const star = "*";
let stars = "";
const count = 8;
for (let i = count; i > 0; i--) {
    for(let j = count + 1 - i; j > 0; j--) {
        stars += star;
    }
    console.log(`${stars}\n`);
    stars = ""; 
}

// Есть число n = 1420540 Надо его делить на 2 до тех пор покуда, частное не будет меньше 50

// Вывести в alert число делений (кол-во раз сколько приходилось делить) + само конечное частное

let n = prompt("Введите число");

