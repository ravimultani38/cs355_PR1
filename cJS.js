
document.addEventListener('DOMContentLoaded', function() {
  const emailField = document.getElementById('emailField');
  const phoneField = document.getElementById('phoneField');
  emailField.style.display = 'none';
  phoneField.style.display = 'none';
});

function toggleContactMethod() {
  const emailField = document.getElementById('emailField');
  const phoneField = document.getElementById('phoneField');
  const emailRadio = document.getElementById('emailRadio');

  if (emailRadio.checked) {
    emailField.style.display = 'block';
    phoneField.style.display = 'none';
  } else {
    emailField.style.display = 'none';
    phoneField.style.display = 'block';
  }
}

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';


  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.style.display = 'block';
  confirmationMessage.textContent = 'Your message has been sent. We will get back to you soon.';
}
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container1')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
window.addEventListener("scroll", function() {
  const logo = document.querySelector(".logo");
  logo.style.transform = "scale(" + (1 + window.scrollY * 0.001) + ")";
});



const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 1)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}