       // Mobile menu toggle
        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            const menuBtn = document.getElementById('mobileMenuBtn');
            navMenu.classList.toggle('mobile-open');
            menuBtn.classList.toggle('active');
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-right a').forEach(link => {
            link.addEventListener('click', () => {
                const navMenu = document.getElementById('navMenu');
                const menuBtn = document.getElementById('mobileMenuBtn');
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('mobile-open');
                    menuBtn.classList.remove('active');
                }
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 14, 26, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 14, 26, 0.95)';
            }
        });