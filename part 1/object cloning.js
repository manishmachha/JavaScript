const obj1 = { Name: "Manish", ID: 1, age: 23 }
const obj2 = Object.assign({}, obj1)
const obj3 = {...obj1 }
console.log(obj1)
obj1.height = 5.4
console.log(obj1)
console.log(obj2)
console.log(obj3)