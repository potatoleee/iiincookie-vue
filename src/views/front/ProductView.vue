<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      ref="splitProductDetail"
      >Product Detail
    </span>
    <h2
      class="title-main font-serifTc fw-black fs-xl fs-lg-3xl"
      ref="splitProductDetailCh"
    >
      產品細節
    </h2>
  </div>

  <div class="container my-md-13 my-10">
    <div class="justify-content-center">
      <div class="mb-10">
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
                <img :src="image" :alt="product.title" />
              </li>
            </ul>
          </div>
          <div class="col-lg-6 mb-7 mb-lg-0">
            <div class="product__img">
              <img :src="images[activeIndex]" :alt="product.title" />
            </div>
          </div>
          <div class="d-lg-none mb-7">
            <ul class="d-flex gap-6">
              <li
                v-for="(image, index) in images"
                :key="index"
                @click="switchImage(index)"
                class="opacity-75 w-20"
                :class="{ 'opacity-100': index === activeIndex }"
              >
                <img :src="image" :alt="product.title" />
              </li>
            </ul>
          </div>
          <div class="col-lg-5 d-flex flex-column justify-content-between">
            <div>
              <h1 class="fs-2xl fw-semiBold fs-xl font-serifTc fw-4 mb-2">
                {{ product.title }}
              </h1>
              <p class="fs-sm font-serifTc text-dark text-opacity-70 mb-6">
                {{ product.flavor }}
              </p>
              <p
                class="fs-xl pb-6 mb-6 text-dark font-arimo border-bottom border-dark border-opacity-20 font-serifTc"
              >
                NT$ {{ product.price }}
              </p>

              <p class="mb-6">
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
                    @click="qty--"
                    :disabled="qty === 1"
                  >
                    <i class="bi bi-dash-lg"></i>
                  </button>
                  <input
                    class="text-center bg-secondary-light w-80 border-0 text-dark"
                    type="number"
                    min="1"
                    v-model="qty"
                    readonly
                  />
                  <button class="btn rounded-0" @click="qty++">
                    <i class="bi bi-plus-lg"></i>
                  </button>
                </div>
                <div
                  class="d-flex align-items-center border border-secondary-dark cursor-pointer"
                >
                  <i
                    v-if="isFavorite(product)"
                    class="bi bi-heart-fill text-primary py-2 px-3"
                    @click="toggleFavorite(product)"
                  ></i>
                  <i
                    v-else
                    class="bi bi-heart text-dark py-2 px-3"
                    @click="toggleFavorite(product)"
                  ></i>
                </div>
              </div>
              <div class="position-relative">
                <button
                  type="button"
                  class="btn btn-primary text-secondary-light w-100 py-4 rounded-0 letter-spacing-2"
                  :class="{ disabled: product.id === loadingItem }"
                  @click="addToCart(product.id, qty)"
                >
                  加入購物車
                </button>
                <div
                  class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-primary border border-primary"
                  v-if="product.id === loadingItem"
                >
                  <div
                    class="spinner-border text-light spinner-border-sm"
                    role="status"
                  >
                    <span class="sr-only"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="productDetail" class="row justify-content-lg-end">
      <div class="col-12 col-lg-5">
        <div class="w-100 h-1 bg-dark bg-opacity-20 mb-6"></div>
        <p class="fw-medium mb-6">詳細資訊</p>
        <table class="table mb-6">
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
    <div class="text-center mb-8">
      <div class="w-100 h-1 bg-dark bg-opacity-20 mb-8"></div>
      <p class="font-english fs-2xl fs-lg-3xl">Other products</p>
      <p class="fw-medium font-serifTc fs-lg fs-lg-xl">其他商品</p>
    </div>
    <div class="mb-16">
      <swiper
        :slides-per-view="1"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        :space-between="50"
        :modules="modules"
        :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }"
      >
        <swiper-slide v-for="product in filteredProducts" :key="product.id">
          <RouterLink :to="`/product/${product.id}`" class="mb-7 imgHover">
            <img :src="product.imageUrl" :alt="product.title" />
          </RouterLink>
          <p class="fw-medium mb-2 font-serifTc">{{ product.title }}</p>
          <p
            class="fs-sm fw-medium mb-2 font-serifTc text-dark text-opacity-80"
          >
            {{ product.flavor }}
          </p>
          <p class="font-serifTc">NT$ {{ product.price }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <RouterLink
        to="/products"
        class="d-flex flex-row-reverse align-items-center gap-5"
      >
        <div class="d-flex gap-1">
          <div>
            <div
              class="w-2n h-2n bg-secondary-light border-dark border mb-1"
            ></div>
            <div class="w-2n h-2n bg-secondary-light border-dark border"></div>
          </div>
          <div>
            <div
              class="w-2n h-2n bg-secondary-light border-dark border mb-1"
            ></div>
            <div class="w-2n h-2n bg-secondary-light border-dark border"></div>
          </div>
        </div>
        <p class="fs-2xl font-english">Back To List</p>
      </RouterLink>
    </div>
  </div>

  <button
    v-if="showAddToCartBtn"
    type="button"
    class="d-md-none z-1 position-fixed bottom-0 start-0 btn btn-primary text-secondary-light w-100 py-4 rounded-0 letter-spacing-2"
    :class="{ disabled: product.id === loadingItem }"
    @click="addToCart(product.id, qty)"
  >
    加入購物車
    <div
      class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-primary border border-primary"
      v-if="product.id === loadingItem"
    >
      <div class="spinner-border text-light spinner-border-sm" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </button>
</template>

<style lang="scss">
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import LoadingComponent from "../../components/LoadingComponent.vue";
import { gsap } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(SplitType);
import "swiper/css";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import cartStore from "../../stores/cartStore.js";
import favoriteStore from "../../stores/favoriteStore.js";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      product: {},
      activeIndex: 0,
      images: [], //小圖片娶回來的陣列
      qty: 1, //定義購物車數量
      productList: [],
      modules: [Autoplay],
      routeID: "",
      isLoading: true,
      showAddToCartBtn: false, // 是否顯示加入購物車按鈕
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    LoadingComponent,
  },
  methods: {
    ...mapActions(favoriteStore, ["toggleFavorite", "isFavorite"]),
    handleScroll() {
      const productDetail = document.querySelector("#productDetail");
      const top = productDetail.getBoundingClientRect().top;
      this.showAddToCartBtn = top <= 0;
    },
    getProduct(id) {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.images = this.product.imagesUrl;
          this.activeIndex = 0;
          this.getProductList();
        });
    },
    getProductList() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.productList = this.filterCurrentProduct(
            res.data.products.reverse(),
            this.product.id
          );
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    filterCurrentProduct(products, currentProductId) {
      return products.filter((product) => product.id !== currentProductId);
    },
    switchImage(index) {
      // 當用戶點擊小圖時，切換至對應的大圖
      this.activeIndex = index;
    },
    ...mapActions(cartStore, ["addToCart", "addNum", "decreaseNum"]),
  },
  computed: {
    ...mapState(cartStore, ["loadingItem"]),
    id() {
      return this.$route.params.id;
    },
    //過濾輪播產品陣列
    filteredProducts() {
      return this.filterCurrentProduct(this.productList, this.product.id);
    },
  },
  watch: {
    id(newID) {
      this.routeID = newID;
      if (this.$route.name === "product") {
        this.getProduct(this.routeID);
      }
    },
  },
  mounted() {
    const splitProductDetail = this.$refs.splitProductDetail;
    const splitProductDetailCh = this.$refs.splitProductDetailCh;
    new SplitType(splitProductDetail);
    new SplitType(splitProductDetailCh);

    splitProductDetailCh.querySelectorAll(".line").forEach((line) => {
      line.style.textAlign = "end";
    });

    this.$nextTick(() => {
      gsap.fromTo(
        splitProductDetailCh.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1,
          duration: 0.2,
        }
      );
      gsap.fromTo(
        splitProductDetail.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1,
          duration: 0.2,
        }
      );
      const maskBgElements = document.querySelectorAll(".mask-bg");
      gsap.to(maskBgElements, {
        duration: 1,
        width: "0%",
        ease: "power3.inOut",
      });
    });
    this.routeID = this.$route.params.id;
    this.getProduct(this.routeID);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
