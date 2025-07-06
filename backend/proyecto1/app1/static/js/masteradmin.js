document.addEventListener('DOMContentLoaded', function() {
    const sidebarAdmin = document.querySelector('.sidebar-admin');
    const logoAdminImg = document.getElementById('logo-admin-sidebar');
    const body = document.body;

    if (logoAdminImg && sidebarAdmin && body) {
        logoAdminImg.addEventListener('click', function() {
            sidebarAdmin.classList.toggle('compact-admin');
            body.classList.toggle('sidebar-admin-compacted');
        });
    }

    // Lógica para que solo un elemento de navegación esté activo
    const navItems = document.querySelectorAll('.sidebar-admin .nav-links .nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Prevenir navegación por defecto si es un '#'
            if (this.getAttribute('href') === '#') {
                event.preventDefault();
            }

            // Remover 'active' de todos los ítems
            navItems.forEach(nav => nav.classList.remove('active'));

            // Añadir 'active' al ítem clickeado
            this.classList.add('active');

            // Opcional: Actualizar el título en la barra superior si el ID existe
            const sectionTitle = document.getElementById('section-title-admin');
            if (sectionTitle) {
                // Obtenemos el texto dentro del span del elemento nav-item
                const itemText = this.querySelector('span').textContent;
                sectionTitle.textContent = itemText;
            }
        });
    });

    // Activar el "Dashboard" al cargar la página por defecto
    const dashboardNavItem = document.getElementById('nav-dashboard-admin');
    if (dashboardNavItem) {
        dashboardNavItem.classList.add('active');
        const sectionTitle = document.getElementById('section-title-admin');
        if (sectionTitle) {
            sectionTitle.textContent = dashboardNavItem.querySelector('span').textContent;
        }
    }
});