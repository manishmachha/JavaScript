function func1(var1, var2) {
    function func2() {
        varA = "hello"
        varB = "Namaste"
        console.log(varA, varB, var1, var2)
    }
    return func2
}
const print = func1("Manish", "Ashish")
print()