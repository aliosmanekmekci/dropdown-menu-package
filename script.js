const button = document.querySelector('.dropdown-menu-button');
const menu = document.querySelector('.dropdown-menu-ul');

button.addEventListener('click', function (e) {
  e.stopPropagation();
  menu.classList.toggle('visible');
});

// Close when clicking outside
window.addEventListener('click', function () {
  menu.classList.remove('visible');
});

// Click on an item just closes menu
menu.addEventListener('click', function (e) {
  const item = e.target.closest('.dropdown-item');
  if (!item) return;
  menu.classList.remove('visible');
});
