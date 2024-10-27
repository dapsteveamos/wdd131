// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // Toggle hamburger text based on menu state
    hamburger.textContent = navMenu.classList.contains('open') ? 'X' : '☰';
});

// Close the menu when a navigation link is clicked
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.textContent = '☰'; // Reset to hamburger icon
    });
});

// JavaScript to change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Change 50 to the scroll distance where the change should happen
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// steamo.js

// FOR FORM FOR PRODUCT REVIEW is under preview.js to stay on it's own

