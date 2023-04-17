<style lang="scss">
@import "./assets/style/all.scss";
</style>
<template>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView,
  },
};
</script>
