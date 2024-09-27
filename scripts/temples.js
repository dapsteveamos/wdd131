


// Dynamic year and last modified
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // Toggle the 'open' class on nav
    hamburger.textContent = hamburger.textContent === 'X' ? '☰' : 'X'; // Toggle button text
});
