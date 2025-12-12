# 🎨 Features & Design Documentation

## Visual Design Features

### Hero Section

#### Animated Elements
1. **Floating Leaf Ornaments**
   - 5 SVG leaf illustrations positioned around the hero
   - Smooth floating animation (6-8 second duration)
   - Subtle rotation (±5 degrees)
   - Fade-in effect on page load
   - Opacity: 0.4 for elegant, non-intrusive appearance

2. **Particle Background**
   - Dynamic particle animation canvas
   - ~50 particles moving smoothly
   - Green color with low opacity for subtlety
   - Responsive to window resize

3. **Gradient Background**
   - Soft green-white gradient
   - Radial gradient overlay for depth
   - Responsive to light/dark mode preferences

#### Typography
- **Hero Title**: Serif font (Georgia, Garamond) in deep green
- **Subtitle**: Sans-serif in readable gray
- **Sequential Animation**: Each title word fades in with stagger
- **Responsive Sizing**: Scales from 1.75rem (mobile) to 4.5rem (desktop)

#### Interactive Elements
- **CTA Buttons**: Primary (green gradient) and Secondary (white with border)
- **Ripple Effect**: Click animation with spreading ripple
- **Hover Animation**: Lift effect with shadow increase
- **Scroll Indicator**: Bouncing arrow with text
- **Decorative Cards**: Glass-morphism cards with shine animation

### Color Palette

```
Primary Green:    #0f3d2e  (Deep leaf green)
Primary Dark:     #0a2820  (Darker accent)
Primary Light:    #1a5a42  (Lighter accent)
Accent White:     #ffffff  (Bright white)
Light BG:         #f5f9f8  (Soft white-green)
Text Dark:        #1a1a1a  (Near black)
Text Light:       #666666  (Medium gray)
```

### Shadows & Depth

- **Shadow-SM**: 0 2px 8px rgba(15, 61, 46, 0.1)
- **Shadow-MD**: 0 8px 24px rgba(15, 61, 46, 0.12)
- **Shadow-LG**: 0 16px 48px rgba(15, 61, 46, 0.15)

Creates elegant depth without heaviness

---

## Gallery Features

### Masonry Layout

#### Responsive Grid System
```
Mobile (<480px):    1 column
Tablet (480-768px): 2-3 columns
Desktop (768px+):   3-4 columns
Large (1400px+):    Max-width container
```

#### Photo Card Features
- **Aspect Ratio**: 3:4 (portrait orientation)
- **Border Radius**: 16px for soft, modern look
- **Shadows**: Variable shadow on hover
- **Rounded Corners**: 16px border radius
- **Spacing**: 1.5-2rem gap between cards
- **Loading Animation**: Blur-up placeholder with gradient

### Lazy Loading

#### Blur-Up Effect
- Initial pixelated/blurred gradient placeholder
- Smooth transition when image loads
- Simulates high-quality progressive loading
- Reduces cumulative layout shift (CLS)

#### Skeleton Loading
- Gray animated skeleton during load
- Shimmer animation for visual interest
- Same aspect ratio as final image
- Smooth fade to real image

### Image Interactions

#### Hover Effects
- **Zoom**: Image scales to 1.08x
- **Overlay**: Subtle green overlay fades in
- **Duration**: 0.5s smooth transition
- **Shadow**: Increases slightly on hover

#### Lightbox
- **Trigger**: Click on any photo
- **Animation**: Zoom-in entrance effect
- **Navigation**: Previous/Next buttons
- **Counter**: Shows "X of Y" images
- **Caption**: Displays image title
- **Close**: Escape key, X button, or click overlay
- **Keyboard**: Arrow keys for navigation

### Performance Optimization

#### Image Loading
- **Lazy Loading**: Images load as they approach viewport
- **Intersection Observer**: 500px threshold for load prediction
- **Progressive Enhancement**: Works without JavaScript
- **Blur-up**: Provides visual feedback during load

#### Animation Performance
- **GPU Acceleration**: Uses transform/opacity for smooth 60fps
- **Stagger Animation**: Prevents simultaneous animations
- **Reduced Motion**: Respects user preferences
- **Hardware Acceleration**: CSS transitions with transform

---

## Infinite Scroll

### How It Works
1. User scrolls down the page
2. When loading indicator approaches viewport (500px threshold)
3. Next batch of photos automatically loads
4. New photos animate in with stagger effect
5. Seamless infinite experience

### Features
- **Auto-loading**: No "Load More" button needed
- **Seamless Integration**: Feels native and organic
- **Pagination**: API returns metadata about pages
- **End Detection**: Shows message when all photos loaded
- **No Duplicate Loading**: Prevents multiple simultaneous requests

