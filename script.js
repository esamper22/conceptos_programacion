// Autor: Ernesto Samper Chacón
document.getElementById('year').textContent = new Date().getFullYear();

// Activar el botón de volver arriba
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
    } else {
    document.getElementById("back-to-top").style.display = "none";
    }
};

// Función para volver arriba
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Activar los enlaces de navegación según la sección visible
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: 'smooth'
        });
    });
    });
});