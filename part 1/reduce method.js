const myCart = [{ Name: "phone", ID: 1, price: 1000 }, { Name: "tv", ID: 2, price: 3000 }, { Name: "laptop", ID: 3, price: 5000 }];

let totalFunc = function(totalPrice, Productprice) {
    return totalPrice + Productprice.price;
}

let total = myCart.reduce(totalFunc, 0);
console.log(total);