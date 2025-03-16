document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('MobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.querySelectorAll('#MobileMenu a');
    let isMenuOpen = false;

    // Toggle function with slide-in effect
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        } else {
            mobileMenu.classList.add('translate-x-full');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>';
        }
    }

    // Add touch and click events for the menu button
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    menuBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Handle link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Close menu when clicking/touching outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && 
            !menuBtn.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            toggleMenu();
        }
    });

    document.addEventListener('touchend', (e) => {
        if (isMenuOpen && 
            !menuBtn.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            toggleMenu();
        }
    });
});