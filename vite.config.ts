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
  server: {
    watch: {
      ignored: (path: string) => path.includes('dynamic-images.json') || path.includes('public/uploaded-images')
    }
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'image-persist-api',
      handleHotUpdate({ file }) {
        if (file.endsWith('dynamic-images.json')) {
          console.log('[API] Intercepted HMR for dynamic-images.json (preventing HMR reload)');
          return [];
        }
      },
      configureServer(server) {
        // Helper to parse request body safely without stream hangs using native async iterator
        const readBody = async (req: any): Promise<string> => {
          let data = '';
          req.setEncoding('utf8');
          for await (const chunk of req) {
            data += chunk;
          }
          return data;
        };

        server.middlewares.use(async (req, res, next) => {
          if (req.method === 'POST' && req.url === '/api/upload-image') {
            try {
              const body = await readBody(req);
              const { filename, base64Data } = JSON.parse(body);
              if (!filename || !base64Data) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing filename or base64Data' }));
                return;
              }
              
              console.log(`[API] Uploading image: ${filename} (${Math.round(base64Data.length / 1024)} KB)`);
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
              console.log(`[API] Image saved successfully to: ${filePath}`);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: `/uploaded-images/${uniqueFilename}` }));
            } catch (err: any) {
              console.error('[API] Upload error:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          if (req.method === 'GET' && req.url && req.url.startsWith('/uploaded-images/')) {
            try {
              const urlPath = req.url.split('?')[0]; // strip query parameters if any
              const filename = path.basename(urlPath);
              const filePath = path.resolve(__dirname, 'public/uploaded-images', filename);
              
              if (fs.existsSync(filePath)) {
                const ext = path.extname(filePath).toLowerCase();
                let contentType = 'image/png';
                if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
                else if (ext === '.gif') contentType = 'image/gif';
                else if (ext === '.svg') contentType = 'image/svg+xml';
                else if (ext === '.webp') contentType = 'image/webp';

                res.setHeader('Content-Type', contentType);
                fs.createReadStream(filePath).pipe(res);
                return;
              } else {
                res.statusCode = 404;
                res.end('Not Found');
                return;
              }
            } catch (err) {
              console.error('[API] Error serving uploaded image:', err);
            }
          }

          if (req.method === 'POST' && req.url === '/api/save-layout') {
            try {
              const body = await readBody(req);
              const { images } = JSON.parse(body);
              if (!Array.isArray(images)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Images must be an array' }));
                return;
              }
              
              console.log(`[API] Saving layout coordinates for ${images.length} image(s)`);
              const configPath = path.resolve(__dirname, 'src/content/dynamic-images.json');
              fs.writeFileSync(configPath, JSON.stringify(images, null, 2), 'utf-8');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              console.error('[API] Save layout error:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          if (req.method === 'GET' && req.url === '/api/load-layout') {
            try {
              console.log('[API] Loading layout config');
              const configPath = path.resolve(__dirname, 'src/content/dynamic-images.json');
              let images = [];
              if (fs.existsSync(configPath)) {
                const content = fs.readFileSync(configPath, 'utf-8');
                images = JSON.parse(content || '[]');
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, images }));
            } catch (err: any) {
              console.error('[API] Load layout error:', err);
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

