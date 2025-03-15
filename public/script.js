document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });

    // Close menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});
