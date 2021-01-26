const products = [
    {
        product: "молоко",
        price: "25",
        count: "3"
    },
    {
        product: "картошка",
        price: "14",
        count: "10"
    },
    {
        product: "минералка",
        price: "30",
        count: "2"
    },
    {
        product: "хлеб",
        price: "9",
        count: "1"
    },
    {
        product: "конфеты",
        price: "10",
        count: "15"
    },
]

// Используя prompt указать сумму, и вы должны написать расчет денег на покупку продуктов на всю семью, продукты + цена + кол-во указанны в масиве products

// Указать в alerts сколько целых дней смогут прожить семья Петровичей на указаннуюу сумму и указать остаток денег.

// ---------------------------------------------------------------
// Cемья Петровичей на указаннуюу сумму сможит прожить n дней
// Остаток: n рублей

let money = prompt("Укажите сумму для семьи Петровичей");
let moneyForOneDay = 0;

for (let j = 0; j < products.length; j++) {
    moneyForOneDay += products[j].count * products[j].price;
}

let days = money / moneyForOneDay < 1 ? 0 : Math.round(money / moneyForOneDay);
let balance = money % moneyForOneDay;

console.log(`Cемья Петровичей на указаннуюу сумму сможит прожить ${days} дней ${moneyForOneDay}`)
console.log(`Остаток: ${balance}`)