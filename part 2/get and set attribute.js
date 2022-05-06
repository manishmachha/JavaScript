const link = document.querySelector("a")
console.log(link.getAttribute("href"))
link.setAttribute("href", "http://www.google.com")
console.log(link.getAttribute("href"))

const form = document.querySelector(".form-todo input")
console.log(form.getAttribute("type"))
form.setAttribute("type", "number")
console.log(form.getAttribute("type"))