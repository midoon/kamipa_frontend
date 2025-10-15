import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Register from "@/pages/auth/Register.vue";
import Login from "@/pages/auth/Login.vue";
import AppLayout from "../layouts/AppLayout.vue";
import Dashboard from "../pages/dashboard/Dashboard.vue";

const routes = [
  {
    path: "/",
    component: AuthLayout,
    children: [
      { path: "register", component: Register, name: "Register" },
      { path: "login", component: Login, name: "Login" },
    ],
  },
  {
    path: "/",
    component: AppLayout,
    children: [{ path: "dashboard", component: Dashboard, name: "Dashboard" }],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
