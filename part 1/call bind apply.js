const person1 = {
    Name: "Manish",
    Age: 23,
    about1: function() {
        console.log(this.Name, this.Age);
    },
    about2: function(hobby) {
        console.log(this.Name, this.Age, hobby);
    },
};
const person2 = { Name: "Ashish", Age: 21 };

person1.about1.call(person2);
person1.about2.call(person2, "sleeping");
person1.about2.apply(person2, ["sleeping"])
const func1 = person1.about2.bind(person1, "sleeping")
func1()

myFunc1.call(person1) // call method calls the function by taking an argument
myFunc2.call(person1, "eating")
myFunc2.apply(person2, ["eating"]) // apply method calls the function by taking other arguments in array
const func2 = person1.about2.bind(person1, "eating") //bind method returns a function
func2()



function myFunc1() {
    console.log(this.Name, this.Age);
}

function myFunc2(hobby) {
    console.log(this.Name, this.Age, hobby);
}