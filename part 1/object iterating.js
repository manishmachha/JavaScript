const person = { name: "manish", age: 22, hobbies: ["coding", "drawing", "gaming"] };
//for in loop
for (let key in person) {
    console.log(key);
}
console.log("---------------------");
for (let key in person) {
    console.log(person[key]);
}
console.log("---------------------");
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}
console.log("---------------------");
for (let key in person) {
    console.log(key, " : ", person[key]);
}
//for of loop
console.log("---------------------");
for (let key of Object.keys(person)) {
    console.log(key);
}
console.log("---------------------");
for (let key of Object.keys(person)) {
    console.log(`${key} : ${person[key]}`);
}
console.log("---------------------");
for (let key of Object.keys(person)) {
    console.log(key, " : ", person[key]);
}