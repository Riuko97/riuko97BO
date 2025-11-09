  // --- Lógica del Menú Móvil ---
        const mobileMenu = document.getElementById('mobile-menu');
        const menuToggle = document.getElementById('menu-toggle');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- Lógica del Banner de Cookies ---
        document.addEventListener('DOMContentLoaded', () => {
            const cookieBanner = document.getElementById('cookie-banner');
            const acceptCookieBtn = document.getElementById('accept-cookie');

            if (localStorage.getItem('cookie_accepted') === 'true') {
                cookieBanner.style.display = 'none';
            } else {
                 cookieBanner.style.display = 'block';
            }

            acceptCookieBtn.addEventListener('click', () => {
                cookieBanner.style.display = 'none';
                localStorage.setItem('cookie_accepted', 'true');
            });
        });

