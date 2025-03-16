document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('MobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.querySelectorAll('#mobileMenu a');
    const MobileMenu = document.getElementById('MobileMenu');
    
    
    // Add event listener to menu button
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    // Add click event listener to menu button to toggle mobile menu visibility
    menuBtn.addEventListener('click', () => {
        if (MobileMenu.style.display === 'none' || MobileMenu.style.display === '') {
            MobileMenu.style.display = 'flex';
            MobileMenu.style.flexDirection = 'column';
        } else {
            MobileMenu.style.display = 'none';
        }
    });
    
    // Toggle function with slide-in effect
    function toggleMenu() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('translate-x-full'); // Slide in
            mobileMenu.classList.add('translate-x-0');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'; // X icon
        } else {
            mobileMenu.classList.add('translate-x-full'); // Slide out
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Match the CSS transition duration
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>'; // Hamburger icon
        }
    }

    // Single click event listener for menu button
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Handle link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(); // Close menu on link click
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.classList.contains('hidden') && 
            !menuBtn.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            toggleMenu();
        }
    });
});
// Get the checkbox input and mobile menu elements
const menuCheckbox = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('MobileMenu');

// Add change event listener to checkbox
menuCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // Show mobile menu when checkbox is checked
        mobileMenu.style.display = 'flex';
        mobileMenu.style.flexDirection = 'column';
        mobileMenu.style.animation = 'slideIn 0.3s ease-in-out forwards';
    } else {
        // Hide mobile menu with animation when unchecked
        mobileMenu.style.animation = 'slideOut 0.3s ease-in-out forwards';
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 300);
    }
});

// Add click event listeners to mobile menu links
const mobileMenuLinks = document.querySelectorAll('#MobileMenu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Uncheck checkbox and hide menu when link is clicked
        menuCheckbox.checked = false;
        mobileMenu.style.animation = 'slideOut 0.3s ease-in-out forwards';
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 300);
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (menuCheckbox.checked && 
        !menuCheckbox.contains(e.target) && 
        !mobileMenu.contains(e.target)) {
        menuCheckbox.checked = false;
        mobileMenu.style.animation = 'slideOut 0.3s ease-in-out forwards';
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 300);
    }
});

// Add necessary animations to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