### API Response Structure
```json
{
    "success": true,
    "photos": [...],
    "page": 1,
    "perPage": 12,
    "totalPhotos": 48,
    "totalPages": 4,
    "hasMore": true
}
```

---

## Animation Details

### Keyframe Animations

#### fadeInLeaf
- Duration: 0.8s
- Effect: Leaf ornaments fade in and scale from 0.8 to 1
- Timing: 0.2s-0.6s stagger

#### floatLeaf1 & floatLeaf2
- Duration: 6-8s (varies by leaf)
- Effect: Smooth vertical floating (-30 to -40px)
- Rotation: ±5 degrees
- Easing: ease-in-out for natural motion

#### slideUpIn
- Duration: 0.6s
- Effect: Photos fade in while moving up 40px
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Stagger: 0s-1.1s by photo position

#### zoomIn
- Duration: 0.3s
- Effect: Lightbox image scales from 0.9 to 1
- Easing: ease

#### bounceArrow
- Duration: 2s
- Effect: Scroll indicator bounces 8px down
- Easing: ease-in-out

### Transition Properties

Standard transitions use:
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

This easing curve provides:
- Quick start (responsive feel)
- Smooth acceleration
- Natural deceleration
- Professional polish

---

## Typography

### Font Stack

**Serif (Headers)**
```
'Georgia', 'Garamond', serif
```
- Elegant, timeless appearance
- High readability at large sizes
- Perfect for wedding aesthetic

**Sans-Serif (Body)**
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif
```
- System fonts for optimal performance
- Consistent across platforms
- Modern, clean appearance

### Font Sizes (Responsive)

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero Title | 1.75rem | 3rem | 4.5rem |
| Section Title | 1.5rem | 2rem | 3.5rem |
| Subtitle | 1rem | 1.1rem | 1.25rem |
| Body Text | 0.9rem | 1rem | 1rem |

Uses `clamp()` for smooth scaling:
```css
font-size: clamp(1.75rem, 10vw, 4.5rem);
```

---

## Accessibility

### WCAG Compliance
- **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
- **Focus Indicators**: Visible on all interactive elements
- **Keyboard Navigation**: Full support for lightbox and nav
- **Alt Text**: Descriptive alt text for all images

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons
- **Arrow Keys**: Previous/Next in lightbox
- **Escape**: Close lightbox or modals

### Motion Preferences
Respects `prefers-reduced-motion` media query:
```css
@media (prefers-reduced-motion: reduce) {
    /* Reduces animation timing to 0.01ms */
}
```

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- `<nav>` for navigation
- `<section>` for content sections
- `<article>` for photo cards
- ARIA labels on icons

---

## Browser Support

### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Graceful Degradation
- CSS Grid with fallbacks
- CSS Variables with fallbacks
- IntersectionObserver polyfill available
- No support for ancient browsers (IE11)

### Features Used
- CSS Grid
- CSS Custom Properties
- IntersectionObserver API
- Fetch API
- RequestAnimationFrame
- CSS Gradients & Filters

---

## Dark Mode Support

The site includes automatic dark mode detection:

```css
@media (prefers-color-scheme: dark) {
    /* Dark mode styles */
}
```

Adjustments:
- Background becomes near-black (#0a0a0a)
- Text becomes light gray
- Cards become dark with light text
- Maintains color scheme harmony

---

## Performance Metrics

### Target Metrics
- **FCP** (First Contentful Paint): < 2s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTI** (Time to Interactive): < 3.5s

### Optimization Techniques
- Lazy loading images
- Efficient CSS animations (GPU accelerated)
- Minimal JavaScript bundling
- Server-side image serving
- Staggered animation delays

---

## SEO Features

- Semantic HTML structure
- Meta tags for mobile
- Open Graph ready (can be added)
- Fast page load times
- Mobile-friendly responsive design
- Proper heading hierarchy
- Descriptive alt text for images

---

## Future Enhancement Ideas

1. **Photo Upload**: Admin interface for adding photos
2. **Thumbnail Generation**: Server-side thumbnail creation
3. **Advanced Filters**: Filter photos by category/date
4. **Search**: Search functionality for large galleries
5. **Social Sharing**: Share individual photos
6. **Comments**: Guest comments on photos
7. **Download**: Option to download full-resolution images
8. **Slideshow**: Auto-play slideshow mode
9. **Favorites**: Guests can favorite photos
10. **Print**: Optimized print styles

---

Made with ❤️ for beautiful wedding memories
