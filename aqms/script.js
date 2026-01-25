// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.1, // Trigger earlier (10% visibility)
    mobile: true
});

// Hero
sr.reveal('.hero-content h1', { delay: 100 });
sr.reveal('.hero-content h2', { delay: 200 });
sr.reveal('.tagline', { delay: 300 });
sr.reveal('.key-features-list', { delay: 400 });
sr.reveal('.composition-wrapper', { origin: 'left', delay: 200 });

// Angled Headers
sr.reveal('.angled-header', { origin: 'left', distance: '50px', duration: 1200 });

// Hardware
sr.reveal('.spec-group', { interval: 100 });
sr.reveal('.hardware-visual', { origin: 'bottom', delay: 300 });

// Platform
sr.reveal('.feature-card', { interval: 100 }); // Updated selector from platform-item

// Footer
sr.reveal('.footer-cta', { delay: 200 });

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Basic toggle for now as CSS has display:none for nav-links on mobile
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px'; // Adjust based on navbar height
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        }
    });
}