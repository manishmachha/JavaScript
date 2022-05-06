const numbers = [4, 6, 2, 8, 1, 9];
let isOdd = function(number) {
    return number % 2 !== 0;
};
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);