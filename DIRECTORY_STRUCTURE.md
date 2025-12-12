# 📂 Project Directory Structure

Complete file and folder layout for Wedding Photobook Express.

---

## Full Directory Tree

```
photobook-express/
│
├── 📄 DOCUMENTATION FILES (Start Here!)
│   ├── QUICK_START.md              ⭐ Read this first (2 min)
│   ├── START_HERE.md               Overview & getting started
│   ├── README.md                   Full technical documentation
│   ├── SETUP_GUIDE.md              Step-by-step installation guide
│   ├── FEATURES.md                 Detailed feature breakdown
│   ├── CUSTOMIZATION.md            Styling & color customization
│   ├── DESIGN_SYSTEM.md            Visual design reference
│   ├── LAUNCH_CHECKLIST.md         Pre-launch verification
│   ├── PROJECT_SUMMARY.md          This project overview
│   └── DEPLOYMENT_GUIDE.md         (Optional) Deployment help
│
├── 🔧 CONFIGURATION & BUILD
│   ├── package.json                Dependencies & npm scripts
│   ├── .env.example                Environment variables template
│   ├── .gitignore                  Git ignore rules
│   └── node_modules/               (Auto-generated) npm packages
│
├── 📁 BACKEND
│   └── server.js                   Express.js server & API
│       ├── Express setup
│       ├── Static file serving
│       ├── /api/photos endpoint
│       ├── Image directory reading
│       └── Pagination logic
│
├── 🎨 FRONTEND
│   ├── views/
│   │   └── index.html              Main HTML page (310 lines)
│   │       ├── Navigation bar
│   │       ├── Hero section
│   │       ├── Animated leaf ornaments
│   │       ├── Gallery container
│   │       ├── Lightbox modal
│   │       ├── Contact section
│   │       └── Scripts & templates
│   │
│   └── public/
│       ├── css/
│       │   └── styles.css          Complete CSS (982 lines)
│       │       ├── CSS Variables & Theme
│       │       ├── Navigation styles
│       │       ├── Hero animations
│       │       ├── Leaf ornament animations
│       │       ├── Gallery styles
│       │       ├── Masonry grid
│       │       ├── Photo card styling
│       │       ├── Lightbox styles
│       │       ├── Animations & keyframes
│       │       ├── Responsive breakpoints
│       │       ├── Dark mode styles
│       │       └── Accessibility features
│       │
│       └── js/
│           └── app.js              Frontend logic (400+ lines)
│               ├── Configuration
│               ├── DOM elements
│               ├── Particle animation
│               ├── Fetch & API calls
│               ├── Gallery rendering
│               ├── Infinite scroll
│               ├── Lightbox functions
│               ├── Event listeners
│               ├── Keyboard navigation
│               ├── Smooth scrolling
│               └── Performance monitoring
│
├── 📸 IMAGES
│   └── images/                     ← Add your photos here!
│       ├── photo-01.jpg            (JPG, PNG, GIF, WEBP)
│       ├── photo-02.jpg
│       ├── photo-03.jpg
│       └── ... (more photos)
│
└── 📚 DOCUMENTATION
    ├── README.md                   Full documentation
    ├── QUICK_START.md              30-second setup
    ├── START_HERE.md               Project overview
    ├── SETUP_GUIDE.md              Installation steps
    ├── FEATURES.md                 Feature details
    ├── CUSTOMIZATION.md            Color/font guide
    ├── DESIGN_SYSTEM.md            Design reference
    └── LAUNCH_CHECKLIST.md         Pre-launch checklist
```

---

## 📊 File Statistics

### Code Files
```
server.js                    ~117 lines    Backend server
views/index.html             ~310 lines    HTML structure
public/css/styles.css        ~982 lines    Styling & animations
public/js/app.js             ~400 lines    JavaScript logic
─────────────────────────────────────────
Total Code:                ~1,809 lines
```

### Configuration Files
```
package.json                   ~19 lines    Dependencies
.env.example                   ~18 lines    Environment template
.gitignore                     ~25 lines    Git ignore rules
─────────────────────────────────────────
Total Config:                ~62 lines
```

