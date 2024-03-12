
const tires = [
  { name: "Fortera HL", price: 150.75, image: "Fortera_HL_94.png" },
  { name: "Assurance (All Season)", price: 250, image: "Assurance_All_Season_5492.png" },
  { name: "Eagle Touring", price: 188.99, image: "Eagle_Touring_13507.avif" },
  { name: "Electricdrive", price: 199.99, image: "Electricdrive_24478.png" },
  { name: "WinterMaxx2", price: 299.99, image: "WinterMaxx2_13922.png" },
  { name: "Electricdrive GT", price: 200.08, image: "Electricdrive_GT_24467.png" }

];


function displayTires() {
  const tireContainer = document.getElementById("tire-container");
  tireContainer.innerHTML = '';
  tires.forEach((tire, index) => {
    const div = document.createElement("div");
    div.classList.add("tire-item");
    div.innerHTML = `
            <img src="${tire.image}" alt="${tire.name}">
            <p>${tire.name} - $${tire.price}</p>
            <select id="quantity-${index}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onclick="addToCart('${tire.name}', ${tire.price}, ${index})">Add to Cart</button>
        `;
    tireContainer.appendChild(div);
  });
}



let cart = [];

function addToCart(itemName, price, index) {
  const quantity = parseInt(document.getElementById(`quantity-${index}`).value);
  cart.push({ itemName, price, quantity });
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.itemName} x ${item.quantity}: $${item.price * item.quantity}`;
    cartItems.appendChild(li);
  });
}

function updateTotal() {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const nycSalesTaxRate = 0.08875; 
  const nycOtherTaxRate = 0.05; 

  const salesTax = subtotal * nycSalesTaxRate;
  const otherTax = subtotal * nycOtherTaxRate;

  const totalAmount = subtotal + salesTax + otherTax;

  const totalWithTaxes = subtotal + salesTax + otherTax;


  document.getElementById('total').textContent = `Total (including taxes): $${totalWithTaxes.toFixed(2)}`;
}


function showCheckoutForm() {
  const checkoutForm = document.getElementById('checkout-form');
  checkoutForm.style.display = 'block';
  updateTotal();
}


window.onload = function() {
  displayTires();
};
