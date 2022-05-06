let array1 = ["a", "b", "c"];
let array2 = [];
let i = 0;
while (i < array1.length) {
    array2.push(array1[i].toUpperCase());
    i++;
}
console.log(array2);