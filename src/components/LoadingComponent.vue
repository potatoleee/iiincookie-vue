<template>
  <div class="loading-overlay" :class="{ active: isLoading }">
    <img class="loading-logo" src="../assets/images/logo.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
