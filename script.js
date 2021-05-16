const header = document.getElementById('header');
const open = document.getElementById('open');
const close = document.getElementById('close');
const menuToggle = document.getElementById('menu-toggle');


menuToggle.addEventListener('click', () => {
  header.classList.toggle('active');
  
  
});