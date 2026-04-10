import { version } from "../../package.json";
import { defineConfig } from "vitepress";
import { vitepressDemo } from "vite-plugin-vitepress-demo";
import UnoCSS from "unocss/vite";
import { presetWind3 } from "unocss";
import { resolve } from "path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "dc-mobile-ui": resolve(__dirname, "../../../components/src/index.ts"),
      },
    },
    plugins: [
      vitepressDemo({
        glob: ["**/demo/**/*.vue"], // 指定需要处理的文件
      }),
      UnoCSS({
        configFile: false,
        presets: [presetWind3({ prefix: "dc-" })],
        content: {
          filesystem: ["../../components/src/**/*.{vue,ts}"],
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
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    server: {
      port: 8005,
    },
  },
  appearance: false, // 夜间模式切换
  title: "",
  description: "道臣PC端组件库，采用Vue + Element Plus",
  lang: "zh-CN",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favico.png" }]],
  themeConfig: {
    siteTitle: "道臣PC端组件库",
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: version,
        items: [
          {
            text: "变更日志",
            link: "/changelog/CHANGELOG.md",
          },
        ],
      },
      { text: "登录换取Token", component: "Login" },
    ],
    sidebar: {
      "/components/": [
        {
          text: "表单组件",
          items: [
            {
              text: "搜索框 DSearch",
              link: "/components/DSearch",
            },
          ],
        },
        {
          text: "导航组件",
          items: [
            {
              text: "标签 DTab",
              link: "/components/DTab",
            },
            
          ],
        },
        {
          text: "静态组件",
          items: [
            {
              text: "卡片 DCard",
              link: "/components/DCard",
            },
            {
              text: "单元格 DCell",
              link: "/components/DCell",
            },
            {
              text: "空状态 DNoData",
              link: "/components/DNoData",
            },
          ],
        },

      ],
    },
  },
});
