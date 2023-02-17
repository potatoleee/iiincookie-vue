<template>
  <nav class="d-flex align-items-center justify-content-center">
    <h1>後台儀表板</h1>
    <RouterLink to="/admin/products">產品管理</RouterLink>|
    <RouterLink to="/admin/orders">訂單管理</RouterLink>|
    <RouterLink to="/">回到前台首頁</RouterLink>|
    <a href="#" @click.prevent="logout">登出</a>
  </nav>
  <RouterView></RouterView>
</template>
<style lang="scss"></style>
<script>
import { RouterView } from "vue-router";
const { VITE_APP_URL } = import.meta.env;
export default {
  methods: {
    logout() {
      this.$http.post(`${VITE_APP_URL}/logout`).then(() => {
        document.cookie = `hexToken=; expires=${new Date()};`; //cookie清除
        alert("token 已清除 已登出");
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
        .then(() => {})
        .catch(() => {
          alert("請先登入帳號密碼喔～感謝你！");
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