### Documentation Files
```
README.md                    ~600 lines    Full documentation
START_HERE.md                ~500 lines    Project overview
SETUP_GUIDE.md               ~400 lines    Setup instructions
FEATURES.md                  ~700 lines    Feature details
CUSTOMIZATION.md             ~600 lines    Customization guide
DESIGN_SYSTEM.md             ~700 lines    Design reference
LAUNCH_CHECKLIST.md          ~700 lines    Launch verification
QUICK_START.md               ~150 lines    30-second setup
PROJECT_SUMMARY.md           ~600 lines    Project overview
─────────────────────────────────────────
Total Documentation:       ~4,250 lines
```

---

## 📂 Folder Breakdown

### Root Directory
```
photobook-express/
├── QUICK_START.md          ← Read this first!
├── START_HERE.md           ← Then this
├── server.js               ← Backend
├── package.json            ← Dependencies
├── .env.example            ← Config template
├── .gitignore              ← Git rules
└── images/                 ← Your photos go here
```

### public/ (Frontend Static Files)
```
public/
├── css/
│   └── styles.css          All styling & animations
└── js/
    └── app.js              All JavaScript logic
```

### views/ (HTML Templates)
```
views/
└── index.html              Main website page
```

### images/ (Your Content)
```
images/                      ← Add your photos here
├── wedding-photo-01.jpg
├── wedding-photo-02.jpg
├── wedding-photo-03.jpg
└── ... (all your images)
```

---

## 🎯 Key File Purposes

### Backend (Node.js)
```
server.js
├── Express application setup
├── Static file serving
├── RESTful API endpoints
├── Image directory reading
├── Pagination logic
└── Error handling
```

### HTML (Structure)
```
views/index.html
├── Navigation bar with logo
├── Hero section with animations
├── Animated leaf ornaments
├── Gallery container
├── Lightbox modal
├── Contact section
├── JavaScript includes
└── Template elements
```

### CSS (Styling & Animation)
```
public/css/styles.css
├── CSS variables & theme colors
├── Navigation styles
├── Hero section styling
├── Leaf ornament animations
├── Gallery grid layout
├── Photo card styles
├── Lightbox styling
├── Responsive breakpoints
├── Dark mode support
├── Accessibility features
└── ~982 lines total
```

### JavaScript (Interactivity)
```
public/js/app.js
├── Particle animation
├── API communication
├── Gallery rendering
├── Infinite scroll
├── Lightbox functionality
├── Keyboard navigation
├── Smooth scrolling
├── Event listeners
└── ~400+ lines total
```

---

## 📚 Documentation File Guide

### Start Here (Quick Setup)
- **QUICK_START.md** - 30-second setup guide ⭐
- **START_HERE.md** - Project overview

### Setup & Installation
- **SETUP_GUIDE.md** - Step-by-step installation
- **README.md** - Full technical documentation

### Customization & Design
- **CUSTOMIZATION.md** - Change colors, fonts, animations
- **DESIGN_SYSTEM.md** - Visual design reference
- **.env.example** - Configuration template

### Launch & Deployment
- **LAUNCH_CHECKLIST.md** - Pre-launch verification
- **README.md** (Deployment section) - Deploy online

### Project Info
- **PROJECT_SUMMARY.md** - Complete project overview
- **FEATURES.md** - Detailed feature breakdown

---

## 🔄 Data Flow

### Request/Response Flow
```
User Browser
    ↓
HTTP Request
    ↓
Express Server (server.js)
    ↓
API Endpoint (/api/photos)
    ↓
Read images/ folder
    ↓
Generate JSON metadata
    ↓
Return to browser
    ↓
JavaScript (app.js) renders photos
    ↓
CSS (styles.css) animates
    ↓
User sees beautiful gallery!
```

### Image Loading Flow
```
Page Load
    ↓
JavaScript requests /api/photos?page=1
    ↓
Backend returns JSON with image URLs
    ↓
HTML renders photo cards
    ↓
CSS shows blur-up placeholder
    ↓
Images load lazily as scrolling
    ↓
Fade-in animation on load
    ↓
User scrolls down
    ↓
Infinite scroll detects scroll position
    ↓
Requests /api/photos?page=2
    ↓
Repeat process...
```

---

## 🔧 Configuration Files

