
const services = [
  { name: "Wheel Alignment", price: 50, image: "alling.jpg" },
  { name: "Tire Rotation", price: 30, image: "Tire-Rotation.png" },
  { name: "Flat Fix", price: 20, image: "flat-fix-icon.jpg" }
];


function displayServices() {
  const serviceContainer = document.getElementById("service-container");
  serviceContainer.innerHTML = '';
  services.forEach((service, index) => {
    const div = document.createElement("div");
    div.classList.add("service");
    div.innerHTML = `
            <img src="${service.image}" alt="${service.name}">
            <p>${service.name} - $${service.price}</p>
            <button class="add-to-cart" onclick="addToCart('${service.name}', ${service.price})">Add to Cart</button>
        `;
    serviceContainer.appendChild(div);
  });
}


let cart = [];

function addToCart(serviceName, price) {
  cart.push({ serviceName, price });
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.serviceName}: $${item.price}`;
    cartItems.appendChild(li);
  });
  updateTotal();
}


function updateTotal() {
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const nycSalesTaxRate = 0.08875; 
  const nycOtherTaxRate = 0.05; 

  const salesTax = subtotal * nycSalesTaxRate;
  const otherTax = subtotal * nycOtherTaxRate;

  const totalWithTaxes = subtotal + salesTax + otherTax;


  document.getElementById('total').textContent = `Total (including taxes): $${totalWithTaxes.toFixed(2)}`;
}


function showCheckoutForm() {
  const checkoutForm = document.getElementById('checkout-details');
  checkoutForm.style.display = 'block';
}


function checkout() {

  alert('Checkout completed successfully!');
 
  cart = [];
  displayCart();
  document.getElementById('checkout-details').style.display = 'none';
}


window.onload = function() {
  displayServices();
};
