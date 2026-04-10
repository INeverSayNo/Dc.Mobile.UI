import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./index.css";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme"
import 'vant/lib/index.css'
// import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue"
import Login from './components/login.vue';
import TypesDialog from './components/typesDialog.vue';
import DocLayout from './components/DocLayout.vue';
import DcMobileUI from "dc-mobile-ui";
// import 'amfe-flexible'

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
                base_url: "",
                login_url: "",
                file_url: "",
                getfile_url: "",
                tokenName: "",
            },
        });
    }
} satisfies Theme;