var cart = [{ "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }];

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
    console.log("Your shopping cart is empty.")
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
    string = string + itemPrice.join() + "."
    console.log(string)
  }
}
viewCart()
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
