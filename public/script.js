document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuBtn || !mobileMenu) {
        console.error('Elements not found:', { menuBtn, mobileMenu });
        return;
    }

    menuBtn.addEventListener('click', () => {
        console.log('Click event triggered');
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});