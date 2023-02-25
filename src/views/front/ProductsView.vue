<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="title py-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >All Products
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">商品ㄧ覽</h1>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-11">
        <div
          class="d-flex align-items-center justify-content-center justify-content-md-start py-10 border-top border-bottom border-secondary mb-15"
        >
          <h3 class="fs-sm fs-md-base d-none d-md-block me-12">商品類別</h3>
          <ul class="d-flex gap-7 justify-content-center">
            <li
              class="fs-sm fs-md-base py-2 px-8 bg-secondary-light border border-secondary-dark rounded-pill"
            >
              全部
            </li>
            <li
              class="fs-sm fs-md-base py-2 px-8 bg-secondary-light border border-secondary-dark rounded-pill"
            >
              餅乾
            </li>
            <li
              class="fs-sm fs-md-base py-2 px-8 bg-secondary-light border border-secondary-dark rounded-pill"
            >
              布丁
            </li>
          </ul>
        </div>
        <ul class="row gy-13">
          <li
            class="col-6 col-lg-4 d-flex flex-column align-items-center"
            v-for="product in productList"
            :key="product.id"
          >
            <RouterLink :to="`/product/${product.id}`" class="mb-6">
              <img :src="product.imageUrl" alt="" />
            </RouterLink>
            <h2 class="font-serifTc fs-base mb-4 text-center letterSpace-2">
              {{ product.title }}
            </h2>
            <p class="font-serifTc fs-base mb-4 text-center letterSpace-2">
              NT$ {{ product.price }}
            </p>
            <button
              type="button"
              class="btn btn-primary text-secondary-light rounded-0"
              @click="addToCart(product.id)"
            >
              加入購物車
              <!-- <i
                v-if="product.id === loadingItem"
                class="fas fa-spinner fa-pulse"
              ></i> -->
              <div
                v-if="product.id === loadingItem"
                class="spinner-border text-light spinner-border-sm"
                role="status"
              >
                <span class="sr-only"></span>
              </div>
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
      @getPages="getProductList"
    ></PaginationComponent>
    <!-- <PaginationComponent></PaginationComponent> -->
  </div>
</template>
<style lang="scss">
@import "../../assets/style/all.scss";
.title {
  position: relative;
  &-sub {
    position: relative;
    line-height: 0.63;
    padding-right: 6.2vw;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: $secondary;
    }
  }
  &-main {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 8vw;
    top: 0;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>

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
      search: "",
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
    ...mapState(loadingStore, ["isLoading", "loadingItem"]),
    // ...mapState(productsStore, ["sortProducts"]),
    filterProduct() {
      return this.productList.filter((item) => {
        return item.title.match(this.search);
      });
    },
  },
  mounted() {
    this.getProductList();
  },
  components: {
    RouterLink,
    PaginationComponent,
  },
};
</script>
