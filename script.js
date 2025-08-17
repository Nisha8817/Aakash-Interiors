        AOS.init({
            duration: 1000,
            easing: 'ease-out-quad',
            once: true // Only animate once
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - (document.querySelector('nav').offsetHeight); // Adjust for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                // Close mobile menu if open
                const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
                if (mobileMenuOverlay.classList.contains('open')) {
                    mobileMenuOverlay.classList.remove('open');
                    document.body.style.overflow = ''; // Re-enable scrolling
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Disable scrolling
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('open');
            document.body.style.overflow = ''; // Re-enable scrolling
        });

        // Close mobile menu when a link inside it is clicked
        mobileMenuOverlay.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('open');
                document.body.style.overflow = ''; // Re-enable scrolling
            });
        });
    