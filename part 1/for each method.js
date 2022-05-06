function func1(number, index) {
    console.log(`${number} is at index ${index}`);
}

function func2(user) {
    console.log(user.Name);
}

const numbers = [11, 21, 31, 41, 51, 61];
numbers.forEach(func1);

const users = [{ Name: "manish", age: 23, gender: "Male" }, { Name: "ashish", age: 21, gender: "Male" }, { Name: "scooby", age: 6, gender: "female" }];
users.forEach(func2);