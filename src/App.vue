<style lang="scss">
@import "./assets//style/all.scss";
</style>
<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>
<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView,
  },
};
</script>
