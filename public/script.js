// Get the menu button, label, and mobile menu elements
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('MobileMenu');
const labelMenuBtn = document.getElementById('label-menuBtn');

// Initially hide the mobile menu
mobileMenu.style.display = 'none';

// Checkbox change event
menuBtn.addEventListener('change', function () {
  if (this.checked) {
    mobileMenu.style.display = 'flex';
    mobileMenu.style.flexDirection = 'column';
  } else {
    mobileMenu.style.display = 'none';
  }
});

// Fallback click event for label on mobile
labelMenuBtn.addEventListener('click', function (e) {
  menuBtn.checked = !menuBtn.checked; // Toggle checkbox state
  mobileMenu.style.display = menuBtn.checked ? 'flex' : 'none';
  if (menuBtn.checked) {
    mobileMenu.style.flexDirection = 'column';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  const isClickInside =
    mobileMenu.contains(event.target) || labelMenuBtn.contains(event.target);
  if (!isClickInside && mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
    menuBtn.checked = false;
  }
});