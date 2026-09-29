import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Port 8000 is used by another local project (Agentic_RAG_System) on
      // this machine - JobNeed's backend runs on 8010 instead, both here and
      // in docker-compose.yml's host-side port mapping.
      "/api": "http://localhost:8010",
      "/uploads": "http://localhost:8010",
    },
  },
});
