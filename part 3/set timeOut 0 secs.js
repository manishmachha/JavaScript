console.log("script start")

setTimeout(() => { console.log("inside timeout") }, 0)

for (let i = 0; i < 1000; i++) {
    console.log("inside for loop")
}

console.log("script end")