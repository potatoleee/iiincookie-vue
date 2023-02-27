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
      <div class="col-12 mb-10">
        <div class="row">
          <div class="col-1 d-none d-lg-block">
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
              <img :src="images[activeIndex]" alt="" />
            </div>
          </div>
          <div class="d-lg-none">
            <ul class="d-flex gap-6">
              <li
                v-for="(image, index) in images"
                :key="index"
                @click="switchImage(index)"
                class="opacity-75 w-20"
                :class="{ 'opacity-100': index === activeIndex }"
              >
                <img :src="image" alt="" />
              </li>
            </ul>
          </div>
          <div class="col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <h1 class="fs-2xl font-serifTc fw-4 letterSpace-4 mb-2">
                {{ product.title }}
              </h1>
              <p class="fs-sm font-serifTc text-dark text-opacity-70 mb-6">
                {{ product.flavor }}
              </p>
              <p class="fs-xl mb-10 letterSpace-2 text-dark font-arimo">
                NT$ {{ product.price }}
              </p>
              <p class="mb-4 letterSpace-2 fw-light">
                {{ product.description }}
              </p>
            </div>

            <div>
              <div class="d-flex gap-6 mb-8">
                <div
                  class="count border border-secondary-dark d-flex justify-content-between w-100"
                >
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
                  class="d-flex align-items-center border border-secondary-dark px-3"
                >
                  <i class="bi bi-heart"></i>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary text-secondary-light w-100 py-4 rounded-0"
                  @click="addToCart(product.id, qty)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row justify-content-center justify-content-lg-start">
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
      </div> -->
    </div>

    <div class="row justify-content-lg-end">
      <div class="col-12 col-lg-5">
        <div class="w-100 h-1 bg-secondary-dark mb-10"></div>
        <p class="fw-medium mb-6">詳細資訊</p>
        <table class="table">
          <tbody>
            <tr>
              <th class="border-0 fw-regular ps-0 fs-sm" width="120">重量</th>
              <td class="border-0 fs-sm">250+-5g</td>
            </tr>
            <tr>
              <th class="border-0 fw-regular ps-0 fs-sm" width="120">內容物</th>
              <td class="border-0 fs-sm">{{ product.content }}</td>
            </tr>
            <tr>
              <th class="border-0 fw-regular ps-0 fs-sm" width="120">口味</th>
              <td class="border-0 fs-sm">{{ product.flavor }}</td>
            </tr>
            <tr>
              <th class="border-0 fw-regular ps-0 fs-sm" width="120">
                配送方式
              </th>
              <td class="border-0 fs-sm">宅配、自取</td>
            </tr>
            <tr>
              <th class="border-0 fw-regular ps-0 fs-sm" width="120">
                賞味期限
              </th>
              <td class="border-0 fs-sm">30天</td>
            </tr>
            <tr>
              <th class="border-0 fw-regular ps-0 fs-sm" width="120">
                保存方式
              </th>
              <td class="border-0 fs-sm">天氣高溫時放於冰箱</td>
            </tr>
          </tbody>
        </table>
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
          console.log(this.product);
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

  mounted() {
    this.getProduct();
  },
};
</script>
