document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menuIcon = document.querySelector('label[for="menuBtn"] img');
    const mobileMenu = document.getElementById('MobileMenu');

    // Toggle menu when checkbox changes
    menuBtn.addEventListener('change', () => {
        if (menuBtn.checked) {
            // Show mobile menu
            mobileMenu.style.display = 'flex';
            mobileMenu.style.flexDirection = 'column';
            mobileMenu.style.animation = 'slideIn 0.3s ease-in-out forwards';
            // Optionally rotate menu icon
            menuIcon.style.transform = 'rotate(90deg)';
        } else {
            // Hide mobile menu with animation
            mobileMenu.style.animation = 'slideOut 0.3s ease-in-out forwards';
            menuIcon.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
        }
    });

    // Close menu when clicking menu items
    const menuLinks = document.querySelectorAll('#MobileMenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.checked = false;
            mobileMenu.style.animation = 'slideOut 0.3s ease-in-out forwards';
            menuIcon.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);

            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menuBtn.checked && 
            !menuBtn.parentElement.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            menuBtn.checked = false;
            mobileMenu.style.animation = 'slideOut 0.3s ease-in-out forwards';
            menuIcon.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
        }
    });

    // Add animations to stylesheet
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
});