### package.json
```json
{
    "name": "photobook-express",
    "version": "1.0.0",
    "main": "server.js",
    "scripts": {
        "start": "node server.js"
    },
    "dependencies": {
        "express": "^4.18.2",
        "sharp": "^0.32.0"
    }
}
```

### .env.example
```
NODE_ENV=development
PORT=3000
PHOTOS_PER_PAGE=12
ENABLE_LIGHTBOX=true
ENABLE_INFINITE_SCROLL=true
```

### .gitignore
```
node_modules/
.DS_Store
.env
*.log
dist/
build/
.cache/
```

---

## 📱 Responsive Assets

### CSS Breakpoints (in styles.css)
```css
Mobile:      < 480px      (1 column gallery)
Tablet:      480-768px    (2-3 columns)
Desktop:     768-1400px   (3-4 columns)
Large:       > 1400px     (max-width container)
```

### Dynamic Assets
```
Leaf ornaments (SVG)       - Animated vectors
Particle animation         - Canvas-based
Icons (SVG)               - Navigation, lightbox
Placeholder images        - Gradient patterns
```

---

## 🎯 Finding What You Need

| I want to... | File | Location |
|--------------|------|----------|
| Get started quickly | QUICK_START.md | Root |
| Understand the project | START_HERE.md | Root |
| Install & setup | SETUP_GUIDE.md | Root |
| Change colors | CUSTOMIZATION.md | Root |
| View design reference | DESIGN_SYSTEM.md | Root |
| See all features | FEATURES.md | Root |
| Check before launch | LAUNCH_CHECKLIST.md | Root |
| Read full docs | README.md | Root |
| Modify HTML | views/index.html | views/ |
| Change styles | public/css/styles.css | public/css/ |
| Edit JavaScript | public/js/app.js | public/js/ |
| Change backend | server.js | Root |
| Add photos | images/ | images/ |

---

## 🚀 Getting Started

1. **View**: `QUICK_START.md` (2 minutes)
2. **Navigate**: `cd c:\laragon\www\photobook-express`
3. **Install**: `npm install`
4. **Add Photos**: Place in `images/` folder
5. **Start**: `npm start`
6. **Visit**: `http://localhost:3000`

---

## 📊 Project Size

```
Code Files:              ~1,800 lines
Configuration:           ~60 lines
Documentation:          ~4,250 lines
Images:                 Your photos here
Total (without images):  ~6,100 lines

Disk Space (code only):  ~200 KB
After npm install:       ~50 MB (dependencies)
```

---

## ✅ File Checklist

Essential Files (Must Have):
- ✅ server.js
- ✅ views/index.html
- ✅ public/css/styles.css
- ✅ public/js/app.js
- ✅ package.json
- ✅ images/ folder (empty okay)

Configuration Files (Good to Have):
- ✅ .env.example
- ✅ .gitignore
- ✅ README.md

Documentation Files (Helpful):
- ✅ QUICK_START.md
- ✅ SETUP_GUIDE.md
- ✅ CUSTOMIZATION.md
- ✅ All other .md files

---

## 🎨 Asset Organization

```
SVG Assets:
  - Leaf ornaments (5 variations)
  - Navigation icons
  - Lightbox controls

CSS Assets:
  - Color palette (7 colors)
  - Typography system
  - Shadow system
  - Animation library

Image Assets:
  - Your photos (JPG, PNG, GIF, WEBP)
  - Blur-up placeholders (generated)
  - Loading skeletons (CSS)
```

---

## 📝 Notes

- **Images folder** can be empty initially (for testing)
- **node_modules** created automatically by `npm install`
- **All code is vanilla** (no build process needed)
- **CSS is in one file** (easier to customize)
- **JavaScript is in one file** (simple to modify)
- **No database** (file-based images only)

---

## 🔗 Quick Links

- **To start**: Read QUICK_START.md
- **For help**: Check SETUP_GUIDE.md or README.md
- **To customize**: See CUSTOMIZATION.md
- **Design reference**: Check DESIGN_SYSTEM.md
- **Before launch**: Use LAUNCH_CHECKLIST.md

---

Made with ❤️ for your wedding  
Wedding Photobook Express v1.0
