<template>
  <div class="d-flex">
    <!-- 左側導覽列 -->
    <div class="bg-secondary h-100vh p-7 dashboard-nav">
      <nav class="d-flex flex-column align-items-start gap-9">
        <img src="../assets/images/logo.svg" alt="餅乾生產餡後台" />
        <RouterLink to="/admin" class="fs-1">產品管理</RouterLink>
        <RouterLink to="/admin/orders">訂單管理</RouterLink>
        <RouterLink to="/admin/coupons">優惠券管理</RouterLink>
        <RouterLink to="/admin/articles">文章管理</RouterLink>
        <a href="#" @click.prevent="logout">登出</a>
      </nav>
    </div>
    <!-- 左側導覽列 -->
    <!-- 主要內榮-->
    <div class="dashboard-content p-7 px-10">
      <RouterView v-if="check"></RouterView>
    </div>
    <!-- 主要內榮-->
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import { Toast } from "../utils/toast.js";
const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    logout() {
      this.$http.post(`${VITE_APP_URL}/logout`).then(() => {
        document.cookie = `hexToken=; expires=${new Date()};`; //cookie清除

        Toast.fire({
          icon: "success",
          title: "token 已清除 已登出",
        });
        this.$router.push("/login");
      });
    },
    //登入驗證
    checkAdmin() {
      //取出Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = token;

      this.$http
        .post(`${VITE_APP_URL}/api/user/check`)
        .then(() => {
          this.check = true;

          Toast.fire({
            icon: "success",
            title: "登入成功",
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
          this.$router.push("/login");
        });
    },
  },
  mounted() {
    this.checkAdmin();
  },
  components: {
    RouterView,
  },
};
</script>
