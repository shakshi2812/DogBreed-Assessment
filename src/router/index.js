import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import SearchImages from "@/views/SearchImages.vue";
import ViewImages from "@/views/ViewImages.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/search",
    name: "SearchImages",
    component: SearchImages
  },
  {
    path: "/images/:name",
    name: "ViewImages",
    component: ViewImages
  },
  {
    path: "*",
    redirect: "/Dashboard"
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
