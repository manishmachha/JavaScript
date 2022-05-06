function createUser(Name, ID, Age) {
    const user = {};
    user.Name = Name;
    user.Age = Age;
    user.ID = ID;
    user.about = function() {
        return `name is ${this.Name} and age is ${Age}`;
    };
    user.is18 = function() {
        return this.Age >= 18;
    };
    return user;
}

const user1 = createUser("manish", 1, 23);
const user2 = createUser("ashish", 2, 21);
console.log(user1);
const about1 = user1.about();
console.log(about1);

console.log(user2);
const about2 = user2.about();
console.log(about2);