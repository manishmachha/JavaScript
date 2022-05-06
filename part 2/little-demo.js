const btn = document.querySelector("button")
const currentColor = document.querySelector(".current-color")
const body = document.body

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let randColor = `rgb(${red},${green},${blue})`
    return randColor
}

btn.addEventListener("click", () => {
    const bodyColor = randomColor();
    document.body.style.backgroundColor = bodyColor
    currentColor.textContent = bodyColor
})