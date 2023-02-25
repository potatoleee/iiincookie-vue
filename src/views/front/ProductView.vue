<template>
  <div class="title py-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >Product Detail
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">產品細節</h1>
  </div>

  <div class="container my-md-13 my-10">
    <div class="row justify-content-center">
      <div class="col-12 mb-14">
        <div class="d-flex gap-2 mb-8">
          <a class="fw-light letterSpace-2" href="index.html">首頁</a>
          <span>/</span>
          <a class="fw-light letterSpace-2" href="product.html">商品</a>
          <span>/</span>
          <a class="fw-light letterSpace-2" href="product-content.html"
            >鐵盒餅乾</a
          >
        </div>
        <div class="row">
          <div class="col-1">
            <ul class="d-flex flex-column gap-6">
              <li
                v-for="(image, index) in images"
                :key="index"
                @click="switchImage(index)"
                class="opacity-75"
                :class="{ 'opacity-100': index === activeIndex }"
              >
                <img :src="image" alt="" />
              </li>
            </ul>
          </div>
          <div class="col-lg-6 mb-7 mb-lg-0">
            <div class="product__img">
              <img class="mb-4" :src="images[activeIndex]" alt="" />
            </div>
          </div>
          <div class="col-lg-5">
            <h1 class="fs-2xl font-serifTc fw-4 letterSpace-4 mb-4">
              {{ product.title }}
            </h1>
            <p class="fs-xl fw-light fw-4 mb-4 letterSpace-2">
              NT$ {{ product.price }}
            </p>

            <p class="text-black-90 mb-4 letterSpace-2">
              {{ product.description }}
            </p>

            <div class="d-flex gap-7 mb-8">
              <div class="count border border-secondary-dark d-flex">
                <button
                  class="btn rounded-0"
                  @click="decreaseQty"
                  :disabled="isDisabled"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <input
                  class="text-center bg-secondary-light border-0"
                  type="number"
                  min="1"
                  v-model="qty"
                  readonly
                />
                <button class="btn rounded-0" @click="addQty">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
              <div
                class="d-flex align-items-center gap-2 px-8 border border-secondary-dark"
              >
                <i class="bi bi-heart"></i>
                <p class="fs-sm">加入收藏</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-primary text-secondary-light w-100 py-4"
                @click="addToCart(product.id, qty)"
              >
                加入購物車
              </button>
            </div>
            <div class="w-100 h-1 bg-black-30 mb-7"></div>
            <p>詳細資訊</p>
            <p class="text-black-90 mb-4 letterSpace-2">重量:250+-5g</p>
            <p class="text-black-90 mb-6 letterSpace-2">
              口味：{{ product.flavor }}
            </p>
            <p class="mb-4 letterSpace-2">配送方式：宅配、自取</p>
            <p class="mb-4 letterSpace-2">
              賞味期限：開封後請冰冰箱，一個月內食用完畢。
            </p>
            <p class="letterSpace-2">
              原料成分：雞蛋，麵粉，奶油，抹茶粉，伯爵茶粉
              ，南瓜粉，紅麴粉，起司粉，凱晏辣椒粉。
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center justify-content-lg-start">
        <a
          class="text-center d-flex flex-column align-items-center col-2 offset-lg-6 transition-5s w-auto"
          href="product.html"
        >
          <div class="d-flex gap-2 mb-2">
            <div class="w-2n h-2n bg-dark"></div>
            <div class="w-2n h-2n bg-dark"></div>
            <div class="w-2n h-2n bg-dark"></div>
          </div>
          <p>back to list</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import cartStore from "../../stores/cartStore.js";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      product: {},
      activeIndex: 0,
      images: [],
      qty: 1, //必須要定義原始值
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.images = this.product.imagesUrl;
          console.log(this.product);
        });
    },
    switchImage(index) {
      // 當用戶點擊小圖時，切換至對應的大圖
      this.activeIndex = index;
    },
    addQty() {
      this.qty++;
    },
    decreaseQty() {
      if (this.qty > 1) {
        this.qty--;
      }
    },
    ...mapActions(cartStore, ["addToCart", "addNum", "decreaseNum"]),
  },
  computed: {
    // isDisabled() {
    //   return this.qty === 1;
    // },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
