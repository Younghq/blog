import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

// 挂载Vue Router
app.use(router);

// 挂载根组件
app.mount("#app");
