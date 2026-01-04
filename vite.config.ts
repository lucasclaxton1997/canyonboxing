import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/canyonboxing/',
  root: path.resolve(__dirname, "client"),
  publicDir: path.resolve(__dirname, "public"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "client/public/assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      external: (id) => id.endsWith('.mov') || id.endsWith('.mp4'), // Force ignore video imports
    },
  },
});
