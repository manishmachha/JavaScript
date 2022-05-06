class createUser {
    constructor(Name, ID, Age) {
        this.Name = Name;
        this.Age = Age;
        this.ID = ID;
    }
    about() {
        return `name is ${this.Name} and age is ${this.Age}`;
    }
    is18() {
        return this.Age >= 18;
    }
}

user1 = new createUser("Manish", 12, 23);
console.log(user1)
console.log(user1.about())
console.log(user1.is18())