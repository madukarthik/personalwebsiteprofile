        // Smooth scrolling for nav links
        document.querySelectorAll('.navbar a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
                // Close mobile nav after clicking a link
                if (window.innerWidth <= 600) {
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });

        // Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            const navbar = document.querySelector('.navbar');
            const themeToggle = document.querySelector('.theme-toggle');
            const icon = themeToggle.querySelector('i');

            icon.classList.add('rotate');
            body.classList.toggle('light-theme');
            navbar.classList.toggle('light-theme');

            if (body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }

            setTimeout(() => icon.classList.remove('rotate'), 800);
        }

        // Hamburger menu toggle
        function toggleNav() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Navbar scroll hide/show
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
            lastScrollTop = scrollTop;
        });

        // Intersection Observer for section animations
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });