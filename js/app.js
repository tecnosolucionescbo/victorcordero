/* ============================================
   IMAGEN - Fotografía Profesional
   JavaScript puro - Sin frameworks
   ============================================ */

(function() {
    'use strict';

    // ==========================================
    // DATA - Portfolio items (CMS via JSON)
    // ==========================================
    const portfolioData = [
        {
            slug: "documental-vida-calle",
            title: "Vida en la Calle",
            category: "documentales",
            description: "Retrato documental de la vida cotidiana en las calles de la ciudad.",
            image: "images/portfolio/documental-vida-calle.jpg",
            date: "2026-07-15",
            featured: true,
            order: 1
        },
        {
            slug: "documental-mercado",
            title: "Mercado Local",
            category: "documentales",
            description: "Colores y texturas del mercado tradicional, un viaje a la cultura local.",
            image: "images/portfolio/documental-mercado.jpg",
            date: "2026-07-14",
            featured: false,
            order: 2
        },
        {
            slug: "documental-retratos",
            title: "Retratos con Alma",
            category: "documentales",
            description: "Serie de retratos que capturan la esencia y personalidad de cada persona.",
            image: "images/portfolio/documental-retratos.jpg",
            date: "2026-07-13",
            featured: false,
            order: 3
        },
        {
            slug: "documental-arquitectura",
            title: "Arquitectura Urbana",
            category: "documentales",
            description: "Fotografía documental de la arquitectura moderna y su impacto visual.",
            image: "images/portfolio/documental-arquitectura.jpg",
            date: "2026-07-12",
            featured: false,
            order: 4
        },
        {
            slug: "documental-tradiciones",
            title: "Tradiciones Vivas",
            category: "documentales",
            description: "Documental fotográfico sobre tradiciones y costumbres que perduran.",
            image: "images/portfolio/documental-tradiciones.jpg",
            date: "2026-07-11",
            featured: false,
            order: 5
        },
        {
            slug: "urbana-graffiti",
            title: "Arte en los Muros",
            category: "urbanas",
            description: "Graffiti y murales que transforman las calles en galerías al aire libre.",
            image: "images/portfolio/urbana-graffiti.jpg",
            date: "2026-06-20",
            featured: true,
            order: 6
        },
        {
            slug: "urbana-atardecer",
            title: "Atardecer Metropolitano",
            category: "urbanas",
            description: "El sol poniente entre rascacielos, capturando la ciudad en su mejor luz.",
            image: "images/portfolio/urbana-atardecer.jpg",
            date: "2026-06-19",
            featured: false,
            order: 7
        },
        {
            slug: "urbana-nocturna",
            title: "Luces Nocturnas",
            category: "urbanas",
            description: "Fotografía de larga exposición de las luces de la ciudad durante la noche.",
            image: "images/portfolio/urbana-nocturna.jpg",
            date: "2026-06-18",
            featured: false,
            order: 8
        },
        {
            slug: "urbana-transito",
            title: "Flujo Urbano",
            category: "urbanas",
            description: "El movimiento constante de personas y vehículos en la metrópoli.",
            image: "images/portfolio/urbana-transito.jpg",
            date: "2026-06-17",
            featured: false,
            order: 9
        },
        {
            slug: "urbana-detalles",
            title: "Detalles de Ciudad",
            category: "urbanas",
            description: "Pequeños detalles que pasan desapercibidos en el ajetreo diario.",
            image: "images/portfolio/urbana-detalles.jpg",
            date: "2026-06-16",
            featured: false,
            order: 10
        },
        {
            slug: "graduacion-ceremonia",
            title: "Ceremonia de Graduación",
            category: "graduacion",
            description: "El momento de la entrega de títulos, alegría y emoción compartida.",
            image: "images/portfolio/graduacion-ceremonia.jpg",
            date: "2026-05-10",
            featured: true,
            order: 11
        },
        {
            slug: "graduacion-familia",
            title: "Orgullo Familiar",
            category: "graduacion",
            description: "El abrazo y la sonrisa de los padres al ver a sus hijos graduarse.",
            image: "images/portfolio/graduacion-familia.jpg",
            date: "2026-05-09",
            featured: false,
            order: 12
        },
        {
            slug: "graduacion-birretes",
            title: "Birretes al Viento",
            category: "graduacion",
            description: "El tradicional lanzamiento de birretes al final de la ceremonia.",
            image: "images/portfolio/graduacion-birretes.jpg",
            date: "2026-05-08",
            featured: false,
            order: 13
        },
        {
            slug: "graduacion-detalles",
            title: "Detalles del Día",
            category: "graduacion",
            description: "Pequeños momentos que hacen especial el día de graduación.",
            image: "images/portfolio/graduacion-detalles.jpg",
            date: "2026-05-07",
            featured: false,
            order: 14
        },
        {
            slug: "graduacion-amigos",
            title: "Amigos para Siempre",
            category: "graduacion",
            description: "La hermandad y amistad que se celebra en el último día de clases.",
            image: "images/portfolio/graduacion-amigos.jpg",
            date: "2026-05-06",
            featured: false,
            order: 15
        },
        {
            slug: "deporte-futbol",
            title: "Pasión en el Campo",
            category: "deporte",
            description: "Acción y emoción en un partido de fútbol, congelando el momento decisivo.",
            image: "images/portfolio/deporte-futbol.jpg",
            date: "2026-04-22",
            featured: true,
            order: 16
        },
        {
            slug: "deporte-basket",
            title: "Basket en Movimiento",
            category: "deporte",
            description: "Jugadores en acción, capturando la intensidad del baloncesto.",
            image: "images/portfolio/deporte-basket.jpg",
            date: "2026-04-21",
            featured: false,
            order: 17
        },
        {
            slug: "deporte-natacion",
            title: "Bajo el Agua",
            category: "deporte",
            description: "Fotografía subacuática de nadadores en plena competencia.",
            image: "images/portfolio/deporte-natacion.jpg",
            date: "2026-04-20",
            featured: false,
            order: 18
        },
        {
            slug: "deporte-ciclismo",
            title: "Ruta y Velocidad",
            category: "deporte",
            description: "Ciclistas recorriendo caminos, la libertad sobre dos ruedas.",
            image: "images/portfolio/deporte-ciclismo.jpg",
            date: "2026-04-19",
            featured: false,
            order: 19
        },
        {
            slug: "deporte-fuerza",
            title: "Fuerza y Determinación",
            category: "deporte",
            description: "Atletas de alto rendimiento en su máxima expresión física.",
            image: "images/portfolio/deporte-fuerza.jpg",
            date: "2026-04-18",
            featured: false,
            order: 20
        },
        {
            slug: "formacion-taller",
            title: "Taller de Fotografía",
            category: "formacion",
            description: "Estudiantes aprendiendo técnicas de fotografía en un taller práctico.",
            image: "images/portfolio/formacion-taller.jpg",
            date: "2026-03-15",
            featured: true,
            order: 21
        },
        {
            slug: "formacion-ensenanza",
            title: "El Arte de Enseñar",
            category: "formacion",
            description: "Momentos de enseñanza y aprendizaje en el aula de fotografía.",
            image: "images/portfolio/formacion-ensenanza.jpg",
            date: "2026-03-14",
            featured: false,
            order: 22
        },
        {
            slug: "formacion-practica",
            title: "Práctica en Campo",
            category: "formacion",
            description: "Alumnos aplicando lo aprendido en sesiones prácticas de fotografía.",
            image: "images/portfolio/formacion-practica.jpg",
            date: "2026-03-13",
            featured: false,
            order: 23
        },
        {
            slug: "formacion-creatividad",
            title: "Creatividad sin Límites",
            category: "formacion",
            description: "Explorando la creatividad a través de ejercicios fotográficos.",
            image: "images/portfolio/formacion-creatividad.jpg",
            date: "2026-03-12",
            featured: false,
            order: 24
        },
        {
            slug: "formacion-comunidad",
            title: "Comunidad de Aprendizaje",
            category: "formacion",
            description: "El compañerismo y trabajo en equipo en los cursos de formación.",
            image: "images/portfolio/formacion-comunidad.jpg",
            date: "2026-03-11",
            featured: false,
            order: 25
        }
    ];

    // Try to load external data
    async function loadExternalData() {
        try {
            const response = await fetch('data/portfolio.json');
            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    return data;
                }
            }
        } catch (e) {
            console.log('Using default portfolio data');
        }
        return portfolioData;
    }

    // ==========================================
    // STATE
    // ==========================================
    let currentItems = [];
    let currentCategory = 'todos';
    let lightboxIndex = 0;
    let filteredItems = [];

    // ==========================================
    // DOM Elements
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const portfolioFilters = document.getElementById('portfolioFilters');
    const portfolioGrid = document.getElementById('portfolioGrid');
    const portfolioEmpty = document.getElementById('portfolioEmpty');
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const yearSpan = document.getElementById('year');

    // ==========================================
    // NAVIGATION
    // ==========================================
    function initNavigation() {
        // Mobile toggle
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.85)';
            }

            lastScroll = currentScroll;
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================
    // PORTFOLIO
    // ==========================================
    function getCategories(items) {
        const cats = new Set(items.map(item => item.category));
        return ['todos', ...Array.from(cats)];
    }

    function renderFilters(categories) {
        portfolioFilters.innerHTML = categories.map(cat => 
            `<button class="filter-btn ${cat === 'todos' ? 'active' : ''}" data-category="${cat}">
                ${cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>`
        ).join('');

        // Add click handlers
        portfolioFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                portfolioFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;
                renderPortfolio();
            });
        });
    }

    function renderPortfolio() {
        filteredItems = currentCategory === 'todos' 
            ? [...currentItems] 
            : currentItems.filter(item => item.category === currentCategory);

        if (filteredItems.length === 0) {
            portfolioGrid.style.display = 'none';
            portfolioEmpty.style.display = 'block';
            return;
        }

        portfolioGrid.style.display = 'grid';
        portfolioEmpty.style.display = 'none';

        portfolioGrid.innerHTML = filteredItems.map((item, index) => `
            <div class="portfolio-item" data-index="${index}" style="animation-delay: ${index * 0.05}s">
                <div class="portfolio-item-inner">
                    ${item.image ? 
                        `<img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">` : ''
                    }
                    <div class="placeholder-icon" style="${item.image ? 'display:none;' : ''}">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    </div>
                </div>
                <div class="portfolio-overlay">
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.category}</p>
                    </div>
                </div>
                ${item.featured ? '<div class="portfolio-badge">Destacado</div>' : ''}
            </div>
        `).join('');

        // Add click handlers
        portfolioGrid.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                openLightbox(index);
            });
        });
    }

    // ==========================================
    // LIGHTBOX
    // ==========================================
    function openLightbox(index) {
        lightboxIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        const item = filteredItems[lightboxIndex];
        if (!item) return;

        const imageContainer = lightbox.querySelector('.lightbox-image');

        if (item.image) {
            imageContainer.innerHTML = `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<svg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><path d=\\'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\'/><circle cx=\\'12\\' cy=\\'13\\' r=\\'4\\'/></svg>'">`;
        } else {
            imageContainer.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            `;
        }

        lightboxTitle.textContent = item.title;
        lightboxCategory.textContent = item.category;
        lightboxDesc.textContent = item.description || '';
        lightboxCounter.textContent = `${lightboxIndex + 1} / ${filteredItems.length}`;
    }

    function navigateLightbox(direction) {
        if (direction === 'next') {
            lightboxIndex = (lightboxIndex + 1) % filteredItems.length;
        } else {
            lightboxIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
        }
        updateLightbox();
    }

    function initLightbox() {
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox('prev');
        });
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox('next');
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox('next');
            if (e.key === 'ArrowLeft') navigateLightbox('prev');
        });
    }

    // ==========================================
    // SCROLL REVEAL
    // ==========================================
    function initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.section-header, .about-image, .about-content, .contact-form-wrapper, .contact-info').forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    // ==========================================
    // YEAR
    // ==========================================
    function initYear() {
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // ==========================================
    // FORM
    // ==========================================
    function initForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            const btn = form.querySelector('.form-submit');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>Enviando...</span>';
            btn.disabled = true;

            // If using Formspree, the form will submit normally
            // This is just visual feedback
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }

    // ==========================================
    // INIT
    // ==========================================
    async function init() {
        initNavigation();
        initLightbox();
        initScrollReveal();
        initYear();
        initForm();

        // Load portfolio data
        currentItems = await loadExternalData();
        currentItems.sort((a, b) => (a.order || 999) - (b.order || 999));

        const categories = getCategories(currentItems);
        renderFilters(categories);
        renderPortfolio();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
