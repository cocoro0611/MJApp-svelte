import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: "0.0.0.0", // すべてのネットワークインターフェースでリッスン
    port: 5173, // ポートは必要に応じて変更可能
  },
});
