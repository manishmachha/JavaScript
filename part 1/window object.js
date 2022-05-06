console.log(this)
myFunc()
myFunc1()

function myFunc() {
    "use strict"
    console.log(this)
}

function myFunc1() {
    console.log(this)
}