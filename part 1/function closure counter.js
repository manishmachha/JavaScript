function func1() {
    let counter = 0
    return function func2() {
        if (counter < 1) {
            console.log("Called once")
            counter++
        } else {
            console.log("already called once")
        }
    }
}

let out1 = func1()
out1()
out1()
let out2 = func1()
out2()
out2()