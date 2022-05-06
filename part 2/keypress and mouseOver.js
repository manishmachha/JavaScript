const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e.key);
});
const btn = document.querySelector(".btn-headline");

btn.addEventListener("mouseover", () => {
    console.log(`mouse passed on ${btn.textContent}`);
});

btn.addEventListener("mouseleave", () => {
    console.log(`mouse left ${btn.textContent}`);
});