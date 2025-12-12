/* ===== Global Variables & Config ===== */
const CONFIG = {
    apiUrl: '/api/photos',
    photosPerPage: 12,
    lightboxEnabled: true,
    animationsEnabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

let currentPage = 1;
let isLoading = false;
let hasMore = true;
let allPhotos = [];
let lightboxCurrentIndex = 0;

/* ===== Utility: Shuffle array (Fisher-Yates) ===== */
function shuffleArray(arr) {
    if (!Array.isArray(arr)) return arr;
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/* ===== DOM Elements ===== */
const elements = {
    galleryGrid: document.getElementById('galleryGrid'),
    loadingIndicator: document.getElementById('loadingIndicator'),
    noImagesMessage: document.getElementById('noImagesMessage'),
    endOfGallery: document.getElementById('endOfGallery'),
    loadMoreContainer: document.getElementById('loadMoreContainer'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    loadMoreLoadingSpinner: document.getElementById('loadMoreLoadingSpinner'),
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    lightboxCounter: document.getElementById('lightboxCounter'),
    lightboxClose: document.querySelector('.lightbox-close'),
    lightboxPrev: document.querySelector('.lightbox-prev'),
    lightboxNext: document.querySelector('.lightbox-next'),
    lightboxOverlay: document.querySelector('.lightbox-overlay'),
    lightboxLikeBtn: document.getElementById('lightboxLikeBtn'),
    lightboxLikeCount: document.querySelector('.lightbox-like-count')
};

/* ===== Particle Animation Canvas ===== */
function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return; // no particles canvas when hero removed
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = Math.min(50, window.innerWidth / 20);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2 + 1;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.opacity += (Math.random() - 0.5) * 0.02;
            this.opacity = Math.max(0, Math.min(1, this.opacity));

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = `rgba(15, 61, 46, ${this.opacity * 0.15})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let particle of particles) {
            particle.update();
            particle.draw();
        }

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/* ===== Fetch Photos from API ===== */
async function fetchPhotos(page = 1) {
    if (isLoading || !hasMore) return;

    isLoading = true;
    
    // Show loading indicator on first page, keep it visible on subsequent pages
    if (page === 1) {
        elements.loadingIndicator.style.display = 'flex';
    }

    try {
        const response = await fetch(`${CONFIG.apiUrl}?page=${page}`);
        const data = await response.json();

        // Shuffle the returned batch so images display in random order
        if (Array.isArray(data.photos)) {
            shuffleArray(data.photos);
        }

        if (!data.success) {
            throw new Error(data.error);
        }

        if (page === 1) {
            allPhotos = data.photos;
            if (data.photos.length === 0) {
                elements.noImagesMessage.style.display = 'block';
                elements.loadingIndicator.style.display = 'none';
                isLoading = false;
                return;
            }
        } else {
            allPhotos = allPhotos.concat(data.photos);
        }

        hasMore = data.hasMore;
        renderPhotos(data.photos, page === 1);

        // Show/hide load more button and spinner based on whether there are more photos
        if (hasMore) {
            // Hide spinner and show button after loading is complete
            elements.loadMoreLoadingSpinner.style.display = 'none';
            elements.loadingIndicator.style.display = 'none';
            setTimeout(() => {
                elements.loadMoreContainer.style.display = 'flex';
            }, 300);
            elements.endOfGallery.style.display = 'none';
        } else {
            elements.loadMoreContainer.style.display = 'none';
            elements.loadMoreLoadingSpinner.style.display = 'none';
            elements.loadingIndicator.style.display = 'none';
            setTimeout(() => {
                elements.endOfGallery.style.display = 'block';
            }, 300);
        }

        // Load like counts for all photos
        loadPhotoLikes();

        isLoading = false;
    } catch (error) {
        console.error('Error fetching photos:', error);
        elements.loadingIndicator.style.display = 'none';
    } finally {
        isLoading = false;
    }
}

/* ===== Render Photos to Gallery ===== */
function renderPhotos(photos, clear = false) {
    if (clear) {
        elements.galleryGrid.innerHTML = '';
    }

    // Array of random aspect ratios for masonry variety
    const aspectRatios = ['square', 'tall', 'portrait', 'extra-tall', 'landscape', 'wide'];

    const totalPhotosInGrid = elements.galleryGrid.children.length;

    photos.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.style.opacity = '0';

        // Randomly assign aspect ratio for masonry effect
        const randomAspect = aspectRatios[Math.floor(Math.random() * aspectRatios.length)];
        photoCard.setAttribute('data-aspect', randomAspect);

        const img = document.createElement('img');
        img.className = 'photo-image';
        img.src = photo.url;
        img.alt = photo.alt;
        img.loading = 'lazy';

        // Blur-up effect - create a placeholder
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, #e8f4f0 25%, transparent 25%, transparent 75%, #e8f4f0 75%, #e8f4f0),
                        linear-gradient(45deg, #e8f4f0 25%, transparent 25%, transparent 75%, #e8f4f0 75%, #e8f4f0);
            background-size: 40px 40px;
            background-position: 0 0, 20px 20px;
            background-color: #d9ebe5;
            z-index: 1;
            filter: blur(8px);
        `;

        photoCard.appendChild(placeholder);
        photoCard.appendChild(img);

        // Fade in animation on load and compute grid row span for masonry
        img.onload = () => {
            placeholder.style.display = 'none';
            photoCard.style.opacity = '1';
            photoCard.style.transition = 'opacity 0.6s ease';

            // compute and set grid row span so masonry flows without gaps
            try {
                setGridItem(photoCard);
            } catch (err) {
                // graceful fallback - don't block rendering
                console.warn('setGridItem error', err);
            }
        };

        img.onerror = () => {
            placeholder.textContent = '⚠️ Image not found';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = '#666';
        };

        photoCard.addEventListener('click', () => {
            if (CONFIG.lightboxEnabled) {
                lightboxCurrentIndex = allPhotos.findIndex(p => p.id === photo.id);
                openLightbox(lightboxCurrentIndex);
            }
        });

        // Create like button container
        const likeContainer = document.createElement('div');
        likeContainer.className = 'photo-like-container';
        
        const likeBtn = document.createElement('button');
        likeBtn.className = 'photo-like-btn';
        likeBtn.setAttribute('data-photo-id', photo.id);
        likeBtn.innerHTML = `
            <svg class="like-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="like-count">0</span>
        `;
        
        // Prevent lightbox from opening when clicking like button
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            likePhoto(photo.id, likeBtn);
        });
        
        likeContainer.appendChild(likeBtn);
        photoCard.appendChild(likeContainer);

        elements.galleryGrid.appendChild(photoCard);

        // Calculate animation delay based on position in current batch
        const positionInBatch = index;
        // Cap stagger at 1.1s for first 12, then spread across remaining
        const staggerDelay = Math.min(positionInBatch * 0.08, 1.1);

        // Stagger animation with smooth timing
        setTimeout(() => {
            photoCard.style.opacity = '0';
            photoCard.style.animation = `slideUpIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards ${staggerDelay}s`;
        }, 10);
    });
}

