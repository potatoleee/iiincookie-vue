<template>
  <div class="d-flex align-items-center justify-content-center">
    <h1>這是前台頁面</h1>
    <RouterLink to="/">home</RouterLink>|
    <RouterLink to="/about">about</RouterLink>|
    <RouterLink to="/products">產品一覽</RouterLink>|
    <RouterLink to="/cart">購物車 {{ cartList.carts?.length }} </RouterLink>|
    <RouterLink to="/login">後台登入</RouterLink>|
    <RouterLink to="/admin/products">後台產品頁面</RouterLink>|
  </div>
  <RouterView></RouterView>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  mounted() {
    this.getCartList();
  },
};
</script>
