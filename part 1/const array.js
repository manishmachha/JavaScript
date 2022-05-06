//const array can be changed by array methods without using []
const array1 = [1, 2, 3];
array1.push(4, 5); //valid
// array1 = [].concat(6, 7);//invalid
console.log(array1);