const prices = [10, 20, 15, 5, 12];
let cart = [];
let total = 0;

function addToCart() {
  const select = document.getElementById("products");
  const selectedProduct = select.options[select.selectedIndex];
  const productId = parseInt(selectedProduct.value);
  if (productId >= 0 && productId < prices.length) {
    cart.push({ name: selectedProduct.text, price: prices[productId] });
    updateCart();
  }
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}€`;
    cartList.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").textContent = total;
}

function createReceipt() {
  const payment = parseFloat(document.getElementById("payment").value);
  const receipt = document.getElementById("receipt");
  receipt.innerHTML = "";
  if (payment >= total) {
    const change = payment - total;
    const h2 = document.createElement("h2");
    h2.textContent = "Receipt";
    receipt.appendChild(h2);
    cart.forEach(item => {
      const p = document.createElement("p");
      p.textContent = `${item.name} - ${item.price}€`;
      receipt.appendChild(p);
    });
    const pTotal = document.createElement("p");
    pTotal.textContent = `Total: ${total}€`;
    receipt.appendChild(pTotal);
    if (change > 0) {
      const pChange = document.createElement("p");
      pChange.textContent = `Change: ${change}€`;
      receipt.appendChild(pChange);
    }
  } else {
    const p = document.createElement("p");
    p.textContent = "Payment is not enough.";
    receipt.appendChild(p);
  }
}