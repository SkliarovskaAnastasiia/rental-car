import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@UI": "/src/components/UI",
      "@store": "/src/store",
    },
  },
});
