import HomePage from "./pages/HomePage.vue";
import HistoryPage from "./pages/HistoryPage.vue";
import AuthorPage from "./pages/AuthorPage.vue";

import { createRouter, createWebHistory } from "vue-router";

// 配置路由导航到不同页面，启用命名路由
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/history",
    name: "history",
    component: HistoryPage,
  },
  {
    path: "/author",
    name: "author",
    component: AuthorPage,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export { router };
