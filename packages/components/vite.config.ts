import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { DcResolver } from "./build/resolver";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import pxtorem from "postcss-pxtorem";
import UnoCSS from "unocss/vite";
import { presetWind3 } from "unocss";

export default defineConfig(() => {
  return {
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
    build: {
      rollupOptions: {
        // 将vue模块排除在打包文件之外，使用用这个组件库的项目的vue模块
        external: ["vue"],

        // 输出配置
        output: [
          {
            // 打包成 es module
            format: "es",
            // 重命名
            entryFileNames: "[name].js",
            // 打包目录和开发目录对应
            preserveModules: true,
            // 输出目录
            dir: "es",
            // 指定保留模块结构的根目录
            preserveModulesRoot: "src",
          },
          {
            // 打包成 commonjs
            format: "cjs",
            // 重命名
            entryFileNames: "[name].js",
            // 打包目录和开发目录对应
            preserveModules: true,
            // 输出目录
            dir: "lib",
            // 指定保留模块结构的根目录
            preserveModulesRoot: "src",
            exports: "named",
          },
        ],
      },
      lib: {
        // 指定入口文件
        entry: "src/index.ts",
        // 模块名
        name: "DC_COMPONENTS",
      },
    },
    plugins: [
      vue(),
      UnoCSS({
        configFile: false, // 禁止自动查找 config 文件
        presets: [presetWind3({
          prefix: "dc-",
        })],
        content: {
          filesystem: ["./src/**/*.{vue,ts}"],
        },
        theme: {
          colors: {
            primary: "var(--dc-primary)",
            success: "var(--dc-success)",
            danger: "var(--dc-danger)",
            error: "var(--dc-error)",
          },
        },
        layers: {
          "dc-components": 0,
        },
        outputToCssLayers: {
          cssLayerName: (layer: string) => `dc-components.${layer}`,
        },
      }),
      dts({
        // 输出目录
        outDir: ["types"],
        // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
        staticImport: true,
        // 将所有的类型合并到一个文件中
        rollupTypes: false,
      }),
      Components({
        dts: true,
        resolvers: [DcResolver() as any],
      }),
      AutoImport({
        dts: true,
        resolvers: [DcResolver() as any],
      }),
    ],
  } as UserConfig;
});
