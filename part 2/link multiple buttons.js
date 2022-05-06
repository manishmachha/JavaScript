const btns = document.querySelectorAll(".my-buttons button");

// for (let btn of btns) {
//     btn.addEventListener("click", function() {
//         console.log(this.textContent + " " + "hello");
//     });
// }

// for (let btn of btns) {
//     btn.addEventListener("click", function() {
//         console.log("hello");
//     });
// }

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         console.log(this.textContent + " " + "hello");
//     });
// }

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log(this.textContent + " " + "hello")
    })
})