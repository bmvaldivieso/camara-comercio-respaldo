document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const logoImg = document.getElementById('logo-sidebar'); // El ID que añadiremos al logo
    const body = document.body;

    if (logoImg && sidebar && body) {
        logoImg.addEventListener('click', function() {
            sidebar.classList.toggle('compact');
            body.classList.toggle('sidebar-compacted'); // Para ajustar el main-content
        });
    }

    // Aquí también podrías añadir lógica para cerrar el carrito
    // si el sidebar se compacta y el carrito está abierto,
    // o cualquier otra interacción que necesites.
});