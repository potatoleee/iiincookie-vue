<template>
  <!-- 影片區 end-->
  <div class="video-wrap">
    <p class="position-absolute">餅乾生產餡，呈現最美味的味。</p>
    <p class="vertical-lr scroll-down letter-spacing-2 font-english">
      Scroll Down
    </p>
    <div class="video-content d-flex justify-content-center align-items-center">
      <video
        id="videoBg"
        class="videoCanvas"
        poster=""
        playsinline
        autoplay
        loop
        muted
      >
        <source src="../../assets/video/indexVideo.mp4" type="video/mp4" />
      </video>
      <p class="vertical-rl">餅乾生產餡，呈現最美味的味。</p>
      <!-- <img
        class="position-absolute bottom-0"
        src="../../assets/images/mocha01.jpg"
        width="300"
        alt=""
      /> -->
    </div>
    <p
      class="font-serifTc position-absolute start-20 start-lg-30 top-20 fw-medium letter-spacing-2 text-white fs-base fs-lg-xl lh-lg"
    >
      你好，我們是餅乾生產餡，<br />
      致力於製作美味的甜點，<br />
      使每一個味蕾都獲得滿足。
    </p>
    <p
      class="font-serifTc position-absolute start-20 start-lg-30 top-40 fw-medium letter-spacing-2 text-white fs-base fs-lg-xl lh-lg"
    >
      因緣受到朋友委託製作餅乾，<br />
      因此挑戰了很想嘗試的鐵盒餅乾，<br />
      雖是第一次嘗試，但朋友一吃驚艷，<br />
      鼓勵我讓更多人也能品嚐得到。<br />
    </p>
    <p
      class="font-serifTc position-absolute start-20 start-lg-30 top-60 fw-medium letter-spacing-2 text-white fs-base fs-lg-xl lh-lg"
    >
      便誤打誤撞開始生產餡這個品牌 <br />
      從沒想過餅乾會成為另一份事業<br />
      人生就是這麼奇妙吧！
    </p>
    <p
      class="font-serifTc position-absolute start-20 start-lg-30 top-80 fw-medium letter-spacing-2 text-white fs-base fs-lg-xl lh-lg"
    >
      透過香甜的滋味， <br />
      幸福你的每一時刻！<br />
    </p>
  </div>
  <!-- 影片區 end-->
  <!-- about start-->
  <div class="container mb-17">
    <p class="fs-2xl font-serifTc text-center mb-9">更多有關於我們的故事</p>
    <div class="d-flex justify-content-center">
      <RouterLink
        to="/about"
        class="bg-secondary-light border border-dark py-2 px-17 rounded-pill d-inline-block btn font-english"
      >
        See More
        <i class="bi bi-arrow-up-right fs-xs ms-2"></i>
      </RouterLink>
    </div>
  </div>
  <!-- about end-->
  <!-- products intro start-->
  <div class="my-17">
    <div class="container">
      <div class="mb-13">
        <p class="fs-7xl font-english fw-light lh-sm">Products</p>
        <p class="font-serifTc fs-xl fw-medium">商品一覽</p>
      </div>
      <div
        class="row flex-column flex-md-row align-items-end align-items-md-start mb-12 mb-md-0"
      >
        <div class="col-12 col-md-5 d-flex gap-10 mb-10">
          <p class="vertical-rl line letter-spacing-4">招牌商品</p>
          <div>
            <h3 class="fs-2xl fs-lg-3xl font-serifTc py-7">伯爵巧克力夾餡</h3>
            <p>
              餅乾生產餡的logo，你有發現裡頭藏了一個栗子嗎？
              手工一個個按壓栗子造型的巧克力栗子餅乾，內餡深色的內餡，為香濃的伯爵茶香甘納許，兩者一同咬下配上一杯茶，人生一大享受呀！
            </p>
          </div>
        </div>
        <div class="col-9 col-md-6 offset-md-1">
          <div class="mask">
            <!-- <div class="mask-bg"></div> -->
            <img src="../../assets/images/chocolate01.jpg" alt="" />
          </div>
        </div>
      </div>
      <!-- <div class="w-50">
      <img src="../../assets/images/motcha02.jpg" alt="" />
    </div> -->
    </div>
    <div class="container-fluid p-0 mb-17">
      <div class="w-80 w-md-40 mt-md-m10 mt-0">
        <img src="../../assets/images/motcha02.jpg" alt="" />
      </div>
    </div>
    <div>
      <div class="container mb-17">
        <div
          class="row flex-column flex-md-row align-items-end align-items-md-start mb-12 mb-md-0"
        >
          <div class="col-12 col-md-5 d-flex gap-10 mb-10">
            <p class="vertical-rl line letter-spacing-4">季節商品</p>
            <div>
              <h3 class="fs-2xl fs-lg-3xl font-serifTc py-7">綜合鐵盒餅乾</h3>
              <p>
                綜合鐵盒餅乾，作為創業的起點，裝載了我們滿滿的用心，每一個時節會推出不一樣的口味，有鹹有甜，讓你的味蕾都得到滿足，因為很喜歡禮物收到花，包材也會去花市挑選適合的花材，希望妳收到餅乾時也能很開心！
              </p>
            </div>
          </div>
          <div class="col-11 col-md-7 ps-12 pe-0 pe-md-3">
            <div>
              <img src="../../assets/images/boxflower.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="row flex-column flex-md-row-reverse align-items-start mb-12 mb-md-0"
      >
        <div class="col-12 col-md-5 d-flex flex-row-reverse gap-10 mb-10">
          <p class="vertical-rl line letter-spacing-4">特色商品</p>
          <div>
            <h3 class="fs-2xl fs-lg-3xl font-serifTc py-7">大人味昭和布丁</h3>
            <p>
              雖然主要販售的商品餅乾，不過布丁也是我們很喜歡的品項，後來研發後也開始販售，我們的焦糖熬煮的稍苦，綜合奶香的甜味，並加入萊姆酒增添酒香，如果你也對於綿密絲滑的布丁有興趣的話，歡迎來吃看看喔！
            </p>
          </div>
        </div>
        <div class="col-11 col-md-7 pe-12">
          <img src="../../assets/images/pudding02.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- products intro end-->
  <!-- more products start-->
  <div class="bg-secondary py-17">
    <div class="container-fluid p-0">
      <div class="text-center pt-12 pb-10">
        <p class="font-english fs-7xl">More Products</p>
        <p class="font-serifTc fs-xl fw-medium">更多商品</p>
      </div>
      <div class="mb-16">
        <swiper
          :slides-per-view="2"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :space-between="24"
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
          class="swiper-index"
        >
          <swiper-slide v-for="product in productList" :key="product.id">
            <RouterLink :to="`/product/${product.id}`" class="mb-7">
              <img :src="product.imageUrl" alt="" />
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
      <div class="d-flex justify-content-center">
        <RouterLink
          to="/products"
          class="border border-dark py-2 px-17 rounded-pill d-inline-block btn font-english"
        >
          All Products
          <i class="bi bi-arrow-up-right fs-xs ms-2"></i>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- more products end-->
  <!-- news start -->
  <div class="container mb-10">
    <div class="d-flex justify-content-between align-items-center my-10">
      <div>
        <p class="fs-7xl font-english lh-sm">News</p>
        <p class="fs-xl font-serifTc">最新消息</p>
      </div>
      <RouterLink
        to="/articles"
        class="border border-dark py-2 px-17 rounded-pill d-md-inline-block btn font-english d-none"
      >
        All News
        <i class="bi bi-arrow-up-right fs-xs ms-2"></i>
      </RouterLink>
    </div>
    <div class="mb-10">
      <ul class="d-flex flex-column gap-7">
        <li v-for="article in articlesList.slice(0, 3)" :key="article.id">
          <RouterLink :to="`/article/${article.id}`">
            <div
              class="d-flex justify-content-between border-bottom border-dark border-opacity-50"
            >
              <div class="d-flex flex-column flex-md-row">
                <div class="py-7">
                  <p
                    class="fs-sm bg-secondary-dark py-2 px-3 d-inline-block mb-5 text-dark font-serifTc"
                  >
                    {{ article.tag }}
                  </p>
                  <p
                    class="fs-lg fs-lg-xl fw-medium mb-3 text-dark font-serifTc"
                  >
                    {{ article.title }}
                  </p>
                  <div>
                    <p class="text-dark text-opacity-70">
                      {{ formatDate(article.create_at) }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-end">
                <i
                  class="bi bi-arrow-up-right fs-lg pb-2 text-dark text-opacity-70"
                ></i>
              </div>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center d-md-none">
      <RouterLink
        to="/articles"
        class="border border-dark py-2 px-17 rounded-pill d-inline-block btn font-english"
      >
        All News
        <i class="bi bi-arrow-up-right fs-xs ms-2"></i>
      </RouterLink>
    </div>
  </div>
  <!-- news start -->
</template>

<style lang="scss">
@import "../../assets/style/all.scss";
.mask {
  position: relative;
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: $secondary-light;
    width: 100%;
    height: 100%;
  }
}
.mask:before {
  position: absolute;
  content: "";
  background-color: $secondary-light;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-index {
  height: 100%;
  width: 100%;
  padding: 0 10%;
}
.video-wrap {
  height: 1000vh; //可以調整這裡 改變滑動的距離
  margin-top: -84px;
  position: relative;
}
.video-content {
  height: 100vh;
  position: sticky;
  top: 0; //要給他位置
  left: 0;
}
.videoCanvas {
  width: 45em;
  height: 45em;
  object-fit: cover;
  position: absolute;
  @include phone {
    width: 80vw;
    height: 80vh;
  }
}
.scroll-down {
  position: fixed;
  right: 2vw;
  bottom: 1.25vw;
  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background-color: $secondary;
    left: 0;
    top: 0;
  }
  &::after {
    animation: scrollDown 2s ease-in-out infinite;
    position: absolute;
    content: "";
    width: 1px;
    height: 0%;
    background-color: $secondary-darker;
    left: 0;
    top: 0;
  }
  @keyframes scrollDown {
    0% {
      height: 0%;
      top: 0%;
    }
    50% {
      height: 100%;
      top: 0%;
    }
    100% {
      height: 100%;
      top: 120%;
    }
  }
}
</style>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cartStore.js";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(gsap, ScrollTrigger);
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { Toast } from "../../utils/toast.js";
import "swiper/css";
// ScrollTrigger.defaults({
//   markers: true,
// });
export default {
  data() {
    return {
      isOpen: false,
      modules: [Autoplay],
      productList: [],
      articlesList: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),

    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    },
    getProductList() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.productList = res.data.products;
          console.log(this.productList);
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getArticleList() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          console.log(res.data.articles);
          this.articlesList = res.data.articles;
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    gsap.to(".mask:before", {
      duration: 20,
      height: "0%",
    });
    this.getCartList();
    this.getProductList();
    this.getArticleList();
    this.scrollDown = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-wrap",
        start: "bottom bottom",
        scrub: true,
      },
    });
    this.scrollDown.to(".scroll-down", {
      opacity: 0,
      x: 100,
    });

    this.videoMotion = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-wrap",
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    this.videoMotion
      .to(".videoCanvas", {
        width: "90vw",
        height: "75vh",
        duration: 10,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "90vw",
        height: "75vh",
        duration: 40,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "100vw",
        height: "100vh",
        duration: 30,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "35vmin",
        height: "50vmin",
        duration: 10,
        ease: "ease",
      });

    // this.logoTop = gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".videoCanvas",
    //       // trigger element - viewport
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   })
    //   .from(".logo", {
    //     width: "80%",
    //     // scale: 5,
    //     xPercent: "-50",
    //     y: "70vh",
    //     duration: 2,
    //     opacity: 0.6,
    //     ease: "ease",
    //   });

    this.logoTop = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoCanvas",
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    this.logoTop.fromTo(
      ".logo",
      {
        width: "80%",
        // scale: 5,
        xPercent: "-50",
        y: "75vh",
        yPercent: "-50",
        duration: 2,
        opacity: 0.8,
        ease: "ease",
      },
      {
        width: "140",
        y: "0vh",
        opacity: 1,
        yPercent: "-50",
      }
    );
  },
  beforeRouteLeave(to, from, next) {
    // 在離開路由之前，暫停動畫並刪除它
    // 設定一個回到預設狀態的動畫
    const resetLogo = gsap.timeline();
    resetLogo.to(".logo", {
      width: "auto",
      y: "0vh",
      opacity: 1,
      yPercent: "-50",
      duration: 1,
      onComplete: next, // 等待動畫完成後再跳轉到目標路由頁面
    });
    this.logoTop.pause();
    this.logoTop.kill();
    next();
    // 啟動新的動畫
    resetLogo.play();
  },

  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
};
</script>
