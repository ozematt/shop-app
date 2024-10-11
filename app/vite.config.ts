import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["cobertura", "json", "html"],
    },
    include: ["src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    setupFiles: ["./setupTest.ts"],
    exclude: [...configDefaults.exclude, "e2e/*"],
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
