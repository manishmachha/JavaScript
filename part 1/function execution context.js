let number = 1
console.log(number)

function getFullName(firstName, lastName) {
    console.log(arguments)
    console.log("argument length: " + arguments.length)
    console.log("argument1: " + arguments[0])
    console.log("argument2: " + arguments[1])
    let myVar = "var inside func"
    console.log(myVar)
    const fullName = firstName + " " + lastName
    return fullName
}

const personName = getFullName("Manish", "Machha")
console.log(personName)