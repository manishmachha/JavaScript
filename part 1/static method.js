class Animal {
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    eat() {
        console.log(`${this.Name} is eating`);
    }
    static jump() {
        console.log(`animal is jumping`);
    }
}

const cow = new Animal("tommy", 21);
cow.eat();
Animal.jump();