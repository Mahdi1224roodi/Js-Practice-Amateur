// store
var userbasket = [
    { id: 1, name: "milk", price: 35 },
    { id: 2, name: "mango", price: 15 },
    { id: 3, name: "ice-creem", price: 5 },
    { id: 4, name: "coffee", price: 20 },
    { id: 5, name: "book", price: 120 }
];
// order price less than 100 
var basketfilter = userbasket.filter(function (params) {
    return params.price <= 100;
})
var postorder = basketfilter.length * 1;
// user all price basket
var allprice = 0;
var basketprice = userbasket.forEach(function (prices) {
    allprice += prices.price;
});
console.log(postorder+ allprice)