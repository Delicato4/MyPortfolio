document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuBtn || !mobileMenu) {
        console.error('Error: menuBtn or mobileMenu not found', { menuBtn, mobileMenu });
        return;
    }

    console.log('Script loaded, elements found:', { menuBtn, mobileMenu });

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