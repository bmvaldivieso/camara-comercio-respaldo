document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname; // Todavía útil para la activación de botones

    const bottomFloatingBar = document.querySelector('.bottom-floating-bar'); // Selecciona la barra flotante (ahora es opcional el check, ya que solo se carga donde existe)

    // Lógica para la barra flotante inferior (SOLO se ejecutará si la barra existe en la página)
    const userListButton = document.getElementById('btn-user-list');
    const userIncrementButton = document.getElementById('btn-user-increment');

    // Asegúrate de que estos botones existan. 'bottomFloatingBar' ya indica que la barra está presente.
    if (userListButton && userIncrementButton) { // No necesitamos 'bottomFloatingBar.classList.contains('show')' porque la barra ya está visible al cargarse.
        // Establecer el estado activo inicial de los botones de la barra flotante
        if (currentPath.includes('/admin_usuarios_incremento')) {
            userListButton.classList.remove('active');
            userIncrementButton.classList.add('active');
        } else if (currentPath.includes('/admin_usuarios')) {
            userListButton.classList.add('active');
            userIncrementButton.classList.remove('active');
        }

        // Navegación al hacer clic en los botones de la barra flotante
        userListButton.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                window.location.href = '/admin_usuarios';
            }
        });

        userIncrementButton.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                window.location.href = '/admin_usuarios_incremento';
            }
        });
    }

    // Lógica para los botones de filtro en la página de incremento (si existen)
    const filterButtons = document.querySelectorAll('.filter-button');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                console.log(`Filtro "${this.textContent.trim()}" aplicado.`);
            });
        });

        if (filterButtons[0]) {
            filterButtons[0].classList.add('active');
        }
    }

    // Asegurar que "Usuarios" está activo en el sidebar de masteradmin
    const navUsuariosAdmin = document.getElementById('nav-usuarios-admin');
    const navItemsAdmin = document.querySelectorAll('.sidebar-admin .nav-links .nav-item');
    const sectionTitleAdmin = document.getElementById('section-title-admin');

    if (currentPath.includes('/admin_usuarios') || currentPath.includes('/admin_usuarios_incremento')) {
        if (navUsuariosAdmin) {
            navItemsAdmin.forEach(item => item.classList.remove('active'));
            navUsuariosAdmin.classList.add('active');
            if (sectionTitleAdmin) {
                sectionTitleAdmin.textContent = navUsuariosAdmin.querySelector('span').textContent;
            }
        }
    } else if (currentPath.includes('/dashboard')) {
        const navDashboardAdmin = document.getElementById('nav-dashboard-admin');
        if (navDashboardAdmin) {
            navItemsAdmin.forEach(item => item.classList.remove('active'));
            navDashboardAdmin.classList.add('active');
            if (sectionTitleAdmin) {
                sectionTitleAdmin.textContent = navDashboardAdmin.querySelector('span').textContent;
            }
        }
    }
});