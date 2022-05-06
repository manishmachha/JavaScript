let navItems = document.querySelectorAll("a")
console.log(navItems)
console.log(typeof navItems) // array like object (Node list)

// we can only use 'for' and 'for of' loops to iterate array like objects (Node list)
// we can use forEach method to iterate Array like objects (Node list)
// we can convert it to array

for (let navItem of navItems) {
    navItem.style.color = "red"
    navItem.style.backgroundColor = "green"
    navItem.style.fontWeight = "bold"
    console.log(navItem.style.color)
    console.log(navItem.style.backgroundColor)
}
console.log(" ")
for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i]
    navItem.style.color = "blue"
    navItem.style.backgroundColor = "red"
    navItem.style.fontWeight = "bold"

    console.log(navItem.style.color)
    console.log(navItem.style.backgroundColor)
}
console.log(" ")
console.log(Array.isArray(navItems))
navItems.forEach((navItem) => {
    navItem.style.color = "green"
    navItem.style.backgroundColor = "orange"
    navItem.style.fontWeight = "bold"
    console.log(navItem.style.color)
    console.log(navItem.style.backgroundColor)
});
console.log(" ")
navItems = Array.from(navItems)
console.log(Array.isArray(navItems))
navItems.forEach((navItem) => {
    navItem.style.color = "yellow"
    navItem.style.backgroundColor = "pink"
    navItem.style.fontWeight = "bold"
    console.log(navItem.style.color)
    console.log(navItem.style.backgroundColor)
});