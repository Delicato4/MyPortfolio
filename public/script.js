document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuBtn) {
        console.error('menuBtn not found in DOM');
        return;
    }
    if (!mobileMenu) {
        console.error('mobileMenu not found in DOM');
        return;
    }

    console.log('Script loaded, menuBtn and mobileMenu found');

    // Toggle menu
    ['click', 'touchstart'].forEach(eventType => {
        menuBtn.addEventListener(eventType, (e) => {
            console.log(`${eventType} event triggered on menuBtn`);
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    });

    // Close menu on link click
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Mobile menu link clicked');
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