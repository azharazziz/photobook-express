# 🎉 Wedding Photobook Express

A modern, visually rich wedding photobook website built with Express.js and vanilla JavaScript. Features an elegant nature-inspired design with deep leaf-green accents, animated decorative elements, and a responsive masonry gallery with infinite scroll.

## ✨ Features

### Design & Aesthetics
- **Modern Hero Section** with animated floating leaf ornaments and particle effects
- **Nature-Inspired Theme** using deep leaf-green (#0f3d2e) + bright white palette
- **Elegant Typography** combining serif headers with clean sans-serif body text
- **Visual Depth** with glass-like layered effects, soft gradients, and drop shadows
- **Curved Shapes & Soft Overlays** for premium, polished appearance

### Gallery Features
- **Masonry Grid Layout** with responsive grid that adapts to screen size
- **Infinite Scroll** with automatic loading of new photos as you scroll
- **Lazy Loading** with blur-up placeholder effects for optimal performance
- **Smooth Animations** with staggered fade-in and slide-up effects
- **Hover Micro-interactions** with subtle zoom and elevation effects
- **Image Lightbox** with keyboard navigation and smooth transitions

### Interactive Elements
- **Animated Leaf Ornaments** with floating animations and fade-in effects
- **Particle Animation** background in hero section
- **Scroll Indicators** with bouncing arrow animations
- **Navigation Bar** with smooth transitions and glass-morphism effects
- **Contact Section** with call-to-action buttons

### Technical Features
- **Server-Side Image Serving** from local 'images' folder
- **RESTful API** endpoint: `/api/photos?page=n` for pagination
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Accessibility** with proper alt text, semantic HTML, and ARIA labels
- **Performance Optimized** with lazy loading, image optimization, and efficient animations
- **Dark Mode Support** with CSS media queries

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or Navigate to Project**
```bash
cd c:\laragon\www\photobook-express
```

2. **Install Dependencies**
```bash
npm install
```

3. **Add Your Wedding Photos**
- Create an `images` folder in the project root (if not already created)
- Place your wedding photos (JPG, PNG, GIF, WEBP) in the `images` folder
- Supported formats: .jpg, .jpeg, .png, .gif, .webp

4. **Start the Server**
```bash
npm start
```

5. **Open in Browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
photobook-express/
├── images/                 # Your wedding photos go here
├── public/
│   ├── css/
│   │   └── styles.css     # Complete styling with animations
│   └── js/
│       └── app.js         # Frontend logic & interactivity
├── views/
│   └── index.html         # Main HTML structure
├── server.js              # Express backend
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `public/css/styles.css`:
```css
:root {
    --primary-color: #0f3d2e;    /* Deep leaf green */
    --accent-color: #ffffff;     /* Bright white */
    --text-dark: #1a1a1a;
    --text-light: #666666;
    /* ... more variables */
}
```

### Typography
Customize fonts in the CSS variables:
```css
--font-serif: 'Georgia', 'Garamond', serif;
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Animation Speed
Adjust timing in `public/css/styles.css` and `public/js/app.js`:
- Leaf floating animation duration: `6s`, `7s`, `8s`
- Photo fade-in duration: `0.6s`
- Scroll loading threshold: `500px`

### API Configuration
Modify pagination in `server.js`:
```javascript
const perPage = 12; // Photos per page
```

## 🎯 API Endpoints

### Get Photos (Pagination)
```
GET /api/photos?page=1
```

**Response:**
```json
{
    "success": true,
    "photos": [
        {
            "id": 1,
            "filename": "wedding-01.jpg",
            "url": "/images/wedding-01.jpg",
            "title": "wedding-01",
            "alt": "Wedding photo - wedding-01",
            "width": 600,
            "height": 400
        }
        // ... more photos
    ],
    "page": 1,
    "perPage": 12,
    "totalPhotos": 48,
    "totalPages": 4,
    "hasMore": true
}
```

### Refresh Cache
```
POST /api/refresh-cache
```
Clears the image cache and reloads images from disk.

## 🎬 Animation Details

### Leaf Ornaments
- **Fade-in animation**: 0.8s on page load
- **Floating animation**: 6-8s smooth vertical movement with slight rotation
- **Opacity variation**: 0.4 with subtle depth

### Gallery Photos
- **Blur-up effect**: Gradient placeholder during load
- **Fade-in animation**: 0.6s with staggered delay (0-1.1s)
- **Hover effect**: Scale 1.08x with color overlay
- **Lightbox transition**: Smooth zoom-in effect

### Hero Elements
- **Title words**: Sequential fade-in with 0.2s stagger
- **Divider line**: Expanding width animation
- **Buttons**: Ripple effect on hover
- **Scroll indicator**: Bouncing arrow animation

## 📱 Responsive Breakpoints

- **Mobile** (< 480px): Single column gallery, compact header
- **Tablet** (480px - 768px): 2-3 column gallery
- **Desktop** (> 768px): 3-4 column adaptive grid
- **Large Screens** (> 1400px): Max-width container with optimal spacing

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Proper alt text for all images
- Keyboard navigation for lightbox (Arrow keys, Escape)
- High contrast color scheme (WCAG AA compliant)
- Reduced motion support via `prefers-reduced-motion`

## 🔍 SEO & Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast page load with efficient animations
- Image size optimization recommendations

## 🖼️ Tips for Best Results

1. **Image Dimensions**: Use landscape-oriented photos (4:3 or 16:9 ratio) for optimal gallery layout
2. **File Sizes**: Compress images to 100-300KB for fast loading
3. **Photo Count**: 12-50 photos work best for smooth infinite scroll experience
4. **Quality**: Use high-quality photos (at least 1200x900px)
5. **Variety**: Mix close-ups, wide shots, and detail photos for visual interest

## 🐛 Troubleshooting

### Images Not Showing
- Ensure images are in the `images` folder
- Check browser console for error messages
- Verify image file extensions (.jpg, .png, etc.)
- Try the `POST /api/refresh-cache` endpoint to reload

### Slow Loading
- Reduce image file sizes
- Use modern formats (WEBP with fallback)
- Check browser cache and clear if needed
- Verify internet connection

### Animations Not Smooth
- Check browser performance in DevTools
- Reduce number of simultaneous animations on low-end devices
- Enable "Reduce Motion" in OS settings to simplify animations

## 📦 Dependencies

- **Express.js** (v4.18.2) - Web framework
- **Sharp** (v0.32.0) - Image processing (optional, for future thumbnails)
- **Node.js built-ins** - fs, path

## 🎨 Design Inspiration

The design draws from:
- Modern wedding photography portfolio sites
- Nature-inspired UI design trends
- Glass-morphism and layered depth effects
- Elegant, minimalist yet visually rich aesthetics

## 📝 License

MIT License - Feel free to customize and use for your project!

## 🤝 Support

For questions or issues:
1. Check the Troubleshooting section above
2. Verify all files are in correct locations
3. Check browser console for error messages
4. Ensure Node.js is properly installed

## 🎊 Enjoy!

Create beautiful wedding memories with your guests. This photobook website provides an elegant, immersive way to showcase your special day.

---

**Made with ❤️ for wedding photography**
