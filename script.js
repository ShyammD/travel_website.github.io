document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const bookingForm = document.getElementById('booking-form');
    const contactForm = document.getElementById('contact-form');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bookingConfirmationMessage = document.getElementById('booking-confirmation-message');
    const contactConfirmationMessage = document.getElementById('contact-confirmation-message');

    // Change nav background on scroll
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Scroll animations using Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Display booking confirmation message
            if (bookingConfirmationMessage) {
                bookingConfirmationMessage.classList.remove('hidden');
                bookingConfirmationMessage.classList.add('show');
            }
            // Reset the form if needed
            bookingForm.reset();
        });
    }

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Display contact confirmation message
            if (contactConfirmationMessage) {
                contactConfirmationMessage.classList.remove('hidden');
                contactConfirmationMessage.classList.add('show');
            }
            // Reset the form if needed
            contactForm.reset();
        });
    }

    // Function to update the theme icon
    function updateThemeIcon() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeToggleBtn.textContent = currentTheme === 'dark' ? '🌞' : '🌜';
    }

    // Set initial theme and icon
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();

    // Toggle Dark/Light Mode
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon();
        });
    }
});
