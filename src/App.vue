<style lang="scss">
@import "./assets/style/all.scss";
</style>
<template>
  <RouterView></RouterView>
</template>
<script>
import { RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    RouterView,
  },
  mounted() {
    AOS.init();
  },
};
</script>
