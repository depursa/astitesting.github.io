// File: script.js - FULLY OPTIMIZED FOR ALL DEVICES
import { services, stats } from './data.js';

// ================================================
// INITIALIZATION
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing ASTI Website...');
    
    lucide.createIcons();
    initNavbar();
    initStats();
    initServices();
    initSwiper();
    initGSAP();
    initContactForm();
    initFooterSocial();
    initMobileOptimization();
    initPerformance();
    
    console.log('✅ All systems initialized!');
});

// ================================================
// NAVBAR FUNCTIONALITY
// ================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Navbar scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 20) {
            navbar.classList.add('shadow-sm', 'bg-white/95');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.remove('shadow-sm', 'bg-white/95');
            navbar.classList.add('bg-white/80');
        }
        
        lastScrollY = currentScrollY;
    }, { passive: true });

    // Mobile menu toggle
    mobileBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        toggleMenu(!isOpen);
    });

    // Mobile menu link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu on backdrop click
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) toggleMenu(false);
    });

    // Toggle menu function
    function toggleMenu(show) {
        if (show) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => mobileMenu.classList.add('open'), 10);
        } else {
            mobileMenu.classList.remove('open');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            }, 300);
        }
    }
}

// ================================================
// STATS COUNTER INITIALIZATION
// ================================================
function initStats() {
    const desktopContainer = document.getElementById('stats-container');
    const mobileContainer = document.getElementById('mobile-stats-container');

    const createStatHTML = (stat, isMobile = false) => `
        <div class="${isMobile ? 'text-center p-4 bg-slate-800 rounded-lg' : 'text-center'}">
            <h3 class="${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-white mb-1 counter" data-target="${stat.value}">0</h3>
            <p class="${isMobile ? 'text-xs' : 'text-sm'} text-slate-400 uppercase tracking-wide font-medium">${stat.label}</p>
        </div>
    `;

    if(desktopContainer) {
        desktopContainer.innerHTML = stats.map(s => createStatHTML(s)).join('');
    }
    if(mobileContainer) {
        mobileContainer.innerHTML = stats.map(s => createStatHTML(s, true)).join('');
    }
}

