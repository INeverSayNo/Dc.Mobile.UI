import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pxtorem from "postcss-pxtorem";
import UnoCSS from "unocss/vite";
import { presetWind3 } from "unocss";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
    alias: {
      // 本地开发时直接指向 components 源码，支持热更新
      "dc-mobile-ui": resolve(__dirname, "../components/src/index.ts"),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,
          propList: ["*"],
          selectorBlackList: [],
        }),
      ],
    },
  },
  plugins: [
    vue(),
    UnoCSS({
      configFile: false,
      prefix: "dc-",
      presets: [
        presetWind3({
          prefix: "dc-",
        }),
      ],
      content: {
        filesystem: ["../components/src/**/*.{vue,ts}"],
      },
      theme: {
        colors: {
          primary: "var(--dc-primary)",
          success: "var(--dc-success)",
          danger: "var(--dc-danger)",
          error: "var(--dc-error)",
        },
      },
    }),
  ],
  server: {
    watch: {
      ignored: ["!**/packages/components/src/**"],
    },
  },
  optimizeDeps: {
    exclude: ["dc-mobile-ui"],
  },
});
