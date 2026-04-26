// ============================================
// MENÚ HAMBURGUESA - NAVEGACIÓN MÓVIL
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// MODAL DE CONSULTA DE PRODUCTOS
// ============================================

function mostrarConsulta(nombreProducto) {
    const modal = document.getElementById('modalConsulta');
    const productoNombre = document.getElementById('productoNombre');
    
    if (modal && productoNombre) {
        productoNombre.textContent = nombreProducto;
        modal.style.display = 'block';
    }
}

// Cerrar modal
const modal = document.getElementById('modalConsulta');
const closeBtn = document.querySelector('.close');

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            mostrarMensaje('Por favor completa todos los campos obligatorios.', 'error');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarMensaje('Por favor ingresa un email válido.', 'error');
            return;
        }
        
        // Simular envío (aquí integrarías con tu backend o servicio de email)
        mostrarMensaje('¡Gracias por tu mensaje! Te responderemos pronto.', 'success');
        
        // Limpiar formulario
        contactForm.reset();
        
        // En producción, aquí enviarías los datos:
        // fetch('/api/contacto', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({nombre, email, telefono, asunto, mensaje})
        // })
    });
}

function mostrarMensaje(texto, tipo) {
    if (formMessage) {
        formMessage.textContent = texto;
        formMessage.className = `form-message ${tipo}`;
        formMessage.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// SCROLL SUAVE
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// ANIMACIÓN AL HACER SCROLL (Opcional)
// ============================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Aplicar animación a tarjetas de productos
document.querySelectorAll('.producto-card, .producto-card-full, .valor-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});

// ============================================
// PREVENIR ENVÍO DUPLICADO DE FORMULARIOS
// ============================================

let formSubmitting = false;

if (contactForm) {
    contactForm.addEventListener('submit', function() {
        if (formSubmitting) {
            return false;
        }
        formSubmitting = true;
        setTimeout(() => {
            formSubmitting = false;
        }, 3000);
    });
}

console.log('L\'ada Natural - Sitio cargado correctamente ✨');
