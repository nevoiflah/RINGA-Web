import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // listen on 0.0.0.0 so Replit can proxy it
    port: 5173,
    strictPort: false,
    // Allow Replit's preview domains (avoids "host not allowed" error)
    allowedHosts: true,
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
});
