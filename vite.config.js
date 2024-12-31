import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    esbuild: {
        jsxFactory: 'React.createElement', // This is required for JSX transformation
        jsxFragment: 'React.Fragment', // This is required for JSX fragment
    },
    optimizeDeps: {
        include: ['react', 'react-dom'], // Ensure these packages are pre-bundled
    },
});
