# 🎬 Setup Guide & Demo

This guide will help you get the Wedding Photobook Express up and running in minutes!

## Step-by-Step Setup

### 1. Open Terminal in Project Folder
```bash
cd c:\laragon\www\photobook-express
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- `express` (4.18.2) - Web framework
- `sharp` (0.32.0) - Image processing library

### 3. Create Images Folder (if needed)
The `images` folder should already exist. If not:
```bash
mkdir images
```

### 4. Add Your Photos
Place your wedding photos in the `images/` directory:
```
photobook-express/
└── images/
    ├── wedding-01.jpg
    ├── wedding-02.jpg
    ├── wedding-03.png
    └── ... (more photos)
```

**Supported Formats:**
- JPEG/JPG
- PNG
- GIF
- WEBP

### 5. Start the Server
```bash
npm start
```

You should see:
```
🎉 Wedding Photobook Express Server running at http://localhost:3000
📁 Place your images in the 'images' folder (JPG, PNG, GIF, WEBP)
🖼️  API endpoint: http://localhost:3000/api/photos?page=1
```

### 6. Open Browser
Navigate to: **http://localhost:3000**

You should see the beautiful hero section with animated leaves!

## 🖼️ Sample Photo Dimensions (Recommended)

For best results, use photos with these dimensions:

| Aspect Ratio | Dimensions | File Size |
|---|---|---|
| 3:4 (Portrait) | 1200x1600px | 150-300KB |
| 4:3 (Landscape) | 1600x1200px | 150-300KB |
| 16:9 (Wide) | 1920x1080px | 200-400KB |

## 🎯 Testing Without Real Images

The site works great even without images. You'll see:
- The stunning hero section with animations
- The gallery section with a message about missing images
- All interactions and functionality fully available

### To test infinite scroll with dummy data:
You can manually create test images or use placeholder services.

## 🔧 Development Tips

### Hot Reload (Optional)
For development, install nodemon for automatic restarts:
```bash
npm install --save-dev nodemon
```

Then update `package.json` script:
```json
"dev": "nodemon server.js"
```

Run with:
```bash
npm run dev
```

### Check API Directly
Test the API endpoint in your browser:
```
http://localhost:3000/api/photos?page=1
```

You should get JSON with photo metadata.

### Browser DevTools
- **Network Tab**: Check image loading
- **Performance Tab**: Monitor animation smoothness
- **Console Tab**: Check for any JavaScript errors

## 📊 File Size Optimization

To optimize image files:

### Using Command Line (if you have ImageMagick):
```bash
mogrify -resize 1200x1600 -quality 85 images/*
```

### Using Online Tools:
- TinyPNG (tinypng.com) - Great for JPG/PNG
- JPEG.io (jpeg.io) - Compress JPEGs
- Squoosh (squoosh.app) - Google's compression tool

## 🚀 Deployment Tips

### Local Network Access
Access from other devices on your network:
```
http://YOUR_COMPUTER_IP:3000
```

Find your IP:
**Windows Command Prompt:**
```bash
ipconfig
```

Look for "IPv4 Address" (usually 192.168.x.x)

### Production Deployment
For production use:
1. Set `NODE_ENV=production`
2. Use a process manager (PM2, Forever)
3. Set up reverse proxy (Nginx, Apache)
4. Enable HTTPS/SSL
5. Optimize images server-side

## 🎨 Customization Quick Tips

### Change Hero Title
Edit in `views/index.html`:
```html
<h1 class="hero-title">
    <span class="title-word">Your</span>
    <span class="title-word">Custom</span>
    <span class="title-word">Title</span>
</h1>
```

### Change Colors
Edit CSS variables in `public/css/styles.css`:
```css
:root {
    --primary-color: #0f3d2e;    /* Change this */
    --accent-color: #ffffff;     /* Or this */
}
```

### Change Gallery Page Size
Edit in `server.js`:
```javascript
const perPage = 12; // Change to 9, 15, 18, etc.
```

## ✅ Checklist Before Launch

- [ ] All wedding photos added to `images/` folder
- [ ] Server starts without errors
- [ ] Photos load in gallery
- [ ] Infinite scroll works (scroll down)
- [ ] Lightbox opens when clicking photos
- [ ] Navigation links work
- [ ] Mobile view looks good
- [ ] Animations are smooth
- [ ] All photos have good quality

## 🆘 Common Issues

### Port 3000 Already in Use
```bash
# Kill the process using port 3000 (Windows PowerShell)
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
```

Or use a different port in `server.js`:
```javascript
const PORT = 3001; // Change to any available port
```

### Images Not Appearing
1. Check `images/` folder exists and has photos
2. Verify file extensions are correct (.jpg, .png, etc.)
3. Try the refresh cache endpoint:
```bash
curl -X POST http://localhost:3000/api/refresh-cache
```

### Slow Performance
1. Reduce image file sizes
2. Close other browser tabs
3. Clear browser cache
4. Use modern browser (Chrome, Firefox, Safari, Edge)

## 📞 Need More Help?

Check the main README.md for:
- Full API documentation
- Animation customization
- Accessibility features
- Performance optimization

Enjoy showcasing your beautiful wedding! 🎉

---

Made with ❤️ for wedding photographers
