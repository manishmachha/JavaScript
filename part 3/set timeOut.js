console.log("script start")

setTimeout(() => { console.log("inside timeout") }, 2000)

for (let i = 0; i < 1000; i++) {
    console.log("inside for loop")
}

console.log("script end")