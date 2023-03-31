import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // linkActiveClass: "active",
  scrollBehavior(to) {
    if (
      to.fullPath.match("product") ||
      to.fullPath.match("article") ||
      to.fullPath.match("about")
    ) {
      return {
        top: 0,
      };
    }
    return {};
  },
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          name: "index",
          component: () => import("../views/front/IndexView.vue"),
        },
        {
          path: "/about",
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
          path: "/article/:id",
          name: "article",
          component: () => import("../views/front/ArticleView.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../views/front/CartView.vue"),
          meta: {
            hideCartIcon: true, // 設定此路由不顯示購物車 icon
          },
        },
        {
          path: "/order",
          name: "order",
          component: () => import("../views/front/OrderView.vue"),
          meta: {
            hideCartIcon: true, // 設定此路由不顯示購物車 icon
          },
        },
        {
          path: "/pay/:id",
          name: "pay",
          component: () => import("../views/front/PayView.vue"),
          meta: {
            hideCartIcon: true, // 設定此路由不顯示購物車 icon
          },
        },
        {
          path: "/complete/:id",
          name: "complete",
          component: () => import("../views/front/OrderComplete.vue"),
          meta: {
            hideCartIcon: true, // 設定此路由不顯示購物車 icon
          },
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
