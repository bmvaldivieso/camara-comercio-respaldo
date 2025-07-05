document.addEventListener('DOMContentLoaded', function() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    const navCartSidebar = document.getElementById('nav-carrito-sidebar');
    const cartIconTopbar = document.getElementById('cart-icon-topbar');
    const closeCartSidebarBtn = document.getElementById('close-cart-sidebar');

    // Función para abrir el sidebar del carrito
    function openCartSidebar() {
        cartSidebar.classList.add('open');
        overlay.classList.add('active');
        // Quita la clase 'active' de cualquier otro nav-item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        // Añade la clase 'active' solo al ítem "Carrito" en el sidebar principal
        navCartSidebar.classList.add('active');
    }

    // Función para cerrar el sidebar del carrito
    function closeCartSidebar() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
        // Si "Carrito" estaba activo, quita la clase 'active'
        navCartSidebar.classList.remove('active');
        // Por ejemplo, si quieres que al cerrar el carrito se active "Categorías" de nuevo:
        document.getElementById('nav-categorias').classList.add('active');
    }

    // Event listeners para abrir el carrito
    if (navCartSidebar) { // Verificar si el elemento existe antes de añadir el listener
        navCartSidebar.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace navegue
            openCartSidebar();
        });
    }

    if (cartIconTopbar) { // Verificar si el elemento existe
        cartIconTopbar.addEventListener('click', openCartSidebar);
    }

    // Event listener para cerrar el carrito
    if (closeCartSidebarBtn) { // Verificar si el elemento existe
        closeCartSidebarBtn.addEventListener('click', closeCartSidebar);
    }
    if (overlay) { // Verificar si el elemento existe
        overlay.addEventListener('click', closeCartSidebar); // Cierra también al hacer clic en el overlay
    }

    // Mantener "Categorías" activo al cargar, y manejar clics en otros ítems
    document.querySelectorAll('.nav-links .nav-item').forEach(item => {
        item.addEventListener('click', function(event) {
            // Si el clic no es en el carrito y el carrito está abierto, ciérralo primero
            if (this.id !== 'nav-carrito-sidebar' && cartSidebar.classList.contains('open')) {
                closeCartSidebar();
            }

            // Remover 'active' de todos los ítems de navegación
            document.querySelectorAll('.nav-links .nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });

            // Añadir 'active' al ítem clickeado
            this.classList.add('active');

            // Aquí podrías cambiar el título de la sección principal si lo deseas
            // document.getElementById('section-title').textContent = this.textContent.trim();
        });
    });

});