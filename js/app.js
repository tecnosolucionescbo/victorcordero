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
            "slug": "documental-1",
            "title": "Documentales",
            "category": "documentales",
            "description": "",
            "image": "images/documental1.jpg",
            "date": "2026-07-15",
            "featured": true,
            "order": 1
        },
        {
            "slug": "documental-2",
            "title": "Documentales",
            "category": "documentales",
            "description": "",
            "image": "images/documental2.jpg",
            "date": "2026-07-14",
            "featured": false,
            "order": 2
        },
        {
            "slug": "documental-3",
            "title": "Documentales",
            "category": "documentales",
            "description": "",
            "image": "images/documental3.jpg",
            "date": "2026-07-13",
            "featured": false,
            "order": 3
        },
        {
            "slug": "documental-4",
            "title": "Documentales",
            "category": "documentales",
            "description": "",
            "image": "images/documental4.jpg",
            "date": "2026-07-12",
            "featured": false,
            "order": 4
        },
        {
            "slug": "documental-5",
            "title": "Documentales",
            "category": "documentales",
            "description": "",
            "image": "images/documental5.jpg",
            "date": "2026-07-11",
            "featured": false,
            "order": 5
        },
        {
            "slug": "urbana-1",
            "title": "Urbanas",
            "category": "urbanas",
            "description": "",
            "image": "images/urbana1.jpg",
            "date": "2026-06-20",
            "featured": true,
            "order": 6
        },
        {
            "slug": "urbana-2",
            "title": "Urbanas",
            "category": "urbanas",
            "description": "",
            "image": "images/urbana2.jpg",
            "date": "2026-06-19",
            "featured": false,
            "order": 7
        },
        {
            "slug": "urbana-3",
            "title": "Urbanas",
            "category": "urbanas",
            "description": "",
            "image": "images/urbana3.jpg",
            "date": "2026-06-18",
            "featured": false,
            "order": 8
        },
        {
            "slug": "urbana-4",
            "title": "Urbanas",
            "category": "urbanas",
            "description": "",
            "image": "images/urbana4.jpg",
            "date": "2026-06-17",
            "featured": false,
            "order": 9
        },
        {
            "slug": "urbana-5",
            "title": "Urbanas",
            "category": "urbanas",
            "description": "",
            "image": "images/urbana5.jpg",
            "date": "2026-06-16",
            "featured": false,
            "order": 10
        },
        {
            "slug": "graduacion-1",
            "title": "Graduación",
            "category": "graduacion",
            "description": "",
            "image": "images/graduacion1.jpg",
            "date": "2026-05-10",
            "featured": true,
            "order": 11
        },
        {
            "slug": "graduacion-2",
            "title": "Graduación",
            "category": "graduacion",
            "description": "",
            "image": "images/graduacion2.jpg",
            "date": "2026-05-09",
            "featured": false,
            "order": 12
        },
        {
            "slug": "graduacion-3",
            "title": "Graduación",
            "category": "graduacion",
            "description": "",
            "image": "images/graduacion3.jpg",
            "date": "2026-05-08",
            "featured": false,
            "order": 13
        },
        {
            "slug": "graduacion-4",
            "title": "Graduación",
            "category": "graduacion",
            "description": "",
            "image": "images/graduacion4.jpg",
            "date": "2026-05-07",
            "featured": false,
            "order": 14
        },
        {
            "slug": "graduacion-5",
            "title": "Graduación",
            "category": "graduacion",
            "description": "",
            "image": "images/graduacion5.jpg",
            "date": "2026-05-06",
            "featured": false,
            "order": 15
        },
        {
            "slug": "deporte-1",
            "title": "Deporte",
            "category": "deporte",
            "description": "",
            "image": "images/deporte1.jpg",
            "date": "2026-04-22",
            "featured": true,
            "order": 16
        },
        {
            "slug": "deporte-2",
            "title": "Deporte",
            "category": "deporte",
            "description": "",
            "image": "images/deporte2.jpg",
            "date": "2026-04-21",
            "featured": false,
            "order": 17
        },
        {
            "slug": "deporte-3",
            "title": "Deporte",
            "category": "deporte",
            "description": "",
            "image": "images/deporte3.jpg",
            "date": "2026-04-20",
            "featured": false,
            "order": 18
        },
        {
            "slug": "deporte-4",
            "title": "Deporte",
            "category": "deporte",
            "description": "",
            "image": "images/deporte4.jpg",
            "date": "2026-04-19",
            "featured": false,
            "order": 19
        },
        {
            "slug": "deporte-5",
            "title": "Deporte",
            "category": "deporte",
            "description": "",
            "image": "images/deporte5.jpg",
            "date": "2026-04-18",
            "featured": false,
            "order": 20
        },
        {
            "slug": "formacion-1",
            "title": "Formación",
            "category": "formacion",
            "description": "",
            "image": "images/formacion1.jpg",
            "date": "2026-03-15",
            "featured": true,
            "order": 21
        },
        {
            "slug": "formacion-2",
            "title": "Formación",
            "category": "formacion",
            "description": "",
            "image": "images/formacion2.jpg",
            "date": "2026-03-14",
            "featured": false,
            "order": 22
        },
        {
            "slug": "formacion-3",
            "title": "Formación",
            "category": "formacion",
            "description": "",
            "image": "images/formacion3.jpg",
            "date": "2026-03-13",
            "featured": false,
            "order": 23
        },
        {
            "slug": "formacion-4",
            "title": "Formación",
            "category": "formacion",
            "description": "",
            "image": "images/formacion4.jpg",
            "date": "2026-03-12",
            "featured": false,
            "order": 24
        },
        {
            "slug": "formacion-5",
            "title": "Formación",
            "category": "formacion",
            "description": "",
            "image": "images/formacion5.jpg",
            "date": "2026-03-11",
            "featured": false,
            "order": 25
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
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

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
                    </div>
                </div>
                ${item.featured ? '<div class="portfolio-badge">Destacado</div>' : ''}
            </div>
        `).join('');

        portfolioGrid.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                if (!isNaN(index) && index < filteredItems.length) {
                    openLightbox(index);
                }
            });
        });
    }

    // ==========================================
    // LIGHTBOX
    // ==========================================
    function openLightbox(index) {
        if (!filteredItems || filteredItems.length === 0) return;
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
            imageContainer.innerHTML = `<img src="${item.image}" alt="${item.title}" onerror="this.parentElement.innerHTML='<svg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><path d=\\'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\'/><circle cx=\\'12\\' cy=\\'13\\' r=\\'4\\'/></svg>'">`;
        }

        lightboxTitle.textContent = item.title;
        lightboxDesc.textContent = '';
        lightboxCounter.textContent = `${lightboxIndex + 1} / ${filteredItems.length}`;
    }

    function navigateLightbox(direction) {
        if (!filteredItems || filteredItems.length === 0) return;
        if (direction === 'next') {
            lightboxIndex = (lightboxIndex + 1) % filteredItems.length;
        } else {
            lightboxIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
        }
        updateLightbox();
    }

    function initLightbox() {
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        }
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateLightbox('prev');
            });
        }
        if (lightboxNext) {
            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateLightbox('next');
            });
        }

        document.addEventListener('keydown', (e) => {
            if (!lightbox || !lightbox.classList.contains('active')) return;
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

        currentItems = await loadExternalData();
        currentItems.sort((a, b) => (a.order || 999) - (b.order || 999));

        const categories = getCategories(currentItems);
        renderFilters(categories);
        renderPortfolio();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
