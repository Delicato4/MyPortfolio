document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuBtn || !mobileMenu) {
        console.error('Error: menuBtn or mobileMenu not found', { menuBtn, mobileMenu });
        return;
    }

    console.log('Script loaded, elements found:', { menuBtn, mobileMenu });

    menuBtn.addEventListener('click', (e) => {
        console.log('Click event triggered', { event: e.type, target: e.target });
        const wasActive = menuBtn.classList.toggle('active');
        const menuActive = mobileMenu.classList.toggle('active');
        console.log('Toggled classes:', { menuBtnClasses: menuBtn.classList, mobileMenuClasses: mobileMenu.classList, wasActive, menuActive });
    });

    // Optional: Close menu on link click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Link clicked, closing menu');
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
});