import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // ⚠️ ВАЖЛИВО: назва вашого GitHub репозиторію
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        tags: [
          {
            injectTo: 'head', // 📌 вставити у <head>
            tag: 'script',
            children: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1100566295418380');
              fbq('track', 'PageView');
            `
          },
          {
            injectTo: 'body', // ❗ перемістити в body
            tag: 'noscript',
            children: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1100566295418380&ev=PageView&noscript=1"/>
            `
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      external: ['react-lazyload'],
    },
  },
});