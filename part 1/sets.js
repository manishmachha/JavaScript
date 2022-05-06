const numbers = new Set([1, 2, 3, 3, 4, 5, 4, 5, 6, "man"])
    // numbers.add(1)
    // numbers.add(2)
    // numbers.add(3)
    // numbers.add(4)
    // numbers.add(4)
    // numbers.add(5)
    // numbers.add(5)
const items = ['item1', 'item2', 'item3']
numbers.add(items)
numbers.add(items)
numbers.add(['ash', 'dash', 'bash'])
numbers.add(['ash', 'dash', 'bash'])
console.log(numbers);
let length = 0;
for (let number of numbers) {
    length++;
}
console.log(length);