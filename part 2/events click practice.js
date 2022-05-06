const btns = document.querySelectorAll(".my-buttons button")
btns.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "red"
    })
})