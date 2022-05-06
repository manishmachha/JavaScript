const person1 = {
    Name: "Manish",
    Age: 23,
    about1: function() {
        console.log(this.Name, this.Age);
    }
}

let myFunc = person1.about1.bind(); // throws undefined
myFunc() // throws undefined

let myFunc1 = person1.about1.bind(person1);
myFunc1()

// -------------------------------------------------------------------------

const person2 = {
    Name: "Manish",
    Age: 23,
    about1: () => {
        console.log(this) // arrow functions dont have 'this' instead it has surrounding object which is window
        console.log(this.Name, this.Age);
    }
}

person2.about1()