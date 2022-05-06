function hello(Name) {
    this.Name = Name
}

hello.prototype.wish = function() { console.log(`hello ${this.Name}`) }

const user1 = new hello("Manish")
user1.wish()

//new keyword
// 1) creates empty Object {}
// 2) returns empty Object {}
// 3) creates __proto__ with prototype