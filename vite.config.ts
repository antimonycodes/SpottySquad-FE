import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: "127.0.0.1", // 👈 Force 127.0.0.1 instead of localhost
    port: 5173,
    open: true, // 👈 Automatically open browser on start
  },
});