/* ===== Load More Button Setup ===== */
function setupLoadMore() {
    if (elements.loadMoreBtn) {
        elements.loadMoreBtn.addEventListener('click', () => {
            if (!isLoading && hasMore) {
                // Hide the button and show loading spinner
                elements.loadMoreContainer.style.display = 'none';
                elements.loadMoreLoadingSpinner.style.display = 'flex';
                currentPage++;
                fetchPhotos(currentPage);
            }
        });
    }
}

/* ===== Lightbox Functions ===== */
function openLightbox(index) {
    lightboxCurrentIndex = index;
    updateLightboxImage();
    elements.lightbox.style.display = 'flex';
    elements.lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightbox.style.display = 'none';
    elements.lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    if (allPhotos.length === 0) return;

    const photo = allPhotos[lightboxCurrentIndex];
    elements.lightboxImage.src = photo.url;
    elements.lightboxImage.alt = photo.alt;
    elements.lightboxCaption.textContent = photo.title;
    elements.lightboxCounter.textContent = `${lightboxCurrentIndex + 1} of ${allPhotos.length}`;
    
    // Update like button with current photo ID and load like count
    const lightboxLikeBtn = document.getElementById('lightboxLikeBtn');
    lightboxLikeBtn.setAttribute('data-photo-id', photo.id);
    updateLightboxLikeCount(photo.id);
}

function nextImage() {
    lightboxCurrentIndex = (lightboxCurrentIndex + 1) % allPhotos.length;
    updateLightboxImage();
}

function prevImage() {
    lightboxCurrentIndex = (lightboxCurrentIndex - 1 + allPhotos.length) % allPhotos.length;
    updateLightboxImage();
}

/* ===== Like Function ===== */
async function likePhoto(photoId, likeBtn) {
    try {
        const response = await fetch(`/api/photos/${photoId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) throw new Error('Failed to like photo');
        
        const data = await response.json();
        
        // Update like count display
        const likeCount = likeBtn.querySelector('.like-count');
        likeCount.textContent = data.likes;
        
        // Add animation class
        likeBtn.classList.add('liked');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            likeBtn.classList.remove('liked');
        }, 600);
        
        console.log('Photo liked successfully');
    } catch (error) {
        console.error('Error liking photo:', error);
    }
}

async function likePhotoLightbox(photoId) {
    try {
        const response = await fetch(`/api/photos/${photoId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) throw new Error('Failed to like photo');
        
        const data = await response.json();
        
        // Update lightbox like count display
        if (elements.lightboxLikeCount) {
            elements.lightboxLikeCount.textContent = data.likes;
        }
        
        // Add animation class
        elements.lightboxLikeBtn.classList.add('liked');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            elements.lightboxLikeBtn.classList.remove('liked');
        }, 600);
        
        console.log('Photo liked successfully from lightbox');
    } catch (error) {
        console.error('Error liking photo from lightbox:', error);
    }
}

