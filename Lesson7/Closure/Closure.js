

const summ = (first = 20, second = 50, third = 10) => first - third + second;

console.log(summ('10', 50))

const summ = (first = 20, second = 50, third = 10) => first - third + second;

console.log(summ(undefined, 50))

function summ() {
    const example = [...arguments];
    return example.filter((item) => item === 10);
}

function getOptionsWithName() {
    const name = "User";
    return [...arguments, name];
}

console.log(summ(10, 820, 30));
console.log(summ(10, 20, 530));
console.log(summ(102, 120, 30));
console.log(summ(105, 220, 30));

let a = "global";
function outer() {
    let b = "outer";
    function inner() {
        let c = "inner";
        console.log(c); // выдаст 'inner'
        console.log(b); // выдаст 'outer'
        console.log(a); // выдаст 'global'
    }
    console.log(a); // выдаст 'global'
    console.log(b); // выдаст 'outer'
    inner();
}
outer();
console.log(a);
