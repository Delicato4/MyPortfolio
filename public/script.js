document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('#mobileMenu a');

    // Toggle menu function
    function toggleMenu() {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Fallback for touch devices   
    menuBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        console.log('Touchstart event triggered', { event: e.type });
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }, { passive: false });

    menuBtn.addEventListener('click', (e) => {
        console.log('Click event triggered', { event: e.type });
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Fallback for touch devices
    menuBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior
        console.log('Touchstart event triggered', { event: e.type });
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }, { passive: false });
});