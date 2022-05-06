const person1 = { Name: "Manish", ID: 1, Age: 23 }
console.log(person1)
const person2 = Object.create(person1)
console.log(person2.Name)
console.log(person2.ID)
console.log(person2.Age)
console.log(person2)
console.log(person2.__proto__)