const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newList = document.createElement("li");
    newList.innerHTML = ` <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    todoList.append(newList);
    todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentNode.parentNode.remove()
    }

    if (e.target.classList.contains("done")) {
        e.target.parentNode.previousElementSibling.style.textDecoration = "line-through"
    }
});