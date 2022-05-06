const users = new Map()
users.set('name', 'manish')
users.set('age', 23)
users.set('gender', 'male')
console.log(users)

for (let [key, value] of users) {
    console.log(key, " : ", value)
}



const data = new Map([
    ['name', 'ashish'],
    ['age', 21],
    ['gender', 'male']
])
console.log(data)

for (let [key, value] of data) {
    console.log(key, " : ", value)
}



const person1 = { name: "manish", age: 23 }
const details = new Map()
details.set(person1, { gender: "male", ID: 1 })
console.log(details.get(person1))
console.log(details.get(person1).gender)