import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import DcMobileUI from "dc-mobile-ui";

const app = createApp(App);
const pinia = createPinia();

const GATEWAY_URL = "http://localhost:8000";

app.use(pinia);
app.use(DcMobileUI, {
  theme: {
    primary: "#145CA8",
    success: "#07c160",
    danger: "#ed6a0c",
    error: "#ee0a24",
  },
  request: {
    base_url: GATEWAY_URL,
    login_url: GATEWAY_URL,
    file_url: `${GATEWAY_URL}/api/files/static/resource/p`,
    getfile_url: `${GATEWAY_URL}/api/abp/minio`,
    tokenName: "JsToken",
  },
});

app.mount("#app");
