import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./index.css";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme";
import "vant/lib/index.css";
// import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import Login from "./components/login.vue";
import TypesDialog from "./components/typesDialog.vue";
import DocLayout from "./components/DocLayout.vue";
import DcMobileUI from "dc-mobile-ui";
// import 'amfe-flexible'

const GATEWAY_URL = `https://gateway.dczhiyun.com`

export default {
  ...DefaultTheme,
  Layout: DocLayout,
  enhanceApp({ app }) {
    app.component("Demo", AntdTheme).use(Antd);
    app.component("Login", Login);
    app.component("TypesDialog", TypesDialog);
    app.use(DcMobileUI, {
      theme: {
        primary: "#145ca8",
        success: "#28a745",
        danger: "#dc3545",
        error: "#dc3545",
      },
      request: {
        base_url: GATEWAY_URL,
        login_url: GATEWAY_URL,
        file_url: `${GATEWAY_URL}/api/files/static/resource/p`,
        getfile_url: `${GATEWAY_URL}/api/abp/minio`,
        tokenName: "JsToken",
        useCrypto: false,
        cryptoType: 1,
      },
    });
  },
} satisfies Theme;
