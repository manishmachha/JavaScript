const mainHeading = document.getElementById("main-heading")

//inner text only shows the text that is displayed on browser but not hidden texts
console.log(mainHeading.innerText)
mainHeading.textContent = "something else"
console.log(mainHeading.innerText)