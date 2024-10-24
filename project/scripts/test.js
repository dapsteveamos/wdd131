// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.textContent = hamburger.textContent === 'X' ? '☰' : 'X';
});

// Close the menu when a navigation link is clicked
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.textContent = '☰';
    });
});
