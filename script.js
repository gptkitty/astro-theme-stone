/* ===== EURO FINISHES WEBSITE ANIMATIONS ===== */

// ===== INTERSECTION OBSERVER CONFIGURATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// ===== BASIC FADE-IN OBSERVER =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// ===== LOGO ANIMATION OBSERVER =====
const logoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            logoObserver.unobserve(entry.target); // Only animate once
        }
    });
}, { threshold: 0.5 });

// ===== NAVIGATION AUTO-HIDE FUNCTIONALITY =====
let lastScrollY = 0;
let ticking = false;

function updateNavbar() {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
    } else {
        // At top of page
        header.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}

// ===== KITCHEN IMAGE SCROLL-TIED ANIMATION =====
function updateKitchenImageScroll() {
    const kitchenImage = document.querySelector('.kitchen-image');
    if (!kitchenImage) return;
    
    const imageRect = kitchenImage.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if image is in viewport
    if (imageRect.top < windowHeight && imageRect.bottom > 0) {
        // Calculate progress (0 to 1) as element comes into view
        const progress = Math.min(Math.max((windowHeight - imageRect.top) / windowHeight, 0), 1);
        
        // Apply transform based on scroll progress
        if (progress > 0.1) { // Start animation when 10% visible
            const translateX = 100 * (1 - Math.min(progress / 0.8, 1)); // Ease in over 80% of scroll
            const opacity = Math.min(progress / 0.3, 1); // Fade in over first 30% of scroll
            
            kitchenImage.style.transform = `translateX(${translateX}px)`;
            kitchenImage.style.opacity = opacity;
            
            if (progress >= 0.8) {
                kitchenImage.classList.add('animate-in');
            }
        } else {
            kitchenImage.style.transform = 'translateX(100px)';
            kitchenImage.style.opacity = '0';
            kitchenImage.classList.remove('animate-in');
        }
    }
}

// ===== ENHANCED INTERSECTION OBSERVER FOR STAGGERED ANIMATIONS =====
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('card')) {
                // Stagger card animations
                const cards = entry.target.parentElement.querySelectorAll('.card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 100);
                });
            } else if (entry.target.classList.contains('contact-card')) {
                // Stagger contact card animations
                const contactCards = entry.target.parentElement.querySelectorAll('.contact-card');
                contactCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 150);
                });
            } else if (!entry.target.classList.contains('kitchen-image')) {
                // Handle all other elements except kitchen image
                entry.target.classList.add('animate-in');
            }
            
            if (!entry.target.classList.contains('kitchen-image')) {
                enhancedObserver.unobserve(entry.target);
            }
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// ===== INITIALIZATION WHEN PAGE LOADS =====
document.addEventListener('DOMContentLoaded', () => {
    
    // ===== LOGO CLICK TO TOP FUNCTIONALITY =====
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }

    // ===== FADE OUT VIDEO LOGO AFTER 5 SECONDS =====
    const videoLogo = document.querySelector('.video-logo-overlay');
    if (videoLogo) {
        setTimeout(() => {
            videoLogo.classList.add('fade-out');
        }, 5000);
    }

    // ===== OBSERVE ELEMENTS FOR ENHANCED ANIMATIONS =====
    const animatedElements = document.querySelectorAll('.main-title, .subtitle, .section-title, .text-content, .text-content-left, .main-description');
    animatedElements.forEach(el => enhancedObserver.observe(el));
    
    // ===== INITIALIZE KITCHEN IMAGE SCROLL ANIMATION =====
    updateKitchenImageScroll();

    // ===== OBSERVE FIRST CARD IN EACH GROUP FOR STAGGERED ANIMATION =====
    const cardGroups = document.querySelectorAll('.grid .card:first-child');
    cardGroups.forEach(card => enhancedObserver.observe(card));

    // ===== OBSERVE FIRST CONTACT CARD FOR STAGGERED ANIMATION =====
    const firstContactCard = document.querySelector('.contact-card:first-child');
    if (firstContactCard) {
        enhancedObserver.observe(firstContactCard);
    }

    // ===== OBSERVE LOGO FOR ANIMATION =====
    const logoElement = document.querySelector('.animated-logo');
    if (logoElement) {
        logoObserver.observe(logoElement);
    }
});

// ===== EVENT LISTENERS =====
window.addEventListener('scroll', requestTick);
window.addEventListener('scroll', updateKitchenImageScroll);