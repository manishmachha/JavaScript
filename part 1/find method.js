const myCart = [
    { Name: "phone", ID: 1, price: 1000 },
    { Name: "tv", ID: 2, price: 1000 },
    { Name: "laptop", ID: 3, price: 5000 },
];

let func = function(product) {
    return product.price === 1000;
};
const myProduct = myCart.find(func);
console.log(myProduct);