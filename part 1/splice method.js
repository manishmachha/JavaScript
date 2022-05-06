const numbers = [1, 3, 6, 3, 7, 9];

//delete
numbers.splice(2, 2);
console.log(numbers);

//delete and insert
numbers.splice(2, 2, 1, 2, 4);
console.log(numbers);

//insert
numbers.splice(2, 0, 2);
console.log(numbers);