// ================================================
// SERVICES GRID INITIALIZATION
// ================================================
function initServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = services.map((service, index) => `
        <div class="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full cursor-pointer service-card" onclick="openServiceModal(${index})">
            <div class="flex justify-between items-start mb-4 sm:mb-6">
                <div class="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 service-icon flex-shrink-0">
                    <i data-lucide="${service.icon}" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors arrow-icon flex-shrink-0">
                    <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                </div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors">${service.title}</h3>
            <p class="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3">${service.desc}</p>
            <div class="text-xs font-semibold text-${service.color}-600 uppercase tracking-wide pt-3 sm:pt-4 border-t border-slate-50">
                ${service.category}
            </div>
        </div>
    `).join('');

    lucide.createIcons();

    // Service card icon animations
    const serviceCards = grid.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        const serviceIcon = card.querySelector('.service-icon');
        const arrowIcon = card.querySelector('.arrow-icon');
        
        card.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 768) { // Only animate on desktop
                gsap.to(serviceIcon, {
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(arrowIcon, {
                    rotation: 45,
                    duration: 0.3,
                    ease: "power2.out"
                });

                gsap.to(serviceIcon, {
                    scale: 1.15,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    delay: 0.1,
                    ease: "power1.inOut"
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(serviceIcon, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(arrowIcon, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // Touch support for mobile
        card.addEventListener('touchstart', () => {
            gsap.to(card, {
                scale: 0.98,
                duration: 0.2
            });
        });

        card.addEventListener('touchend', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.2
            });
        });
    });
}

// ================================================
// SWIPER CAROUSEL INITIALIZATION
// ================================================
function initSwiper() {
    const swiper = new Swiper('.projects-carousel', {
        slidesPerView: 1,
        spaceBetween: 16,
        grabCursor: true,
        centeredSlides: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination-services',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: false,
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12,
            },
            480: {
                slidesPerView: 1.2,
                spaceBetween: 14,
            },
            640: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 18,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        },
        on: {
            slideChange: function() {
                const activeSlide = document.querySelector('.swiper-slide-active');
                if (activeSlide) {
                    gsap.from(activeSlide, {
                        opacity: 0.5,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            }
        }
    });

    // Carousel slide animations
    const slides = document.querySelectorAll('.projects-carousel .swiper-slide');
    slides.forEach((slide) => {
        const slideIcon = slide.querySelector('.w-10.h-10');
        
        slide.addEventListener('mouseenter', () => {
            if (slideIcon && window.innerWidth >= 768) {
                gsap.to(slideIcon, {
                    x: 8,
                    duration: 0.4,
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 0.2,
                    ease: "sine.inOut"
                });
            }

            gsap.to(slide, {
                y: -8,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        slide.addEventListener('mouseleave', () => {
            if (slideIcon) {
                gsap.killTweensOf(slideIcon);
                gsap.to(slideIcon, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }

            gsap.to(slide, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ================================================
// GSAP ANIMATIONS (Scroll Triggers & Effects)
// ================================================
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    // ===== Hero Section Animations =====
    if (!isMobile) {
        gsap.from('h1', { 
            opacity: 0, 
            y: 50, 
            duration: 1, 
            delay: 0.2,
            ease: "power3.out"
        });
    }

    gsap.from('#home p:first-of-type', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        delay: 0.4,
        ease: "power3.out"
    });

    // Hero buttons animation
    gsap.from('.animate-fade-up', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
        stagger: 0.1
    });

    // ===== Counter Animations =====
    ScrollTrigger.batch(".counter", {
        onEnter: batch => {
            batch.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'));
                gsap.to(el, {
                    innerHTML: target,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power1.out"
                });
            });
        },
        once: true,
        amount: 0.5
    });

    // ===== Service Cards Animations =====
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            },
            y: 50,
            opacity: 0,
            duration: isMobile ? 0.5 : 0.8,
            delay: index * 0.08,
            ease: "back.out"
        });
    });

    // ===== Flow Section Animations =====
    const flowSteps = document.querySelectorAll('#flow .group');
    flowSteps.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            },
            y: 40,
            opacity: 0,
            duration: isMobile ? 0.4 : 0.7,
            delay: index * 0.08,
            ease: "back.out"
        });

        // Flow step hover effect
        if (!isMobile) {
            el.addEventListener('mouseenter', () => {
                gsap.to(el, { 
                    y: -12, 
                    duration: 0.3,
                    boxShadow: '0 25px 30px rgba(0,0,0,0.2)',
                    ease: "power2.out"
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(el, { 
                    y: 0, 
                    duration: 0.3,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    ease: "power2.out"
                });
            });
        }
    });

    // ===== Contact Section Animations =====
    const contactElements = document.querySelectorAll('#contact input, #contact select, #contact textarea');
    contactElements.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: '#contact',
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            },
            opacity: 0,
            y: 25,
            duration: isMobile ? 0.4 : 0.6,
            delay: index * 0.05,
            ease: "back.out"
        });

        // Input focus animation
        el.addEventListener('focus', () => {
            gsap.to(el, {
                boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                duration: 0.3,
                ease: "power2.out"
            });
        });

        el.addEventListener('blur', () => {
            gsap.to(el, {
                boxShadow: '0 0 0 0px rgba(59, 130, 246, 0)',
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // ===== About Section Image Animation =====
    const aboutImage = document.querySelector('#about img');
    if (aboutImage) {
        gsap.from(aboutImage, {
            scrollTrigger: {
                trigger: '#about',
                start: "top 70%",
                once: true
            },
            scale: 0.8,
            opacity: 0,
            duration: isMobile ? 0.6 : 1,
            ease: "power2.out"
        });
    }

    // ===== Section Headers Animation =====
    document.querySelectorAll('section h2').forEach((heading, index) => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                once: true
            },
            opacity: 0,
            y: 30,
            duration: isMobile ? 0.4 : 0.6,
            ease: "power2.out"
        });
    });
}

// ================================================
// SERVICE MODAL FUNCTIONS
// ================================================
window.openServiceModal = (index) => {
    const service = services[index];
    const modal = document.getElementById('service-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const content = document.getElementById('modal-content');

    if (!modal) return;

    // Set modal content
    document.getElementById('modal-title').innerText = service.title;
    document.getElementById('modal-desc').innerText = service.desc;
    document.getElementById('modal-detail').innerText = service.detail;

    // Set modal icon
    const iconContainer = document.getElementById('modal-icon');
    iconContainer.innerHTML = `<i data-lucide="${service.icon}" class="w-7 h-7 text-white"></i>`;
    lucide.createIcons();

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Animate modal entrance
    requestAnimationFrame(() => {
        gsap.to(backdrop, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(content, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out"
        });
    });

    // Trap focus for accessibility
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    });
};

