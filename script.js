// Seleccionar los elementos del DOM
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = mobileMenu.querySelectorAll('a');

// Función para mostrar/ocultar el menú móvil
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Función para cerrar el menú móvil al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
