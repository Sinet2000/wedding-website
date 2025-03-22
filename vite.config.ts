import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Split other large dependencies into separate chunks
          icons: ["react-icons"],
          animations: ["framer-motion"],
          gallery: ["react-photo-album", "yet-another-react-lightbox"],
          styles: ["@emotion/react", "@emotion/styled"],
        },
        assetFileNames: (assetInfo) => {
          const extType = assetInfo?.name?.split(".")?.[1] ?? "asset";
          return extType.match(/png|jpe?g|svg|gif|tiff|bmp|ico/i)
            ? `assets/img/[name]-[hash][extname]`
            : `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