async function loadPhotoLikes() {
    try {
        const response = await fetch('/api/photos/likes/all');
        if (!response.ok) throw new Error('Failed to load likes');
        
        const data = await response.json();
        const likesMap = data.likes;
        
        // Update all like buttons with counts
        document.querySelectorAll('.photo-like-btn').forEach(btn => {
            const photoId = parseInt(btn.getAttribute('data-photo-id'));
            const count = likesMap[photoId] || 0;
            const likeCount = btn.querySelector('.like-count');
            likeCount.textContent = count;
        });
        
        // Also update lightbox like count if visible
        if (elements.lightboxLikeCount && elements.lightboxLikeBtn) {
            const photoId = parseInt(elements.lightboxLikeBtn.getAttribute('data-photo-id'));
            const count = likesMap[photoId] || 0;
            elements.lightboxLikeCount.textContent = count;
        }
    } catch (error) {
        console.error('Error loading photo likes:', error);
    }
}

async function updateLightboxLikeCount(photoId) {
    try {
        const response = await fetch(`/api/photos/${photoId}/likes`);
        if (!response.ok) throw new Error('Failed to load like count');
        
        const data = await response.json();
        if (elements.lightboxLikeCount) {
            elements.lightboxLikeCount.textContent = data.likes;
        }
    } catch (error) {
        console.error('Error loading lightbox like count:', error);
    }
}

/* ===== Lightbox Event Listeners ===== */
if (elements.lightboxClose) {
    elements.lightboxClose.addEventListener('click', closeLightbox);
}

if (elements.lightboxPrev) {
    elements.lightboxPrev.addEventListener('click', prevImage);
}

if (elements.lightboxNext) {
    elements.lightboxNext.addEventListener('click', nextImage);
}

if (elements.lightboxOverlay) {
    elements.lightboxOverlay.addEventListener('click', closeLightbox);
}

// Lightbox like button listener
if (elements.lightboxLikeBtn) {
    elements.lightboxLikeBtn.addEventListener('click', () => {
        const photoId = parseInt(elements.lightboxLikeBtn.getAttribute('data-photo-id'));
        likePhotoLightbox(photoId);
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (elements.lightbox.style.display !== 'flex') return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

/* ===== Smooth Scroll for Nav Links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== Navbar Shadow on Scroll ===== */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

/* ===== Performance: Blur-up Images ===== */

/* ===== Masonry helpers ===== */
function setGridItem(item) {
    const gallery = elements.galleryGrid;
    if (!gallery) return;
    const rowHeightStr = window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows');
    const rowGapStr = window.getComputedStyle(gallery).getPropertyValue('row-gap');
    const rowHeight = parseFloat(rowHeightStr);
    const rowGap = parseFloat(rowGapStr);
    const img = item.querySelector('.photo-image');
    if (!img) return;
    const imgHeight = img.getBoundingClientRect().height;
    // compute span based on base row height + gap
    const span = Math.max(1, Math.ceil((imgHeight + rowGap) / (rowHeight + rowGap)));
    item.style.gridRowEnd = `span ${span}`;
}

function resizeAllGridItems() {
    const items = elements.galleryGrid?.children || [];
    for (const item of items) {
        // only set span for loaded images
        const img = item.querySelector && item.querySelector('.photo-image');
        if (img && (img.complete || img.naturalHeight)) {
            setGridItem(item);
        }
    }
}

// debounce helper
function debounce(fn, wait) {
    let t;
    return function (...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

/* ===== Hero Parallax ===== */
/* ===== Scroll reveal (intersection observer) ===== */
function setupScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window) || !revealEls.length) {
        // fallback: make them visible
        revealEls.forEach(el => el.classList.add('in-view'));
        return;
    }

    // Use a very permissive threshold so elements already in view are caught
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0 });

    revealEls.forEach(el => observer.observe(el));

    // Safety: reveal elements already in the viewport immediately (some browsers may delay IO callbacks)
    revealEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('in-view');
            try { observer.unobserve(el); } catch (e) {}
        }
    });
}

/* ===== Initialize Everything ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Init particles
    initParticles();

    // Init gallery
    fetchPhotos(1);
    setupLoadMore();

    // Recalculate masonry spans after images finish loading and on resize
    // Small timeout ensures first batch of images has started loading
    setTimeout(() => resizeAllGridItems(), 300);
    window.addEventListener('resize', debounce(() => {
        resizeAllGridItems();
    }, 150));
    // Init scroll reveal animations
    setupScrollReveal();
});

/* ===== Responsive Particle Count ===== */
window.addEventListener('resize', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY === 0) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

/* ===== Error Handling ===== */
window.addEventListener('error', (e) => {
    console.error('Global error:', e);
});

/* ===== Performance Monitoring ===== */
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}

/* ===== Image Lazy Loading Polyfill ===== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('🎉 Wedding Photobook Express initialized!');
console.log('📸 Tip: Add images to the images/ folder and refresh the page');
