import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [react(), svgr({ icon: true })],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@UI": "/src/components/UI",
      "@store": "/src/store",
      "@assets": "/src/assets",
    },
  },
});
