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