window.closeServiceModal = () => {
    const modal = document.getElementById('service-modal');
    if (!modal) return;

    const backdrop = document.getElementById('modal-backdrop');
    const content = document.getElementById('modal-content');

    gsap.to(backdrop, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
    });

    gsap.to(content, {
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
        ease: "back.in"
    });

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
};

// Modal event listeners
const serviceModal = document.getElementById('service-modal');
if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
        if (e.target.id === 'service-modal' || e.target.id === 'modal-backdrop') {
            closeServiceModal();
        }
    });
}

const modalClose = document.getElementById('modal-close');
if (modalClose) {
    modalClose.addEventListener('click', closeServiceModal);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('service-modal').classList.contains('hidden')) {
        closeServiceModal();
    }
});

// ================================================
// CONTACT FORM FUNCTIONALITY
// ================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if(!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;

        // Show loading state
        btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin inline"></i> Mengirim...`;
        btn.disabled = true;

        gsap.to(btn, {
            scale: 0.95,
            duration: 0.2
        });

        // Simulate form submission
        setTimeout(() => {
            // Show success state
            btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i> Terkirim!`;
            btn.classList.remove('bg-slate-900');
            btn.classList.add('bg-green-600');
            
            gsap.to(btn, {
                scale: 1,
                duration: 0.2
            });

            form.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.add('bg-slate-900');
                btn.classList.remove('bg-green-600');
                btn.disabled = false;
                lucide.createIcons();

                gsap.to(btn, {
                    scale: 1,
                    duration: 0.2
                });
            }, 3000);
        }, 1500);
    });
}

// ================================================
// FOOTER SOCIAL ICONS ANIMATION
// ================================================
function initFooterSocial() {
    const socialLinks = document.querySelectorAll('footer .flex.items-center.gap-4 a');
    
    socialLinks.forEach((link, index) => {
        // Add stagger animation on page load
        gsap.from(link, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: 0.2 + (index * 0.1),
            ease: "back.out"
        });

        const isMobile = window.innerWidth < 768;

        // Hover animations (desktop only)
        if (!isMobile) {
            link.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.25,
                    duration: 0.3,
                    ease: 'back.out'
                });

                gsap.to(this.querySelector('i'), {
                    rotation: 360,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });

            link.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.in'
                });

                gsap.to(this.querySelector('i'), {
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            });
        }

        // Touch support for mobile
        link.addEventListener('touchstart', function() {
            gsap.to(this, {
                scale: 1.15,
                duration: 0.2
            });
        });

        link.addEventListener('touchend', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.2
            });
        });
    });
}

// ================================================
// MOBILE OPTIMIZATION
// ================================================
function initMobileOptimization() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    if (isMobile) {
        // Reduce animation complexity on mobile
        gsap.globalTimeline.timeScale(0.9);

        // Disable transform animations for better mobile performance
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 640px) {
                .animate-slow-zoom {
                    animation: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Prevent zoom on double-tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Handle viewport orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    // Handle window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        document.body.style.overflow = 'hidden';
        
        resizeTimer = setTimeout(() => {
            document.body.style.overflow = '';
            // Reinitialize components if needed
            lucide.createIcons();
        }, 500);
    }, { passive: true });
}

// ================================================
// PERFORMANCE OPTIMIZATION
// ================================================
function initPerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'image/Logo.png';
    document.head.appendChild(link);

    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Any heavy scroll calculations here
        }, 150);
    }, { passive: true });

    // Monitor performance
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log(`⏱️ Page Load Time: ${loadTime}ms`);
            }, 0);
        });
    }
}

// ================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================
// ACCESSIBILITY ENHANCEMENTS
// ================================================

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#content';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #0f172a;
    color: #fff;
    padding: 8px;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Log script loaded
console.log('✅ Script.js loaded successfully!');
console.log('📱 Device Type:', window.innerWidth < 768 ? 'Mobile' : window.innerWidth < 1024 ? 'Tablet' : 'Desktop');