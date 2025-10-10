import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,          // allows access from network (0.0.0.0)
    port: 5173,          // change port if needed
    allowedHosts: [      // 👈 use this to restrict which hosts can connect
      'localhost',
      '127.0.0.1',
      'e7755b25695a.ngrok-free.app',
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
