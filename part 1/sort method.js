const products = [{ Name: "phone", ID: 1, price: 9000 }, { Name: "tv", ID: 2, price: 5000 }, { Name: "laptop", ID: 3, price: 3000 }];

let lowToHigh = function(a, b) {
    return a.price - b.price;
}
let highToLow = function(a, b) {
    return b.price - a.price;
}
console.log(products.sort(lowToHigh));
console.log(products.sort(highToLow));