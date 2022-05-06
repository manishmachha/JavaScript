let person = { "first name": "manish", age: 22, hobbies: ["coding", "drawing", "gaming"] };
console.log(person);
// bracket notation
console.log(person["first name"]);
//dot notation
console.log(person.hobbies);

let key = "email";
person.key = "abc@gmail.com" // this shows in console the name of key as key itself
console.log(person);
// this shows in console the name of key as email
person[key] = "abc@gmail.com"
console.log(person);