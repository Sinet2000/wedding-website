import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Split other large dependencies into separate chunks
          icons: ["react-icons"],
          animations: ["framer-motion"],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
