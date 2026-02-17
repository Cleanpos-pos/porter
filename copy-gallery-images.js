import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source images from current conversation
const sourceImages = [
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109157.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109161.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109162.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109164.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771322981754.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771322981755.jpg',
    // New images
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323190257.jpg', // Kitchen scene
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323190256.jpg', // Salmon dish
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323190268.jpg', // Vegetable stack
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323179989.jpg'  // Sauce presentation
];

// Target directory
const targetDir = path.join(__dirname, 'public', 'gallery');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Image mapping with descriptive names
const imageMapping = [
    { source: sourceImages[0], target: 'dining-room-1.jpg' },
    { source: sourceImages[1], target: 'dining-room-2.jpg' },
    { source: sourceImages[2], target: 'signature-dish-1.jpg' },
    { source: sourceImages[3], target: 'signature-dish-2.jpg' },
    { source: sourceImages[4], target: 'chef-portrait.jpg' },
    { source: sourceImages[5], target: 'dining-room-3.jpg' },
    { source: sourceImages[6], target: 'kitchen-action.jpg' },
    { source: sourceImages[7], target: 'signature-salmon.jpg' },
    { source: sourceImages[8], target: 'vegetable-tower.jpg' },
    { source: sourceImages[9], target: 'sauce-presentation.jpg' }
];

console.log('Copying images to gallery folder...\n');

imageMapping.forEach((mapping, index) => {
    const targetPath = path.join(targetDir, mapping.target);

    try {
        if (fs.existsSync(mapping.source)) {
            fs.copyFileSync(mapping.source, targetPath);
            const stats = fs.statSync(targetPath);
            const fileSizeInKB = (stats.size / 1024).toFixed(2);
            console.log(`✓ Copied: ${mapping.target} (${fileSizeInKB} KB)`);
        } else {
            console.log(`✗ Source not found: ${mapping.source}`);
        }
    } catch (error) {
        console.error(`Error copying ${mapping.target}:`, error.message);
    }
});

console.log('\n✓ Gallery images copied successfully!');
console.log('\nNote: For production, consider using an image optimization library like:');
console.log('  - sharp (npm install sharp)');
console.log('  - imagemin (npm install imagemin)');
console.log('  - squoosh-cli (npm install @squoosh/cli)');
