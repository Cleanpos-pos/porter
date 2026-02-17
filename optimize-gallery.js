import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, 'public', 'gallery');

// Source images from current conversation
const sourceImages = [
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109157.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109161.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109162.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771321109164.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771322981754.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771322981755.jpg',
    // New images
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323190257.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323190256.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323190268.jpg',
    'C:/Users/Owner/.gemini/antigravity/brain/540b5662-f05f-4c37-a884-79078c6f3460/media__1771323179989.jpg'
];

// Get all jpg files in gallery directory
const files = fs.readdirSync(galleryDir).filter(file => file.endsWith('.jpg'));

console.log('Optimizing gallery images for web...\n');

const optimizeImage = async (filename) => {
    const inputPath = path.join(galleryDir, filename);
    const outputPath = path.join(galleryDir, filename);

    try {
        const inputStats = fs.statSync(inputPath);
        const inputSizeKB = (inputStats.size / 1024).toFixed(2);

        // Optimize image: resize to max 1920px width, quality 85, progressive JPEG
        await sharp(inputPath)
            .resize(1920, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({
                quality: 85,
                progressive: true,
                mozjpeg: true
            })
            .toFile(outputPath + '.tmp');

        // Replace original with optimized version
        fs.unlinkSync(inputPath);
        fs.renameSync(outputPath + '.tmp', outputPath);

        const outputStats = fs.statSync(outputPath);
        const outputSizeKB = (outputStats.size / 1024).toFixed(2);
        const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`✓ ${filename}`);
        console.log(`  ${inputSizeKB} KB → ${outputSizeKB} KB (${reduction}% reduction)\n`);

    } catch (error) {
        console.error(`✗ Error optimizing ${filename}:`, error.message);
    }
};

// Process all images
(async () => {
    for (const file of files) {
        await optimizeImage(file);
    }

    console.log('✓ All images optimized for web!');
    console.log('\nOptimization settings:');
    console.log('  - Max width: 1920px');
    console.log('  - Quality: 85%');
    console.log('  - Format: Progressive JPEG with mozjpeg');
})();
