var x = 0;
document.getElementById("c").innerText = x;

function add(val) {
  var cartItems = document.getElementById("cartItems");
  var cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML =
    val +
    "<input type='button' value='X' onclick='removeItem(this.parentNode)'>";
  cartItems.appendChild(cartItem);

  x = x + 1;
  document.getElementById("c").innerText = x;

  showCart();
}

function removeItem(item) {
  item.parentNode.removeChild(item);
  x = x - 1;
  document.getElementById("c").innerText = x;
}

function showCart() {
  var cartContainer = document.getElementById("cartContainer");
  cartContainer.style.display = "block";
}

function hideCart() {
  var cartContainer = document.getElementById("cartContainer");
  cartContainer.style.display = "none";
}
