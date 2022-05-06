console.log("script start")

const id = setTimeout(() => { console.log("inside timeout") }, 2000)

for (let i = 0; i < 1000; i++) {
    console.log("inside for loop")
}
console.log(`timeout ID: ${id}`)
console.log("clearing timeout")
clearTimeout(id)
console.log("script end")