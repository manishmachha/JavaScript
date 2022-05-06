const ul = document.querySelector(".todo-list")
const listItems1 = ul.getElementsByTagName("li") // live list
const listItems2 = ul.querySelectorAll("li") // static list
const newTodo = document.createElement("li")
newTodo.textContent = "bye bye"
ul.append(newTodo)
console.log(listItems1) // live list
console.log(listItems2) // static list