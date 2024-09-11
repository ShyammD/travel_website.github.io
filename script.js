document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const bookingForm = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const footerLinks = document.querySelectorAll('.footer-links a');

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
            // Display confirmation message
            if (confirmationMessage) {
                confirmationMessage.classList.remove('hidden');
            }
            // Reset the form if needed
            bookingForm.reset();
        });
    }

    // Toggle Dark/Light Mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
