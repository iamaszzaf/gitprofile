import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: CONFIG.base || '/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo.title,
          metaDescription: CONFIG.seo.description,
          metaImageURL: CONFIG.seo.imageURL,
          googleAnalyticsScript: CONFIG.googleAnalytics.id
            ? `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${CONFIG.googleAnalytics.id}');
</script>`
            : '',
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: {
              navigateFallback: undefined,
            },
            includeAssets: ['favicon.svg'],
            manifest: {
              name: 'Łukasz Majka',
              short_name: 'Łukasz Majka',
              description: 'Cześć! Jestem Łukasz – programista z pasją do tworzenia nowoczesnych aplikacji webowych, które łączą estetykę z funkcjonalnością. Dzięki doświadczeniu w technologiach frontendowych i backendowych oferuję kompleksowe podejście do projektów IT, od projektowania interfejsów użytkownika po zaawansowaną logikę biznesową.',
              icons: [
                {
                  src: 'favicon.svg',
                  sizes: 'any',
                  type: 'image/svg+xml',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: {
    CONFIG: CONFIG,
  },
});
