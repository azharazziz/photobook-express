# 🚀 30-Second Quick Start

**Get your wedding photobook running in 3 commands!**

```bash
# 1. Install dependencies
npm install

# 2. Add photos to images/ folder
# (Copy your JPG/PNG files to c:\laragon\www\photobook-express\images\)

# 3. Start the server
npm start
```

**Visit:** http://localhost:3000

---

## 📁 File Structure
```
photobook-express/
├── images/              ← Add your photos here
├── public/css/          ← Styles
├── public/js/           ← JavaScript
├── views/index.html     ← Main page
└── server.js            ← Backend server
```

---

## 📸 What You Get

✨ **Beautiful Design**
- Modern hero with animated leaves
- Green nature-inspired theme
- Elegant serif + clean sans-serif fonts

📸 **Smart Gallery**
- Masonry layout (responsive grid)
- Infinite scroll (auto-loads as you scroll)
- Lightbox (click photo to expand)
- Smooth animations everywhere

⚡ **Performance**
- Fast loading with blur-up effects
- Responsive design (mobile/tablet/desktop)
- Keyboard navigation support
- Accessibility compliant

---

## 🎨 Quick Customization

### Change Colors
Edit line 1-10 of `public/css/styles.css`:
```css
:root {
    --primary-color: #0f3d2e;    /* Change to your color */
}
```

### Change Hero Title
Edit `views/index.html` around line 61:
```html
<h1 class="hero-title">
    <span class="title-word">Your</span>
    <span class="title-word">New</span>
    <span class="title-word">Title</span>
</h1>
```

### Change Photos Per Page
Edit `server.js` line 25:
```javascript
const perPage = 12;  /* Change to 9, 15, 18, etc */
```

---

## 📖 Documentation

| File | Purpose |
|------|---------|
| START_HERE.md | Overview & getting started |
| README.md | Full technical docs |
| SETUP_GUIDE.md | Step-by-step installation |
| CUSTOMIZATION.md | Colors, fonts, styling |
| FEATURES.md | Feature details |
| DESIGN_SYSTEM.md | Visual design reference |
| LAUNCH_CHECKLIST.md | Pre-launch checklist |

---

## 🔗 Key Features

- **Hero Section** - Stunning animated hero with leaf ornaments
- **Masonry Gallery** - Beautiful responsive photo grid
- **Infinite Scroll** - Auto-loading as you scroll down
- **Lightbox** - Full-screen photo viewer
- **Responsive** - Works on all devices
- **Fast** - Optimized performance
- **Accessible** - Keyboard & screen reader friendly
- **Beautiful** - Elegant design, smooth animations

---

## ⚠️ Troubleshooting

**Images not showing?**
- Check images are in `images/` folder
- Restart server (`npm start`)
- Try: POST http://localhost:3000/api/refresh-cache

**Port 3000 in use?**
```bash
# Kill process on Windows PowerShell:
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
```

**Need help?**
- Check README.md for full docs
- Check SETUP_GUIDE.md for installation help
- Check console for errors (F12)

---

## 🎯 What's Included

✅ Complete Express.js backend  
✅ Modern HTML/CSS/JS frontend  
✅ Responsive design system  
✅ Smooth animations  
✅ Image optimization  
✅ API for pagination  
✅ Lightbox viewer  
✅ Complete documentation  
✅ Accessibility features  
✅ Dark mode support  

---

## 🎉 You're Ready!

1. **Add your wedding photos** to `images/` folder
2. **Run `npm start`**
3. **Visit http://localhost:3000**
4. **Share with family & friends!**

---

## 💡 Pro Tips

- **Best image size:** 1200x1600px (portrait)
- **Best file size:** 150-300KB per image
- **Recommended:** 12-50 photos for smooth experience
- **Customize** colors/fonts in CUSTOMIZATION.md
- **Check** LAUNCH_CHECKLIST.md before sharing

---

**Made with ❤️ for wedding photographers**

Questions? See the detailed documentation files!
