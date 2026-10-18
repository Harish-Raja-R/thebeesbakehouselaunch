import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {resolve} from 'node:path';
export default defineConfig({plugins:[react(),tailwindcss()],build:{rollupOptions:{input:Object.fromEntries(['index','menu','our-story','gallery','contact','404'].map(page=>[page,resolve(process.cwd(),page==='index'?'index.html':page+'/index.html')]))}}});