const person1 = { Name: "Manish", Age: 23, about: details }
const person2 = { Name: "Ashish", Age: 25, about: details }
const person3 = { Name: "Scooby", Age: 26, about: details }

person1.about()
person2.about()
person3.about()

function details() {
    console.log(`name is ${this.Name} and age is ${this.Age}`)
}