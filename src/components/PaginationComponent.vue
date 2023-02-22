<template>
  <div>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: pageIn.has_pre === false }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getPages(pageIn.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: pages === pageIn.current_page }"
        v-for="pages in pageIn.total_pages"
        :key="pages + 'pages'"
      >
        <a class="page-link" href="#" @click.prevent="getPages(pages)">{{
          pages
        }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pageIn.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getPages(pageIn.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import productsStore from "../stores/productsStore.js";
// import { mapState, mapActions } from "pinia";
export default {
  props: ["pageIn"],
  methods: {
    getPages(page) {
      this.$emit("getPages", page);
    },
  },
};
</script>
