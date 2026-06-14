import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    exclude: ['@react-three/rapier', '@dimforge/rapier3d-compat'],
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'image-persist-api',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method === 'POST' && req.url === '/api/upload-image') {
            try {
              let body = '';
              for await (const chunk of req) {
                body += chunk;
              }
              const { filename, base64Data } = JSON.parse(body);
              if (!filename || !base64Data) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing filename or base64Data' }));
                return;
              }
              
              const uploadDir = path.resolve(__dirname, 'public/uploaded-images');
              if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
              }

              // Extract raw base64 data
              const base64Str = base64Data.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Str, 'base64');
              
              // Generate safe unique filename
              const ext = path.extname(filename) || '.png';
              const baseName = path.basename(filename, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
              const uniqueFilename = `${Date.now()}_${baseName}${ext}`;
              const filePath = path.join(uploadDir, uniqueFilename);
              
              fs.writeFileSync(filePath, buffer);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: `/uploaded-images/${uniqueFilename}` }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          if (req.method === 'POST' && req.url === '/api/save-layout') {
            try {
              let body = '';
              for await (const chunk of req) {
                body += chunk;
              }
              const { images } = JSON.parse(body);
              if (!Array.isArray(images)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Images must be an array' }));
                return;
              }
              
              const configPath = path.resolve(__dirname, 'src/content/dynamic-images.json');
              fs.writeFileSync(configPath, JSON.stringify(images, null, 2), 'utf-8');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          if (req.method === 'GET' && req.url === '/api/load-layout') {
            try {
              const configPath = path.resolve(__dirname, 'src/content/dynamic-images.json');
              let images = [];
              if (fs.existsSync(configPath)) {
                const content = fs.readFileSync(configPath, 'utf-8');
                images = JSON.parse(content || '[]');
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, images }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          next();
        });
      }
    }
  ],
})

