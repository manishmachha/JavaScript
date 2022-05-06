function hello() {
    console.log("hello world")
}
console.log(hello.prototype)
hello.prototype.one = function one() { return "1" };
hello.prototype.two = function two() { return "2" };
hello.prototype.three = function three() { return "3" };
hello.prototype.user = { Name: "Manish", ID: 23 };
console.log(hello.prototype)
hello()
console.log(hello.prototype.one())
console.log(hello.prototype.one.prototype)
console.log(hello.prototype.two())
console.log(hello.prototype.two.prototype)
console.log(hello.prototype.three())
console.log(hello.prototype.three.prototype)
console.log(hello.prototype.user)

// prototype is the free object of a function where we can store functions and objects