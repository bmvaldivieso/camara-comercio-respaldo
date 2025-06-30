document.addEventListener("DOMContentLoaded", () => {
    const sectionTitle = document.getElementById("section-title");
    const cardsContainer = document.getElementById("cards-container");
    const btnVolver = document.getElementById("btn-volver");
  
    // Asegurar que los elementos existen
    if (!sectionTitle || !cardsContainer || !btnVolver) return;
  
    // Guardar el contenido original de las tarjetas
    const tarjetasOriginales = cardsContainer.innerHTML;
  
    // Evento para botones "Ingresar"
    cardsContainer.addEventListener("click", (event) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.classList.contains("btn-ingresar")
      ) {
        sectionTitle.textContent = "Servicios";
        btnVolver.style.display = "inline-block";
  
        const servicios = [
          {
            titulo: "Clínica Vida Sana",
            descripcion: "Consultas médicas y chequeos preventivos para toda la familia.",
          },
          {
            titulo: "Farmacia Equilibrio",
            descripcion: "Medicamentos con descuento y asesoramiento profesional.",
          },
          {
            titulo: "Centro Odontológico Plus",
            descripcion: "Ortodoncia, limpiezas dentales y emergencias odontológicas.",
          },
          {
            titulo: "Laboratorio SaludLab",
            descripcion: "Análisis clínicos y resultados en línea con calidad garantizada.",
          },
        ];
  
        // Reemplazar tarjetas
        cardsContainer.innerHTML = servicios
          .map(
            (s) => `
            <div class="category-card card-salud">
              <div class="card-content d-flex flex-column justify-content-center align-items-center text-center h-100">
                <h2 class="card-title">${s.titulo}</h2>
                <p class="card-description">${s.descripcion}</p>
                <button class="btn btn-ingresar">Ingresar</button>
              </div>
            </div>`
          )
          .join("");
      }
    });
  
    // Evento para botón "Volver"
    btnVolver.addEventListener("click", () => {
      sectionTitle.textContent = "Categorías";
      cardsContainer.innerHTML = tarjetasOriginales;
      btnVolver.style.display = "none";
    });
  });
  