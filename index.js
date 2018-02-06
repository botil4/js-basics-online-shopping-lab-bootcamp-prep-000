var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100)
 var obj = {[item]: price}
 console.log(`${item} has been added to your cart.`)
 cart.push(obj)
 return cart
}

function viewCart() {
  if(cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  } else {
    var items = []
    var price = []
    var itemPrice = []
    var string = "In your cart, you have "
    for(let i = 0; i < cart.length; i++) {
      items.push(Object.keys(cart[i]))
      price.push(Object.values(cart[i]))
      itemPrice.push(`${items[i]} at $${price[i]}`)
    }
  }
    if(cart.length === 1) {
      string = string + itemPrice + "."
      console.log(string)
    } else if (cart.length === 2) {
      string = string + itemPrice.join(" and ") + "."
      console.log(string)
    } else {
    var itemPriceLast = itemPrice.slice(-1)
    itemPrice.pop()
    string = string + itemPrice.join(", ") + ", and " + itemPriceLast +"."
    console.log(string)
  }
}

function total() {
  var total = 0
  for(let i = 0; i < cart.length; i++) {
      total = total + Object.values(cart[i])
    }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
