import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Log the directory structure for debugging
console.log('--- Current Directory Structure ---');
console.log('__dirname:', __dirname);
try {
    const files = fs.readdirSync(__dirname);
    console.log('Files in root:', files);
    if (files.includes('build')) {
        console.log('Build folder found, contents:', fs.readdirSync(path.join(__dirname, 'build')));
    } else {
        console.error('CRITICAL: build folder not found in', __dirname);
    }
} catch (err) {
    console.error('Error reading directory:', err);
}

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle SPA routing - send all requests to index.html
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'build', 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('<h1>Deployment Error</h1><p>index.html not found. Please ensure the "build" folder is uploaded correctly.</p>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('---------------------------------');
});
