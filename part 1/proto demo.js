function createUser(Name, ID, Age) {
    const user = Object.create(userMethods);
    user.Name = Name;
    user.Age = Age;
    user.ID = ID;
    return user;
}

const userMethods = {
    about: function() {
        return `name is ${this.Name} and age is ${this.Age}`;
    },
    is18: function() {
        return this.Age >= 18;
    }
}

const user1 = createUser("Danish", 1, 23);
console.log(user1);
console.log(user1.about());
const user2 = createUser("ashish", 2, 21);
console.log(user2);
console.log(user2.about());