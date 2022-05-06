const btns = document.querySelectorAll(".my-buttons button");
for (let btn of btns) {
    btn.addEventListener("click", function(event) {
        console.log(event.currentTarget);
    });
}