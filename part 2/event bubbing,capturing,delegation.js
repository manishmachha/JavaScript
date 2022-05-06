const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body

// body.addEventListener("click", () => {
//     console.log("bubble body");
// }, true);
// grandparent.addEventListener("click", () => {
//     console.log("bubble grandparent");
// }, true);
// parent.addEventListener("click", () => {
//     console.log("bubble parent");
// }, true);
// child.addEventListener("click", () => {
//     console.log("bubble child");
// }, true);


// body.addEventListener("click", () => {
//     console.log("clicked on body");
// });
// grandparent.addEventListener("click", () => {
//     console.log("clicked on grandparent");
// });
// parent.addEventListener("click", () => {
//     console.log("clicked on parent");
// });
// child.addEventListener("click", () => {
//     console.log("clicked on child");
// });


body.addEventListener("click", (e) => {
    console.log(e);
});
// grandparent.addEventListener("click", (e) => {
//     console.log(e);
// });
// parent.addEventListener("click", (e) => {
//     console.log(e);
// });
// child.addEventListener("click", (e) => {
//     console.log(e);
// });


// body.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
// });
// grandparent.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
// });
// parent.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
// });
// child.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
// });