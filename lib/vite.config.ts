import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

import packageJson from "./package.json";

export default defineConfig({
  plugins: [UnoCSS(), solid(), dts({ insertTypesEntry: true })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "crystal",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
