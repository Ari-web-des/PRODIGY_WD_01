// Get the navbar element
const navbar = document.querySelector('.navbar');

// Function to handle scroll events
window.onscroll = function() {
    if (window.scrollY > 50) { // If the page is scrolled down 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Get all the menu links
const menuLinks = document.querySelectorAll('.navbar ul li a');

// Add hover and click effects
menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active'); // Add active class on hover
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('active'); // Remove active class when hover ends
    });
});
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButtons = document.querySelectorAll('.scroll-to-top');

    scrollToTopButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
