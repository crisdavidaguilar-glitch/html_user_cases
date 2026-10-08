import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(import.meta.dirname, "index.html"),
        nosotros: resolve(import.meta.dirname, "nosotros.html"),
        servicios: resolve(import.meta.dirname, "servicios.html"),
        contacto: resolve(import.meta.dirname, "contacto.html"),
      },
    },
  },
});
