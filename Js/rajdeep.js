// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links_visible');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - document.querySelector('.site-header').offsetHeight,
        behavior: 'smooth'
      });
    }
    // close nav for mobile
    if (navLinks.classList.contains('nav-links_visible')) {
      navLinks.classList.remove('nav-links_visible');
    }
  });
});
