// Get the menu button and mobile menu elements
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('MobileMenu');

// Initially hide the mobile menu
mobileMenu.style.display = 'none';

// Add click event listener to menu button
menuBtn.addEventListener('change', function() {
  if (this.checked) {
    // Show mobile menu when checkbox is checked
    mobileMenu.style.display = 'flex';
    mobileMenu.style.flexDirection = 'column';
  } else {
    // Hide mobile menu when checkbox is unchecked  
    mobileMenu.style.display = 'none';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInside = mobileMenu.contains(event.target) || menuBtn.contains(event.target);
  
  if (!isClickInside && mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
    menuBtn.checked = false;
  }
});
