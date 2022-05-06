const object1 = {... "123" };
const object2 = { key1: 4, key2: 5, key3: 6 };
const object3 = {...object1, ...object2, ... "manish" };
console.log(object3);
const object4 = {...object1, ...object2 };
console.log(object4);