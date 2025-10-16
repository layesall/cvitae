// Navigation smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 20; // Petit offset pour le spacing
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animation du hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Animate skills on scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            
            // Ajouter une classe pour déclencher d'autres animations
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Optimisation du chargement des badges GitHub
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading des images de badges
    const badgeImages = document.querySelectorAll('.github-badges img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Ajouter un petit délai pour l'effet de reveal
                setTimeout(() => {
                    img.style.opacity = '0';
                    img.style.transform = 'translateY(10px)';
                    img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                        img.style.transform = 'translateY(0)';
                    };
                    
                    img.src = img.dataset.src || img.src;
                }, 100);
                
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    badgeImages.forEach(img => imageObserver.observe(img));
    
    // Effet de survol sur les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            
            // Effet de lueur sur l'image de profil pour les projets featured
            if (this.classList.contains('featured')) {
                const profileImg = this.querySelector('.profile-image img');
                if (profileImg) {
                    profileImg.style.transform = 'scale(1.05)';
                    profileImg.style.filter = 'brightness(1.1)';
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            if (this.classList.contains('featured')) {
                const profileImg = this.querySelector('.profile-image img');
                if (profileImg) {
                    profileImg.style.transform = 'scale(1)';
                    profileImg.style.filter = 'brightness(1)';
                }
            }
        });
    });
    
    // Animation au scroll pour les éléments
    const scrollElements = document.querySelectorAll('.project-card, .skill-category, .contact-method');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        elementObserver.observe(el);
    });
    
    // Effet de parallax subtil sur le hero
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');
    
    if (hero && heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Bouton retour en haut
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Amélioration du formulaire de contact (si tu en ajoutes un plus tard)
    // Validation en temps réel, feedback visuel, etc.
    
    console.log('🚀 Site Layesall chargé avec succès!');
    console.log('💡 Astuce: Navigue avec les liens du menu pour une expérience fluide');
});

// Gestion du resize pour mobile
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculer les positions si nécessaire
        if (window.innerWidth > 768) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    }, 250);
});