const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.style)
mainHeading.style.color = "green"

// we cannot use '-' in style properties like background-color instead we can use camelCase like backgroundColor

mainHeading.style.backgroundColor = "red"
mainHeading.style.border = "5px solid white"