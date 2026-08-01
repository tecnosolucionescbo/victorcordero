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
            slug: "retrato-artistico",
            title: "Retrato Artístico",
            category: "retratos",
            description: "Sesión de retrato en estudio con iluminación natural y fondos neutros.",
            image: "images/portfolio/retrato-artistico.jpg",
            date: "2026-07-15",
            featured: true,
            order: 1
        },
        {
            slug: "boda-playa",
            title: "Boda en la Playa",
            category: "bodas",
            description: "Ceremonia íntima al atardecer en las costas del Caribe. Un momento mágico.",
            image: "images/portfolio/boda-playa.jpg",
            date: "2026-06-20",
            featured: true,
            order: 2
        },
        {
            slug: "evento-corporativo",
            title: "Evento Corporativo",
            category: "eventos",
            description: "Cobertura fotográfica de la conferencia anual de tecnología.",
            image: "images/portfolio/evento-corporativo.jpg",
            date: "2026-05-10",
            featured: false,
            order: 3
        },
        {
            slug: "producto-lifestyle",
            title: "Producto Lifestyle",
            category: "producto",
            description: "Fotografía de producto con estilo de vida para marca de skincare.",
            image: "images/portfolio/producto-lifestyle.jpg",
            date: "2026-04-22",
            featured: true,
            order: 4
        },
        {
            slug: "moda-urbana",
            title: "Moda Urbana",
            category: "moda",
            description: "Editorial de moda urbana en las calles de la ciudad.",
            image: "images/portfolio/moda-urbana.jpg",
            date: "2026-03-15",
            featured: false,
            order: 5
        },
        {
            slug: "paisaje-nocturno",
            title: "Paisaje Nocturno",
            category: "paisajes",
            description: "Fotografía de larga exposición capturando las luces de la ciudad.",
            image: "images/portfolio/paisaje-nocturno.jpg",
            date: "2026-02-08",
            featured: false,
            order: 6
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
                ${cat}
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
            imageContainer.innerHTML = `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<svg width=\'80\' height=\'80\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1\'><path d=\'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\'/><circle cx=\'12\' cy=\'13\' r=\'4\'/></svg>'">`;
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
