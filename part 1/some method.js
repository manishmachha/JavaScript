const myCart = [
    { Name: "phone", ID: 1, price: 41000 },
    { Name: "tv", ID: 2, price: 8000 },
    { Name: "laptop", ID: 3, price: 6000 },
];
let check = function(product) {
    return product.price < 5000;
}
let ans = myCart.some(check);
console.log(ans);