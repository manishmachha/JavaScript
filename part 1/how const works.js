console.log(window)
console.log(this)

// Uncaught ReferenceError: Cannot access 'fName' before initialization
console.log(fName)
console.log(myFunction)

function myFunction() {
    console.log("I am myFunction")
}
const fName = "Manish"

console.log(fName)
console.log(myFunction)