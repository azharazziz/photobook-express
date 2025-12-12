# 🎨 Customization Quick Reference

Quick guide to customize your Wedding Photobook Express website.

## 🎭 Color Customization

### Edit in `public/css/styles.css`

```css
:root {
    --primary-color: #0f3d2e;      /* Main green - change this */
    --primary-dark: #0a2820;       /* Darker green */
    --primary-light: #1a5a42;      /* Lighter green */
    --accent-color: #ffffff;       /* White background */
    --accent-light: #f5f9f8;       /* Light green-white */
    --text-dark: #1a1a1a;          /* Dark text */
    --text-light: #666666;         /* Gray text */
}
```

### Popular Color Combinations

**Rose Gold & Cream**
```css
--primary-color: #a8697a;    /* Muted rose */
--primary-light: #c4a9b8;    /* Lighter rose */
--accent-light: #faf8f6;     /* Warm cream */
```

**Navy & Gold**
```css
--primary-color: #1a3a52;    /* Deep navy */
--primary-light: #4a6fa5;    /* Medium navy */
--accent-light: #fef9f0;     /* Gold-tinted white */
```

**Blush & Gray**
```css
--primary-color: #d4a5a5;    /* Soft blush */
--primary-light: #e8c4c4;    /* Light blush */
--accent-light: #faf9f8;     /* Soft white */
```

**Forest & Charcoal**
```css
--primary-color: #2d5a4d;    /* Forest green */
--primary-light: #4a8f7f;    /* Teal-green */
--accent-light: #f0f4f3;     /* Cool white */
```

---

## 🔤 Typography Customization

### Change Font Family

In `public/css/styles.css`:

**Serif Options**
```css
--font-serif: 'Playfair Display', serif;           /* Modern elegant */
--font-serif: 'Cormorant', serif;                  /* Sophisticated */
--font-serif: 'Lora', serif;                       /* Warm & friendly */
--font-serif: 'Prata', serif;                      /* Bold & elegant */
--font-serif: 'Libre Baskerville', serif;          /* Classic */
```

**Sans-Serif Options**
```css
--font-sans: 'Inter', sans-serif;                  /* Modern */
--font-sans: 'Poppins', sans-serif;                /* Friendly */
--font-sans: 'Montserrat', sans-serif;             /* Clean */
--font-sans: 'Source Sans Pro', sans-serif;        /* Professional */
```

To use Google Fonts, add to `views/index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Change Font Sizes

```css
/* Hero Title */
.hero-title {
    font-size: clamp(2rem, 8vw, 5rem);  /* Adjust min, preferred, max */
}

/* Section Title */
.section-title {
    font-size: clamp(1.5rem, 4vw, 3.5rem);
}

/* Subtitle */
.hero-subtitle {
    font-size: 1.25rem;  /* Direct value */
}
```

### Change Font Weights

```css
h1, h2, h3 {
    font-weight: 500;  /* Lighter: 400, 500 | Bolder: 600, 700 */
}

.btn {
    font-weight: 700;  /* Button text weight */
}
```

---

## 🌈 Shadow & Depth Customization

### Update Shadow Variables

```css
:root {
    --shadow-sm: 0 2px 8px rgba(15, 61, 46, 0.1);      /* Subtle */
    --shadow-md: 0 8px 24px rgba(15, 61, 46, 0.12);    /* Medium */
    --shadow-lg: 0 16px 48px rgba(15, 61, 46, 0.15);   /* Strong */
}
```

### Shadow Customization

**Softer Shadows**
```css
--shadow-md: 0 4px 12px rgba(15, 61, 46, 0.08);
```

**Stronger Shadows**
```css
--shadow-lg: 0 20px 60px rgba(15, 61, 46, 0.25);
```

**Color-Adjusted Shadows** (for different colors)
```css
--shadow-md: 0 8px 24px rgba(210, 165, 165, 0.12);  /* Rose Gold */
--shadow-md: 0 8px 24px rgba(26, 58, 82, 0.12);     /* Navy */
```

---

## ⏱️ Animation Customization

### Leaf Ornament Speed

In `public/css/styles.css`:

```css
.leaf-1 {
    animation: fadeInLeaf 0.8s ease forwards, floatLeaf1 6s ease-in-out infinite 0.8s;
                                                       /* ↑ Change duration here (6s) */
}

.leaf-2 {
    animation: floatLeaf2 7s ease-in-out infinite 0.8s;
                          /* ↑ Change duration here (7s) */
}
```

**Faster animations** (more dynamic):
```css
.leaf-1 { animation: floatLeaf1 4s ease-in-out infinite 0.8s; }
```

**Slower animations** (more subtle):
```css
.leaf-1 { animation: floatLeaf1 10s ease-in-out infinite 0.8s; }
```

### Gallery Fade-In Speed

```css
.photo-card {
    animation: slideUpIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                         /* ↑ Change duration (0.6s) */
}
```

### Button Hover Animation Speed

```css
.btn {
    transition: var(--transition-smooth);  /* Defined as 0.3s */
}

