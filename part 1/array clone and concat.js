let array1 = [1, 2, 3];
console.log(array1);

//slice method to concat arrays
let array2 = array1.slice(0);
console.log(array2);
console.log(array1 === array2);

//concat method to concat arrays
// let array3 = [].concat(array1);
//let array3 = [].concat(array1, [4, 5]);
let array3 = [].concat(array1, array2);
console.log(array3);

//spread method to concat arrays
//let array4 = [...array1];
// let array4 = [...array1, ...array3];
let array4 = [...array1, ...[6, 7, 8]];
console.log(array4);