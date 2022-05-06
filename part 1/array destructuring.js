const array1 = [1, 2, 3, 4];
[array2, array3, ...array4] = array1;
console.log(array2);
console.log(array3);
console.log(array4);
console.log(typeof(array4));