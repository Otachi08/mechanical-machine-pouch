/**
 * MECHANICAL MACHINE POUCH - MAIN JAVASCRIPT
 * Script principal del sitio web (Versión WhatsApp)
 */

// ===================================
// 1. PROTECCIÓN DE IMÁGENES
// Previene que se puedan copiar o arrastrar los logos
// ===================================
function protegerImagenes() {
    const imagenesProtegidas = document.querySelectorAll('.logo-protegido, .logo-nav, .logo-hero');
    
    imagenesProtegidas.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        img.style.userSelect = 'none';
        img.style.webkitUserSelect = 'none';
        img.style.mozUserSelect = 'none';
        img.style.msUserSelect = 'none';
    });
}

// ===================================
// 2. MENÚ HAMBURGUESA (MÓVIL)
// ===================================
function inicializarMenuHamburguesa() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    const enlaces = document.querySelectorAll('.nav-links a');
    enlaces.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===================================
// 3. SMOOTH SCROLL
// ===================================
function inicializarSmoothScroll() {
    const enlaces = document.querySelectorAll('a[href^="#"]');
    
    enlaces.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===================================
// 4. ANIMACIONES AL HACER SCROLL
// ===================================
function inicializarAnimacionesScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const elementosAnimados = document.querySelectorAll(
        '.service-card, .project-card, .feature-item, .stat-item, .info-card'
    );
    
    elementosAnimados.forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// 5. HEADER STICKY CON EFECTO
// ===================================
function inicializarHeaderSticky() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        }
    });
}

// ===================================
// 6. TRACKING DE CLICKS EN WHATSAPP
// ===================================
function trackearClicksWhatsApp() {
    const botonesWhatsApp = document.querySelectorAll('a[href*="wa.me"]');
    
    botonesWhatsApp.forEach(boton => {
        boton.addEventListener('click', function() {
            console.log('Click en botón de WhatsApp');
        });
    });
}

// ===================================
// 7. INICIALIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mechanical Machine Pouch - WhatsApp Version Cargada');
    
    protegerImagenes();
    inicializarMenuHamburguesa();
    inicializarSmoothScroll();
    inicializarAnimacionesScroll();
    inicializarHeaderSticky();
    trackearClicksWhatsApp();
    
    console.log('%c¡Bienvenido a Mechanical Machine Pouch!', 'color: #7CB342; font-size: 20px; font-weight: bold;');
    console.log('%cContáctanos por WhatsApp: +1 (829) 308-9508', 'color: #25D366; font-size: 14px;');
});

// ===================================
// 8. FUNCIÓN AUXILIAR PARA WHATSAPP
// ===================================
function abrirWhatsApp(mensaje) {
    const numeroWhatsApp = '18293089508';
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(url, '_blank');
}

window.abrirWhatsApp = abrirWhatsApp;