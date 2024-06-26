import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/css/accordeon.css',
                'resources/js/site.js',
                'resources/js/gsapAnimSectionImages.js',
                'resources/js/gsapAnimSectionCTA.js',
                'resources/js/gsapAnimSectionSVG.js',
                'resources/js/carousel.js',
                'resources/js/page404.js',
                'resources/js/accordeon.js',
                

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
        // vue2(),
    ],
});
