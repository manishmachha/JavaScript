console.log(window)
console.log(this)

// Uncaught ReferenceError: Cannot access 'myFunction' before initialization
console.log(myFunction)

let myFunction = function() {
    console.log("I am myFunction")
}
console.log(myFunction)