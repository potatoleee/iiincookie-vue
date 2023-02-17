<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10">
        <ul class="row gy-6">
          <li
            class="col-6 col-lg-4 px-md-6 d-flex flex-column align-items-center"
            v-for="product in productList"
            :key="product.id"
          >
            <RouterLink :to="`/product/${product.id}`">
              <img class="rounded-2 img-fluid" :src="product.imageUrl" alt="" />
            </RouterLink>
            <h3
              class="font-serifTc fs-6 fs-md-5 mb-4 text-center letterSpace-2"
            >
              {{ product.title }}
            </h3>
            <p class="font-serifTc mb-4 text-center letterSpace-4">
              NT$ {{ product.price }}
            </p>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
            <!-- <RouterLink
              :to="`/product/${product.id}`"
              class="btn btn-outline-secondary"
              >更多細節
            </RouterLink> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-center">
    <PaginationComponent
      :pageIn="page"
      :getProductList="getProductList"
    ></PaginationComponent>
    <!-- <PaginationComponent></PaginationComponent> -->
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import PaginationComponent from "../../components/PaginationComponent.vue";
import cartStore from "../../stores/cartStore.js";
// import productsStore from "../../stores/productsStore.js";
import loadingStore from "../../stores/loadingStore.js";

import { mapState, mapActions } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      productList: [],
      page: {},
      // isLoading: false,
    };
  },
  methods: {
    getProductList(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.productList = res.data.products;
          this.page = res.data.pagination;
          console.log(this.page);
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
    // ...mapActions(productsStore, ["getProductList"]),
  },
  computed: {
    ...mapState(loadingStore, ["isLoading"]),
    // ...mapState(productsStore, ["sortProducts"]),
  },
  mounted() {
    this.getProductList();
    console.log(this.isLoading);
  },
  components: {
    RouterLink,
    PaginationComponent,
  },
};
</script>
