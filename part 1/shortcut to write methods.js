const person1 = {
    Name: "Manish",
    Age: 23,
    about1() { //shortcut to write method
        console.log(this.Name, this.Age);
    },
};

person1.about1();