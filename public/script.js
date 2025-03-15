document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle menu
    ['click', 'touchstart'].forEach(eventType => {
        menuBtn.addEventListener(eventType, (e) => {
            e.preventDefault();
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    });

    // Close menu on link click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});