console.log("script start")
const btns = document.querySelectorAll(".my-buttons button");
for (let btn of btns) {
    btn.addEventListener("click", function(event) {
        let num = 0
        for (let i = 0; i <= 1000000000; i++) {
            num += i;
        }
        console.log(event.currentTarget.textContent, num);
    });
}

let val = 0;
for (let j = 0; j <= 1000000000; j++) {
    val += j
}
console.log("value: " + val)
console.log("script end")