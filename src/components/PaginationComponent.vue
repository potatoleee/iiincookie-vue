<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: pageIn.has_pre === false }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getProductList(pageIn.current_page - 1)"
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
        <a class="page-link" href="#" @click.prevent="getProductList(pages)">{{
          pages
        }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pageIn.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getProductList(pageIn.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// import productsStore from "../stores/productsStore.js";
// import { mapState, mapActions } from "pinia";
export default {
  props: ["pageIn", "getProductList"],
  // methods: {
  //   ...mapActions(productsStore, ["getProductList"]),
  // },
  // computed: {
  //   ...mapState(productsStore, ["pageIn"]),
  // },
};
</script>
