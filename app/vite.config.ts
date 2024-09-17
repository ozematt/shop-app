import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["cobertura", "json", "html"],
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    setupFiles: ["/setupTest.ts"],
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
