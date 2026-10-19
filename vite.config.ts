import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'video-upload-handler',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.method === 'POST' && req.url === '/api/upload-video') {
              const videoDir = path.resolve(__dirname, 'public/videos');
              if (!fs.existsSync(videoDir)) {
                fs.mkdirSync(videoDir, { recursive: true });
              }
              const videoPath = path.join(videoDir, 'hero_loop.mp4');
              const writeStream = fs.createWriteStream(videoPath);
              req.pipe(writeStream);
              writeStream.on('finish', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, url: '/videos/hero_loop.mp4' }));
              });
              writeStream.on('error', (err) => {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              });
              return;
            }
            next();
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
