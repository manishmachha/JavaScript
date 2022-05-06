function CreateUser(Name, ID, Age) {
    this.Name = Name;
    this.Age = Age;
    this.ID = ID;
}

CreateUser.prototype.about = function() {
        return `name is ${this.Name} and age is ${this.Age}`;
    },
    CreateUser.prototype.is18 = function() {
        return this.Age >= 18;
    };

const user1 = new CreateUser("Danish", 1, 23);
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
const user2 = new CreateUser("ashish", 2, 21);
console.log(user2);
console.log(user2.about());
console.log(user2.is18());