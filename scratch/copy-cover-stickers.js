const fs = require('fs');
const path = require('path');

const jsonPath = path.resolve(__dirname, '../src/content/dynamic-images.json');

console.log('Reading dynamic-images.json...');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const coverStickers = data.filter(img => img.slideId === 'Cover');
console.log(`Found ${coverStickers.length} stickers for Cover.`);

if (coverStickers.length === 0) {
  console.log('No stickers found for Cover.');
  process.exit(0);
}

// Check if CoverWeek3 stickers already exist to avoid duplicate copying
const existingWeek3Stickers = data.filter(img => img.slideId === 'CoverWeek3');
if (existingWeek3Stickers.length > 0) {
  console.log(`Found ${existingWeek3Stickers.length} existing stickers for CoverWeek3. Removing them first to avoid duplicates...`);
  // Filter out any existing CoverWeek3 stickers
  const cleanedData = data.filter(img => img.slideId !== 'CoverWeek3');
  data.length = 0;
  data.push(...cleanedData);
}

// Clone Cover stickers and assign them to CoverWeek3 (slideNum = 1)
const newStickers = coverStickers.map((img, index) => {
  return {
    ...img,
    id: String(Date.now() + index), // Unique ID using timestamp
    slideId: 'CoverWeek3',
    slideNum: 1
  };
});

data.push(...newStickers);

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully copied ${newStickers.length} stickers from Cover to CoverWeek3 at identical coordinates!`);
