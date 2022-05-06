// class Animal {
//     constructor(Name, Age) {
//         this.Name = Name;
//         this.Age = Age;
//     }

//     eat() {
//         console.log(`${this.Name} is eating`);
//     }

//     isCute() {
//         if (this.Age <= 1) {
//             console.log(`${this.Name} is cute`);
//         } else console.log(`${this.Name} is  not cute`);
//     }
// }

// class Dog extends Animal {
//     constructor(Name, Age, Speed) {
//         super(Name, Age);
//         this.Speed = Speed;
//     }
// }

// const Scooby = new Dog("Scooby", 6, 25);
// Scooby.eat();
// Scooby.isCute();