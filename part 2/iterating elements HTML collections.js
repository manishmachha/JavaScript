let navItems = document.getElementsByTagName("a")
console.log(navItems)
console.log(typeof navItems) // array like object (HTML Collections)

// we can only use 'for' and 'for of' loops to iterate array like objects (HTML Collections)
// we cannot use forEach method to iterate Array like objects (HTML Collections)
// to use forEach method we need to convert it to array

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
navItems = Array.from(navItems)
console.log(Array.isArray(navItems))
navItems.forEach((navItem) => {
    navItem.style.color = "green"
    navItem.style.backgroundColor = "orange"
    navItem.style.fontWeight = "bold"
    console.log(navItem.style.color)
    console.log(navItem.style.backgroundColor)
});