/* Or change in root: */
:root {
    --transition-smooth: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);  /* 0.5s instead of 0.3s */
}
```

---

## 🌿 Hero Section Customization

### Change Hero Title

In `views/index.html`:

```html
<h1 class="hero-title">
    <span class="title-word">Your</span>
    <span class="title-word">New</span>
    <span class="title-word">Title</span>
</h1>
```

### Change Hero Subtitle

```html
<p class="hero-subtitle">Your custom subtitle text here</p>
```

### Change Button Text & Links

```html
<a href="#gallery" class="btn btn-primary">Custom Text</a>
<a href="#custom-id" class="btn btn-secondary">Another Button</a>
```

### Hide Decorative Cards

Add to `public/css/styles.css`:
```css
.hero-decorative-card {
    display: none;  /* Hide glass cards */
}
```

### Remove Particle Animation

In `views/index.html`, remove:
```html
<canvas id="particlesCanvas" class="particles-canvas"></canvas>
```

And comment out in `public/js/app.js`:
```javascript
// initParticles();  // <- Comment this out
```

---

## 📐 Spacing & Layout Customization

### Gallery Gap (Space Between Photos)

In `public/css/styles.css`:

```css
.gallery-grid {
    gap: 2rem;  /* Change to 1rem, 1.5rem, 2.5rem, 3rem */
}
```

### Gallery Padding

```css
.gallery-section {
    padding: 6rem 2rem;  /* top/bottom  left/right */
}

/* Mobile padding */
@media (max-width: 768px) {
    .gallery-section {
        padding: 4rem 1rem;
    }
}
```

### Hero Section Height

```css
.hero {
    min-height: 100vh;  /* Full viewport height */
    /* Change to: 80vh, 90vh, 120vh */
}
```

### Container Max Width

```css
.gallery-container {
    max-width: 1400px;  /* Change to 1200px, 1600px */
}
```

---

## 🖼️ Gallery Grid Customization

### Change Number of Columns

```css
.gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                                              /* ↑ Adjust minmax size */
}

/* For fixed columns: */
.gallery-grid {
    grid-template-columns: repeat(3, 1fr);  /* Always 3 columns */
}
```

### Change Photo Aspect Ratio

```css
.photo-card {
    aspect-ratio: 3/4;  /* Change to: 1/1 (square), 4/3 (landscape), 16/9 (wide) */
}
```

### Change Card Border Radius

```css
.photo-card {
    border-radius: 16px;  /* Change to: 8px (less rounded), 24px (more rounded), 50% (circles) */
}
```

---

## 🔗 Navigation Customization

### Change Navigation Items

In `views/index.html`:

```html
<ul class="nav-links">
    <li><a href="#gallery" class="nav-link">Gallery</a></li>
    <li><a href="#custom" class="nav-link">New Item</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

### Hide Logo

Add to `public/css/styles.css`:
```css
.logo {
    display: none;
}
```

### Change Logo Text

In `views/index.html`:
```html
<div class="logo">
    <svg class="logo-leaf">...</svg>
    <span>Your Site Name</span>  <!-- Change this -->
</div>
```

---

## 📱 Responsive Breakpoint Customization

Current breakpoints in `public/css/styles.css`:

```css
@media (max-width: 768px) { /* Tablet & below */ }
@media (max-width: 480px) { /* Mobile */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1400px) { /* Large screens */ }
```

Change to your preferred breakpoints:

```css
@media (max-width: 640px) { /* Adjust tablet breakpoint */ }
@media (max-width: 360px) { /* Add ultra-mobile breakpoint */ }
```

---

## 🎯 API & Performance Customization

### Change Photos Per Page

In `server.js`:

```javascript
const perPage = 12;  /* Change to: 9, 15, 18, 24 */
```

### Change Scroll Loading Threshold

In `public/js/app.js`:

```javascript
const observer = new IntersectionObserver((entries) => {
    // ...
}, {
    rootMargin: '500px'  /* Change to: '300px', '1000px' */
});
```

### Change Particle Count

In `public/js/app.js`:

```javascript
const particleCount = Math.min(50, window.innerWidth / 20);
                            /* ↑ Change 50 to higher (more) or lower (fewer) */
```

---

## 🎬 Complete Custom Theme Example

### Rose & Cream Theme

1. **Update colors in `public/css/styles.css`**:
```css
:root {
    --primary-color: #a8697a;
    --primary-light: #c4a9b8;
    --accent-light: #faf8f6;
    --text-dark: #2d2420;
    --text-light: #7a7270;
}
```

2. **Update fonts in `public/css/styles.css`**:
```css
:root {
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Inter', sans-serif;
}
```

3. **Add Google Fonts to `views/index.html`**:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

4. **Adjust shadows** (optional):
```css
--shadow-md: 0 8px 24px rgba(168, 105, 122, 0.12);
```

Done! Your site is now rose & cream themed.

---

## 💾 Backup Before Changes

Always backup your original files:
```bash
copy public\css\styles.css public\css\styles.css.backup
copy views\index.html views\index.html.backup
copy public\js\app.js public\js\app.js.backup
```

---

## 🧪 Testing Changes

After making changes:

1. **Save the file**
2. **Hard refresh browser** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check console** for any errors (F12)
4. **Test on mobile** (responsive design mode)

---

Happy customizing! 🎨

For more details, check FEATURES.md or README.md
