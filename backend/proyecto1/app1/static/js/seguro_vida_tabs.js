document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-bar .tab-button');
    const tabContentContainer = document.getElementById('tab-content-container');

    // Función para cargar el contenido de la pestaña
    function loadTabContent(tabName) {
        fetch(`/${tabName === 'archivos-subidos' ? 'seguro_vida_archivos_subidos' :
            tabName === 'estado' ? 'seguro_vida_estado' :
                tabName === 'archivos-recibidos' ? 'seguro_vida_archivos_recibidos' : ''}`)
            // URL que Django debe definir
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
                console.error('Error cargando el contenido de la pestaña:', error);
                tabContentContainer.innerHTML = `<p>Error al cargar el contenido de ${tabName}.</p>`;
            });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remover 'active' de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir 'active' al botón clicado
            this.classList.add('active');

            const tabName = this.dataset.tabTarget;
            loadTabContent(tabName);
        });
    });

    // Lógica para el sidebar (asegurarse de que "Categorías" esté activo)
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.sidebar .nav-links .nav-item');
    const navCategorias = document.getElementById('nav-categorias'); // ID del item "Categorías"

    if (currentPath.includes('/seguro_vida')) { // Si la URL contiene /seguro_vida
        navItems.forEach(item => item.classList.remove('active')); // Desactivar todos
        if (navCategorias) {
            navCategorias.classList.add('active'); // Activar "Categorías"
            // También podrías actualizar el título del top-bar si lo necesitas
            const sectionTitle = document.getElementById('section-title');
            if (sectionTitle) {
                sectionTitle.textContent = navCategorias.querySelector('span').textContent;
                sectionTitle.previousElementSibling.className = ''; // Limpiar clases existentes
                sectionTitle.previousElementSibling.classList.add('fas', 'fa-th-large', 'me-2', 'icono-azul');
            }
        }
    }

    const initialTabTarget = document.querySelector('.tab-bar .tab-button.active')?.dataset.tabTarget;
    if (initialTabTarget) {
        loadTabContent(initialTabTarget);
    }
});