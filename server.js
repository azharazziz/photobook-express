const express = require('express');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Serve images from the images folder
app.use('/images', express.static('images'));

// Cache for image metadata
let imageCache = null;

// Function to get all images from the images folder
function getImagesFromFolder() {
  try {
    const imagesDir = path.join(__dirname, 'images');
    
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
      return [];
    }

    // Recursively walk the images directory and gather image files from subfolders
    function walkDir(dir, baseDir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      let results = [];
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          results = results.concat(walkDir(fullPath, baseDir));
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
            const relPath = path.relative(baseDir, fullPath).split(path.sep).join('/');
            results.push({ fullPath, relPath, name: entry.name });
          }
        }
      }
      return results;
    }

    const rawImageFiles = walkDir(imagesDir, imagesDir);

    return rawImageFiles.map((f, index) => ({
      id: index + 1,
      filename: f.name,
      url: `/images/${f.relPath}`,
      title: path.parse(f.relPath).name,
      alt: `Wedding photo - ${path.parse(f.relPath).name}`,
      width: 600,
      height: 400
    }));
  } catch (error) {
    console.error('Error reading images:', error);
    return [];
  }
}

// API endpoint for paginated photos
app.get('/api/photos', (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 12;
    
    // Get all images
    if (!imageCache) {
      imageCache = getImagesFromFolder();
    }
    
    const totalPhotos = imageCache.length;
    const totalPages = Math.ceil(totalPhotos / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    
    const photos = imageCache.slice(startIndex, endIndex);
    
    // If no images exist, return sample data structure
    if (photos.length === 0 && page === 1) {
      return res.json({
        success: true,
        photos: [],
        page: page,
        perPage: perPage,
        totalPhotos: 0,
        totalPages: 0,
        hasMore: false,
        message: 'No images found in images folder. Add images to the images/ directory.'
      });
    }
    
    res.json({
      success: true,
      photos: photos,
      page: page,
      perPage: perPage,
      totalPhotos: totalPhotos,
      totalPages: totalPages,
      hasMore: page < totalPages
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch photos',
      details: error.message
    });
  }
});

// Refresh image cache endpoint
app.post('/api/refresh-cache', (req, res) => {
  imageCache = null;
  res.json({ success: true, message: 'Cache refreshed' });
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🎉 Wedding Photobook Express Server running at http://localhost:${PORT}`);
  console.log(`📁 Place your images in the 'images' folder (JPG, PNG, GIF, WEBP)`);
  console.log(`🖼️  API endpoint: http://localhost:${PORT}/api/photos?page=1`);
});
