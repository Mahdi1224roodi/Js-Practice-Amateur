// online store


// Products
var storeproduct = [
    { id: 1, name: "milk", Price: 28 },
    { id: 2, name: "cake", Price: 45 },
    { id: 3, name: "nutella", Price: 15 },
]

// User's shopping cart
var userbox = [
    { id: 1, name: "milk", Price: 28 }
]

// new order
var order = prompt("Enter Your order :");

//گرفتن کل آبجتی که کاربر اسمشو وارد کرده

var requestproduct;

//is Available
var isfind = storeproduct.some(function (orders) {
    if (orders.name == order) {
        requestproduct = orders;
        return true;
    }
})

// شرط
if (isfind == true) {
    var newproduct = {
        id: 2,
        name: requestproduct.name,
        Price: requestproduct.Price
    }
    userbox.push(newproduct)
    // price resault
    var sum = 0;

    userbox.forEach(function (Products) {
        sum = sum + Products.Price
    })
    console.log(userbox)
    alert(sum)
} else {
    console.log("not found your order please wait..")
}
