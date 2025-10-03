import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Register from "@/pages/auth/Register.vue";
import Login from "@/pages/auth/Login.vue";

const routes = [
  {
    component: AuthLayout,
    children: [
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/login",
        component: Login,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
