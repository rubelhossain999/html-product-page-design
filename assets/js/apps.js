// sidebar jS
document.getElementById('wooCart').addEventListener('click', function(){
    const cartItem = document.getElementById('cartItems');

    cartItem.classList.toggle("cart-items");
    cartItem.classList.toggle("cart-items-js");
});
