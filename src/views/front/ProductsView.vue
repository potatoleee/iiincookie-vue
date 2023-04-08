<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      ref="splitAllProducts"
      >All Products
    </span>
    <h1
      class="title-main font-serifTc fw-black fs-xl fs-lg-3xl clip-path"
      ref="splitAllProductsCh"
    >
      商品ㄧ覽
    </h1>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div
          class="d-flex align-items-center justify-content-center justify-content-md-start py-10 border-top border-bottom border-secondary mb-15"
        >
          <h3 class="fs-sm fs-md-base d-none d-md-block me-12 font-serifTc">
            商品類別
          </h3>
          <ul class="d-flex gap-7 justify-content-center">
            <li
              class="fs-sm fs-md-base cursor-pointer cursor-pointer"
              @click="getCategory('')"
              :class="{ 'text-primary': nowCategory === '' }"
            >
              <p class="px-3 px-md-4 py-1 font-serifTc">全部</p>
            </li>
            <li
              class="fs-sm fs-md-base cursor-pointer cursor-pointer"
              @click="getCategory('餅乾')"
              :class="{ 'text-primary': nowCategory === '餅乾' }"
            >
              <p class="px-3 px-md-4 py-1 font-serifTc">餅乾</p>
            </li>
            <li
              class="fs-sm fs-md-base cursor-pointer cursor-pointer"
              @click="getCategory('布丁')"
              :class="{ 'text-primary': nowCategory === '布丁' }"
            >
              <p class="px-3 px-md-4 py-1 font-serifTc">布丁</p>
            </li>
          </ul>
        </div>
        <ul class="row gy-13">
          <li
            class="col-sm-6 col-lg-4 d-flex flex-column align-items-center"
            v-for="product in selectCategoryList"
            :key="product.id"
          >
            <div class="position-relative">
              <RouterLink :to="`/product/${product.id}`" class="mb-6 imgHover">
                <img :src="product.imageUrl" :alt="product.title" />
              </RouterLink>
              <div class="position-absolute z-2 end-4n top-4n">
                <i
                  v-if="isFavorite(product)"
                  class="bi bi-heart-fill fs-xl text-light"
                  @click="toggleFavorite(product)"
                ></i>
                <i
                  v-else
                  class="bi bi-heart fs-xl text-light"
                  @click="toggleFavorite(product)"
                ></i>
              </div>
            </div>
            <h2 class="font-serifTc fs-base mb-4 text-center letterSpace-2">
              {{ product.title }}
            </h2>
            <p class="font-serifTc fs-base mb-4 text-center letterSpace-2">
              NT$ {{ product.price }}
            </p>
            <div class="position-relative">
              <button
                type="button"
                class="btn btn-outline-primary rounded-0"
                :class="{ disabled: product.id === loadingItem }"
                @click="addToCart(product.id)"
              >
                加入購物車
              </button>
              <div
                class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-secondary-light border border-primary"
                v-if="product.id === loadingItem"
              >
                <div
                  class="spinner-border text-primary spinner-border-sm"
                  role="status"
                >
                  <span class="sr-only"></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-center py-9">
    <div>
      <ul class="d-flex align-items-center gap-7">
        <li class="page-item" :class="{ disabled: page.has_pre === false }">
          <a
            class="page-link"
            href="#"
            @click.prevent="getCategory(nowCategory, page.current_page - 1)"
          >
            <i class="bi bi-arrow-left fs-xl fs-lg-3xl"></i>
          </a>
        </li>
        <li
          class="page-item"
          :class="{
            active: pages === page.current_page,
            disabled: pages === page.current_page,
          }"
          v-for="pages in page.total_pages"
          :key="pages + 'pages'"
        >
          <a
            class="page-link font-english fs-3xl fs-lg-5xl pb-2"
            href="#"
            @click.prevent="getCategory(nowCategory, pages)"
            >{{ pages }}</a
          >
        </li>

        <li class="page-item" :class="{ disabled: !page.has_next }">
          <a
            class="page-link"
            href="#"
            @click.prevent="getCategory(nowCategory, page.current_page + 1)"
          >
            <i class="bi bi-arrow-right fs-xl fs-lg-3xl"></i>
          </a>
        </li>
      </ul>
    </div>
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
import cartStore from "../../stores/cartStore.js";
import favoriteStore from "../../stores/favoriteStore.js";
import { gsap, ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(SplitType, ScrollTrigger);
import { mapState, mapActions } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  emits: ["split-index-products"],
  data() {
    return {
      productList: [],
      page: {},
      selectCategoryList: [],
      selectCategory: "",
      nowCategory: "",
      allProducts: [],
      isLoading: false,
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
          this.isLoading = false;
        })
        .catch((error) => {
          alert(error.data.message);
        });
    },
    getAllProducts() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.allProducts = res.data.products;
          this.isLoading = false;
        })
        .catch((error) => {
          alert(error.data.message);
        });
    },

    getCategory(category, page = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`
        )
        .then((res) => {
          this.selectCategoryList = res.data.products;
          this.page = res.data.pagination;
          this.nowCategory = this.page.category;
          this.$router.push(`./products?page=${page}&category=${category}`);
        })
        .catch((error) => {
          alert(error.data.message);
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(favoriteStore, [
      "removeFavorite",
      "toggleFavorite",
      "isFavorite",
    ]),
  },
  computed: {
    ...mapState(favoriteStore, ["myFavoriteList"]),
    ...mapState(cartStore, ["loadingItem"]),
    filterProduct() {
      return this.productList.filter((item) => {
        return item.title.match(this.search);
      });
    },
    categoryProducts() {
      return this.allProducts.filter((item) =>
        item.category.match(this.selectCategory)
      );
    },
  },
  watch: {
    // 因為是陣列，所以用深層監聽
    myFavoriteList: {
      handler() {
        // localStorage只接受字串
        localStorage.setItem(
          "myFavoriteList",
          JSON.stringify(this.myFavoriteList)
        );
      },
      deep: true,
    },
  },
  mounted() {
    this.getCategory("", 1);
    this.getAllProducts();
    const splitAllProducts = this.$refs.splitAllProducts;
    const splitAllProductsCh = this.$refs.splitAllProductsCh;
    new SplitType(splitAllProducts);
    new SplitType(splitAllProductsCh);

    splitAllProductsCh.querySelectorAll(".line").forEach((line) => {
      line.style.textAlign = "end";
    });

    this.$nextTick(() => {
      gsap.fromTo(
        splitAllProductsCh.querySelectorAll(".char"),
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
        splitAllProducts.querySelectorAll(".char"),
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
  },
  updated() {
    ScrollTrigger.refresh(); //必須要加這個trigger才會正確
  },
};
</script>
