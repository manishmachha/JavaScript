function func({ Name, age, gender }) {
    console.log(Name);
    console.log(age);
    console.log(gender);
}

let person = { Name: "Manish", age: 23, gender: "Male" };
func(person);