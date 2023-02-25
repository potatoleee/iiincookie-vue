import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/front/IndexView.vue"),
    },
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "about",
          name: "about",
          component: () => import("../views/front/AboutView.vue"),
        },
        {
          path: "/products",
          name: "products",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "/product/:id",
          name: "product",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "/articles",
          name: "articles",
          component: () => import("../views/front/ArticlesView.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "/order",
          name: "order",
          component: () => import("../views/front/OrderView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/front/AdminLogin.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/DashBoard.vue"),
      children: [
        {
          path: "products",
          component: () => import("../views/admin/AdminProducts.vue"),
        },
        {
          path: "orders",
          component: () => import("../views/admin/AdminOrders.vue"),
        },
        {
          path: "coupons",
          component: () => import("../views/admin/AdminCoupons.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/admin/AdminArticles.vue"),
        },
      ],
    },
    //404
    {
      path: "/:pathMath(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
