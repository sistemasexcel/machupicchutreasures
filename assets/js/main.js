document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 1rem';
            navbar.classList.add('shadow');
        } else {
            navbar.style.padding = '1rem 1rem';
            navbar.classList.remove('shadow');
        }
    });

    // Copyright Year
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Dynamic Modal Content (Simulation for "Ver Detalles")
    const detailButtons = document.querySelectorAll('.btn-detail');
    const modalTitle = document.querySelector('#tourModalLabel');
    const modalBody = document.querySelector('#tourModalBody');

    // Sample data structure to simulate DB content
    const tourData = {
        default: {
            desc: "Descubre la magia de los Andes con nuestros guías expertos.",
            itinerary: "<ul><li>Día 1: Recojo y traslado.</li><li>Día 2: Tour principal y almuerzo.</li><li>Día 3: Retorno.</li></ul>",
            includes: "<ul><li>Transporte turístico</li><li>Guía profesional</li><li>Almuerzo buffet</li></ul>",
            excludes: "<ul><li>Propinas</li><li>Gastos extras</li></ul>"
        }
    };

    detailButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, we would fetch data-id
            // let tourId = this.getAttribute('data-id');
            
            // Get card data for demo
            let card = this.closest('.card-tour');
            let title = card.querySelector('.card-title').textContent;
            let img = card.querySelector('img').src;

            if(modalTitle && modalBody) {
                modalTitle.textContent = title;
                modalBody.innerHTML = `
                    <img src="${img}" class="img-fluid rounded mb-3" style="width:100%; height: 200px; object-fit: cover;">
                    <h5>Descripción</h5>
                    <p>Un viaje inolvidable por ${title}, donde conocerás la historia y cultura viva de Cusco.</p>
                    <hr>
                    <h5>Itinerario Sugerido</h5>
                    ${tourData.default.itinerary}
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <h6 class="text-success"><i class="bi bi-check-circle"></i> Incluye</h6>
                            ${tourData.default.includes}
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-danger"><i class="bi bi-x-circle"></i> No Incluye</h6>
                            ${tourData.default.excludes}
                        </div>
                    </div>
                `;
            }
        });
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            
            if(name && email) {
                alert('¡Gracias por contactarnos, ' + name + '! Te responderemos a la brevedad.');
                contactForm.reset();
            } else {
                alert('Por favor completa los campos requeridos.');
            }
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
