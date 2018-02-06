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
  var cart = getCart()
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    string = "In your cart, you have "
    for( const prop in cart) {
      string = string + `${prop} at $${cart[prop]}.`
    }
    console.log(string)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
