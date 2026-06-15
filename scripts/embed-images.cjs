const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '../src/content/dynamic-images.json');
const publicDir = path.resolve(__dirname, '../public');

console.log('Loading JSON...');
if (!fs.existsSync(jsonPath)) {
  console.error(`Error: JSON file not found at ${jsonPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(jsonPath, 'utf8');
const images = JSON.parse(raw);

let count = 0;
for (const img of images) {
  if (img.src && img.src.startsWith('/uploaded-images/')) {
    const filePath = path.join(publicDir, img.src);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).toLowerCase();
      let mime = 'image/png';
      if (ext === '.jpg' || ext === '.jpeg') mime = 'image/jpeg';
      else if (ext === '.svg') mime = 'image/svg+xml';
      else if (ext === '.webp') mime = 'image/webp';
      else if (ext === '.gif') mime = 'image/gif';

      const fileBuffer = fs.readFileSync(filePath);
      const base64 = fileBuffer.toString('base64');
      img.src = `data:${mime};base64,${base64}`;
      count++;
      console.log(`Embedded: ${img.originalName || path.basename(filePath)} (${fileBuffer.length} bytes)`);
    } else {
      console.warn(`Warning: File not found at ${filePath}`);
    }
  }
}

if (count > 0) {
  fs.writeFileSync(jsonPath, JSON.stringify(images, null, 2), 'utf8');
  console.log(`Success! Inlined ${count} sticker image(s) into dynamic-images.json.`);
} else {
  console.log('No local image paths found. All stickers are already embedded.');
}
