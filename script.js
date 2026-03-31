let cartCount = 0;

// ADD TO CART
function addToCart(food){

cartCount++;

document.getElementById("cart-count").innerText = cartCount;

alert(food + " has been added to your cart!");

}

// PLACE ORDER
function placeOrder(){

if(cartCount === 0){

alert("Your cart is empty!");

}else{

alert("Order successful! Your food will be delivered soon.");

cartCount = 0;

document.getElementById("cart-count").innerText = cartCount;

}

}
