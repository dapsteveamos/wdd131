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


// i am adding this scrooled js because i added a class to enable the header to become faint when i scrow
// JavaScript to change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Change 50 to the scroll distance where the change should happen
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
