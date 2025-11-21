
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

        // Carousel functionality
        let currentSlide = 0;
        const carousel = document.getElementById('reportCarousel');
        const dotsContainer = document.getElementById('carouselDots');
        const slides = document.querySelectorAll('.report-image');
        const totalSlides = slides.length;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        function goToSlide(n) {
            currentSlide = n;
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function updateDots() {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
                startTimer()
            });
        }

        let timer = null;
        const intervalTime = 10000;

        function startTimer() {

            if (timer) clearInterval(timer);

            timer = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                goToSlide(currentSlide);
            }, intervalTime);
        }
        startTimer()

        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startTimer()
        });

        function handleSwipe() {
            const swipeThreshold = 100; 
            if (touchStartX - touchEndX > swipeThreshold) {
                // Swipe left
                currentSlide = (currentSlide + 1) % totalSlides;
                goToSlide(currentSlide);
            }
            if (touchEndX - touchStartX > swipeThreshold) {
                // Swipe right
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                goToSlide(currentSlide);
            }
        }

        document.querySelector(".play-button").addEventListener("click", function () {

            this.classList.add("hidden");

            const videoId = "pEzMrCDk7Bo&";

            const iframe = `
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                    allow="autoplay; encrypted-media"
                    allowfullscreen>
                </iframe>
            `;

            const frameContainer = document.querySelector(".video-frame");
            frameContainer.innerHTML = iframe;
            frameContainer.classList.remove("hidden");
        });
