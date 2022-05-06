const myCart = [
    { Name: "phone", ID: 1, price: 1000 },
    { Name: "tv", ID: 2, price: 3000 },
    { Name: "laptop", ID: 3, price: 4000 },
];

let check = function(product) {
    return product.price < 5000;
}
let value = myCart.every(check);
console.log(value);