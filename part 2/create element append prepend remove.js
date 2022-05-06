const newToDoItem1 = document.createElement("li") //creating new element
newToDoItem1.textContent = "play game" //adding the text into created element
const newToDoItem2 = document.createElement("li")
newToDoItem2.textContent = "sing song"
const toDoList = document.querySelector(".todo-list")
toDoList.append(newToDoItem1) //appending the todoList with created element
toDoList.prepend(newToDoItem2) //prepending the todoList with created element
console.log(toDoList)

// newToDoItem2.remove() //removes the element
// toDoList.before(newToDoItem2) //adds the element before the todoList
// toDoList.after(newToDoItem1) //adds the element after the todoList