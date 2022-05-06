const numbers = [4, 6, 2, 8, 1, 9];

function func(number) {
    console.log(number * 2);
}
const Nos = numbers.map(func);
console.log(Nos);