import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  let taggerPlugin = null;
  if (mode === "development") {
    try {
      taggerPlugin = componentTagger();
    } catch (err) {
      console.error("Failed to load lovable-tagger plugin:", err);
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false, // turn off Vite overlay
      },
    },
    plugins: [
      react(),
      taggerPlugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
