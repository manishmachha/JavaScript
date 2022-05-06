function func1() {
    function hello() {
        console.log("Hello world");
    }
    return hello;
}

console.log(func1());
let greet = func1();
console.log(greet());