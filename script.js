// script.js

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const bookingForm = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Change nav background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Scroll animations
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
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Display confirmation message
        confirmationMessage.classList.remove('hidden');
        // Optionally, you can reset the form here if needed
        bookingForm.reset();
    });

    // Toggle Dark/Light Mode
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Handle footer link clicks
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the clicked section
            const sectionId = link.getAttribute('data-section');
            const sectionToShow = document.getElementById(sectionId);
            if (sectionToShow) {
                sectionToShow.classList.remove('hidden');
                sectionToShow.classList.add('show');
            }
        });
    });
});