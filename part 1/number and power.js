function Power(num, power) {

    let arr = new Array
    for (let i = 0; i < power; i++) {
        arr[i] = num
    }
    myArray = arr
    let ans = 1

    for (let i = 0; i < myArray.length; i++) {
        temp = ans * myArray[i]
        ans = temp
    }
    console.log(`${num}^${power} = ${ans}`)

}
Power(2, 3)