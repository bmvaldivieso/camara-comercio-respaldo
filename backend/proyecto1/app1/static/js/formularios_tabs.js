document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.form-tab-bar .form-tab-button');
    const tabContentContainer = document.getElementById('form-tab-content-container');

    // Función para cargar el contenido de la pestaña (vía AJAX)
    function loadFormTabContent(tabName) {
        // Asocia cada pestaña con una URL existente en urlpatterns
        const urlMap = {
            'formulario-a': '/formularios_form_a',
            'formulario-b': '/formularios_form_b',
        };

        const url = urlMap[tabName];

        if (!url) {
            console.error('No se encontró una URL asociada a', tabName);
            return;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                tabContentContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error cargando el contenido del formulario:', error);
                tabContentContainer.innerHTML = `<p>Error al cargar el contenido de ${tabName}.</p>`;
            });
    }


    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remover 'active' de todos los botones de pestaña
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir 'active' al botón clicado
            this.classList.add('active');

            const tabName = this.dataset.tabTarget;
            loadFormTabContent(tabName);
        });
    });

    // Lógica para asegurar que el ítem "Formulario" en el sidebar esté activo
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.sidebar .nav-links .nav-item');
    const navFormulario = document.getElementById('nav-formulario'); // ID del item "Formulario"

    // Si la URL actual está en la sección de formularios
    if (currentPath.includes('/formularios')) {
        navItems.forEach(item => item.classList.remove('active')); // Desactivar todos los ítems
        if (navFormulario) {
            navFormulario.classList.add('active'); // Activar el ítem "Formulario"
            // Actualizar el título y el ícono de la top-bar
            const sectionTitle = document.getElementById('section-title');
            if (sectionTitle) {
                sectionTitle.textContent = navFormulario.querySelector('span').textContent;
                // Ajustar el ícono de la top-bar
                const iconElement = sectionTitle.previousElementSibling;
                if (iconElement) {
                    iconElement.className = ''; // Limpiar clases existentes
                    iconElement.classList.add('far', 'fa-file-alt', 'me-2', 'icono-azul'); // Usar far fa-file-alt
                }
            }
        }
    }

    // Cargar el contenido de la primera pestaña al iniciar la página
    const initialTabTarget = document.querySelector('.form-tab-bar .form-tab-button.active')?.dataset.tabTarget;
    if (initialTabTarget) {
        loadFormTabContent(initialTabTarget);
    }
});