const todoList = document.querySelector(".todo-list")
todoList.insertAdjacentHTML("beforeend", "<li>play game</li>") //append
todoList.insertAdjacentHTML("afterbegin", "<li>sing song</li>") //prepend
todoList.insertAdjacentHTML("beforebegin", "<li>watch tv</li>") //before
todoList.insertAdjacentHTML("afterend", "<li>drink water</li>") //after