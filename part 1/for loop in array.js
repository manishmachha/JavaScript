let array1 = ["aa", "bb", "cc"];
let array2 = [];
for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].toUpperCase());
}
console.log(array2);