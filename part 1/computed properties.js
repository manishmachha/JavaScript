let key1 = "objKey1";
let key2 = "objKey2";
let value1 = "myValue1";
let value2 = "myValue2";

const object = { key1: value1, key2: value2 };
console.log(object);
const object1 = {
    [key1]: value1,
    [key2]: value2,
};
console.log("---------------------------------");
console.log(object1);
console.log("---------------------------------");
const object2 = {};
object2[key1] = value1;
object2[key2] = value2;
console.log(object2);