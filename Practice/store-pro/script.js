// online store


// Products
var storeproduct = [
    { id: 1, name: "milk", Price: 28 },
    { id: 2, name: "cake", Price: 45 },
    { id: 3, name: "nutella", Price: 15 },
]

// User's shopping cart
var userbox = [
    { id: 1, name: "milk", Price: 28 },
    { id: 2, name: "cake", Price: 45 },
    { id: 3, name: "nutella", Price: 15 }
]

// Choise Add Or Remove
var userrequest = prompt("1.Add \n2.Remove")
if (userrequest == "1") {
    var userorder = prompt("Enter The Order : ")

    // Check the request is in Shop ?
    var finalorder;
    var isinshop = storeproduct.some(function (order) {
        if (userorder == order.name) {
            finalorder = order;
            return true;
        }
    })

    // if  existence
    if (isinshop == true) {
        var newproduct = {
            id: 4,
            name: finalorder.name,
            Price: finalorder.Price
        }
        userbox.push(newproduct);
        console.log("User Box : ", userbox)
        // if not existence
    } else {
        alert("Not Found Your Order")
    }

} else if (userrequest == "2") {

    // show the user basket
    userbox.forEach(function (ordersuser) {
        alert("🛒" + ordersuser.name + "," + ordersuser.Price)
        return true
    })
    var userchoice = prompt("wich one delete a orders?", "name...");

    // findIndex 
    var deleteedindex = userbox.findIndex(function (par) {
        return par.name == userchoice
    });

    // ckeck user choice curect order
    if (deleteedindex == -1) {
        alert("This order not in your basket")
    }else{
    userbox.splice(deleteedindex, 1)
    console.log(userbox)
    }
} else {
    alert("Not Found")
}