<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <!-- 影片區 end-->
  <div class="video-wrap">
    <p
      class="d-none d-md-block vertical-lr scroll-down letter-spacing-4 font-english"
    >
      Scroll Down
    </p>
    <p class="d-md-none scroll-down-phone letter-spacing-4 font-english">
      Scroll Down
    </p>
    <div class="video-content d-flex justify-content-center align-items-center">
      <div class="position-relative">
        <p class="position-absolute video-subTitle fs-sm fs-lg-xl font-serifTc">
          人生很難了，來一塊甜的吧！
        </p>

        <video
          @loadedmetadata="videoLoaded"
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
      </div>
    </div>
    <p
      class="font-serifTc position-absolute start-50 translate-middle-x top-20 fw-medium letter-spacing-4 text-white fs-base fs-md-2xl lh-lg w-100 d-flex justify-content-center"
    >
      你好，我們是餅乾生產餡，<br />
      致力於製作美味的甜點，<br />
      使每一個味蕾都獲得滿足。
    </p>
    <p
      class="font-serifTc position-absolute start-50 translate-middle-x top-30 fw-medium letter-spacing-4 text-white fs-base fs-md-2xl lh-lg w-100 d-flex justify-content-center"
    >
      因緣受到朋友委託製作餅乾，<br />
      因此挑戰了很想嘗試的鐵盒餅乾，<br />
      雖是第一次嘗試，但朋友一吃驚艷，<br />
      鼓勵我讓更多人也能品嚐得到。<br />
    </p>
    <p
      class="font-serifTc position-absolute start-50 translate-middle-x top-40 fw-medium letter-spacing-4 text-white fs-base fs-md-2xl lh-lg w-100 d-flex justify-content-center"
    >
      便誤打誤撞開始生產餡這個品牌 <br />
      從沒想過餅乾會成為另一份事業<br />
      人生就是這麼奇妙吧！
    </p>
    <p
      class="font-serifTc position-absolute start-50 translate-middle-x top-60 fw-medium letter-spacing-4 text-white fs-xl fs-md-7xl lh-lg text-secondary-light w-100 d-flex justify-content-center"
    >
      餅乾生產餡 <br />
      製造最驚豔的味！<br />
    </p>
  </div>
  <!-- 影片區 end-->
  <!-- about start-->
  <div class="container mb-17 index-About">
    <p
      class="fs-6xl fs-md-7xl font-english fw-light lh-sm text-center mb-17 clip-path"
      ref="splitIndexAbout"
    >
      About iiin
    </p>
    <p class="fs-2xl font-serifTc text-center mb-9">更多有關於我們的故事</p>
    <div class="d-flex justify-content-center">
      <RouterLink
        to="/about"
        class="bg-secondary-light py-2 px-17 rounded-pill d-inline-block btn btn-outline-dark hover-text-primary hover-border-primary font-english"
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
        <p
          class="fs-6xl fs-md-7xl font-english fw-light lh-sm clip-path"
          ref="splitIndexProducts"
        >
          Products
        </p>
        <p
          class="font-serifTc fs-lg fs-md-xl fw-medium clip-path"
          ref="splitIndexProductsCh"
        >
          商品一覽
        </p>
      </div>
      <div
        class="row flex-column flex-md-row align-items-end align-items-md-start mb-md-0 pb-17"
      >
        <div class="col-12 col-md-5 d-flex gap-10 mb-10">
          <p class="vertical-rl lines letter-spacing-4">招牌商品</p>
          <div>
            <h3
              class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 letter-spacing-2 clip-path"
              ref="myText1"
            >
              夾餡系列餅乾
            </h3>
            <p class="mb-2">
              餅乾生產餡的logo，你有發現裡頭藏了一個栗子嗎？
              手工一個個按壓栗子造型的巧克力栗子餅乾，夾入深色的伯爵茶甘納許內餡，除了濃郁巧克力外，增添一些佛手柑香氣，新朋友這款絕對不要錯過！
            </p>
            <p>
              另一款為小山園抹茶夾餡餅乾，綠葉造型的抹茶壓模餅乾，夾入小山園抹茶甘納許夾餡，一口咬下抹茶香味於口中跳起日本舞踊，喜歡抹茶的朋友來一塊吧！
            </p>
          </div>
        </div>
        <div class="col-9 col-md-6 offset-md-1">
          <RouterLink
            :to="`/product/-NP0AnAL2jwTR1ULnW_V`"
            class="imgHover mask"
          >
            <div class="mask-bg"></div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678759838512.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Wj3ExWAXlZp4063bH3EYYO4qi2a7xP9gayJTFwNkoTv1XLJEJh%2FChHMkjyIA1T0Cv%2Fc0yxun67LEZFSYzM7btpuZ2LVfw%2BgsvLqb2JrC6nPngeFZwx90coEqKE%2FvaqL3%2Bo25dPtVp1lBc9NJMwpPud1NjaZXRgpC5HlWvrHQ6zYYE%2FiRB5AQklVQltBDPzTZHdTSH7cyBHYnsu5%2FGwj6J47ThZ%2Fh%2Bm25q4y6vC%2FMFjNkUH%2BGYzMFOR5qK0flc8%2FDtUHhZYJwo7YhdCSC%2FrRy1jDLkKtcvWerl0hC0K%2FcvnhnTo1kVLyuALzxO67ghpM70RRsGkdaZL9moP3TPTZ1wA%3D%3D"
              alt=""
            />
          </RouterLink>
        </div>
      </div>
      <!-- <div class="w-50">
      <img src="../../assets/images/motcha02.jpg" alt="" />
    </div> -->
    </div>
    <div class="container-fluid p-0 mb-17">
      <div class="w-80 w-md-40 mt-md-m10 mt-0">
        <RouterLink :to="`/product/-NOhssrBueALw3krYCOv`" class="imgHover mask">
          <div class="mask-bg"></div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678760260375.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J0xfHnX%2FcMxXd8z3Nubhmjq6jbDnO%2FUTQ%2F%2FtMYXT1RU789510uwQVMoqt0NP1UziDDKS3YiKOlgeFDIzk0vZLJljN%2B0CwU6hdjz4kafrdwzBZ%2BYrqPkIsE4NhNOpZ5zSpC3chwgKgxz%2FhXaGCf%2BoZFCBr7X%2FO2vMIGM7%2FxLJ2XGCuZVejyDfLumZLMK4IahFWh54MuPkNK5niKN0eIwAjN6uctA1Jz01yTyb4KmtAgmj%2Bp2ImF09qSKfLErXEncv8tBXgxpVRuGJ7LyDh9DBol6RrvZSeF72XofLvEngPOltJdTVCvT3ZFNpgPd8SEvaP5rlPSog4XBSAA2E6wHQaA%3D%3D"
            alt=""
          />
        </RouterLink>
      </div>
    </div>
    <div>
      <div class="container mb-17">
        <div
          class="row flex-column flex-md-row align-items-end align-items-md-start mb-12 mb-md-0"
        >
          <div class="col-12 col-md-5 d-flex gap-10 mb-10">
            <p class="vertical-rl lines letter-spacing-4">季節商品</p>
            <div>
              <h3
                class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 clip-path"
                ref="myText2"
              >
                綜合鐵盒餅乾
              </h3>
              <p>
                綜合鐵盒餅乾，作為創業的起點，裝載了我們滿滿的用心，每一個時節會推出不一樣的口味，有鹹有甜，讓你的味蕾都得到滿足，因為很喜歡禮物收到花，包材也會去花市挑選適合的花材，希望妳收到餅乾時也能很開心！
              </p>
            </div>
          </div>
          <div class="col-11 col-md-7 ps-12 pe-0 pe-md-3">
            <RouterLink
              :to="`/product/-NNoPpESEU2t5wqzeHr3`"
              class="imgHover mask"
            >
              <div class="mask-bg"></div>
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678760490256.JPG?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CHLnOCv8b0K71K1rAL%2FZAYdMZM6BafwIlky6AE6ICD%2BNWXFSZIyis8pZJdubTt%2BgbFVjpvfSo8pNRYulZbrIC3%2BahlnjmIOrBFANo%2FJXDNLZwPQ5506kxEhKQnHLNX3wmBk4U9HDaXwT9lV5a%2Bndwm5U9GgRFv6o%2FXIHsUG9UCIV%2F8TJoF1qFGimbxMa4x8HRJtlqUxSwyY1TlbagEJeGAJCpmfCg31bjmqZ9ZfMut1UTKsCyF%2Ftqnf%2B3SgEKusmjwoFp3ACTo3ImGemyv%2Bj7SZLPAr%2FRg2Hsjqt3Z9h3%2Bt%2B93lASSuhhgDwWJPZPqtcA%2FIgGmD65hbiJWa89gqHqg%3D%3D"
                alt=""
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="row flex-column flex-md-row-reverse align-items-start mb-12 mb-md-0"
      >
        <div class="col-12 col-md-5 d-flex flex-row-reverse gap-10 mb-10">
          <p class="vertical-rl lines letter-spacing-4">特色商品</p>
          <div>
            <h3
              class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 clip-path"
              ref="myText3"
            >
              大人味焦糖布丁
            </h3>
            <p>
              雖然主要販售的商品餅乾，不過布丁也是我們很喜歡的品項，後來研發後也開始販售，我們的焦糖熬煮的稍苦，綜合奶香的甜味，並加入萊姆酒增添酒香，如果你也對於綿密絲滑的布丁有興趣的話，歡迎來吃看看喔！
            </p>
          </div>
        </div>
        <div class="col-11 col-md-7 pe-12">
          <RouterLink
            :to="`/product/-NOcKHRyaTxdK1_ZJJHq`"
            class="imgHover mask"
          >
            <div class="mask-bg"></div>
            <img
              class="d-none d-lg-block"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678761911221.JPG?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cfU4iq0JgtoN6QYivwb7LoDaqX4n9Dk9QOEPTCJTsuotezm%2BOMxzeqwWDaupAa3PsVCR1p39VJdqM1hAp8YifA7orW4NDFqUiZGidZuu8UrxKs5Eml8QbWqjMRwoJAmhFzCw8wQzrDW%2F2k8SCVt%2BTnDz%2BZotIB5UIQhlnPuY1Q%2BkAKRdoHYCOwkvkx8AGqs6WZMuGwdajHg6jjwTj9JzSPSgVSQxeLgrqCTQBrpzOmDUGT56fOWu%2Fzlz4VPRdGHUCukBYcN2TEHwKE3mDIeUp5Fa0%2BdwLu0OnQDD9vOUaAVGRjkbMN2dxjKcvCuiXEI3Hrr0VjYZ59%2Fa4GM0sxAI4Q%3D%3D"
              alt=""
            />
          </RouterLink>
          <RouterLink
            :to="`/product/-NOcKHRyaTxdK1_ZJJHq`"
            class="imgHover mask"
          >
            <div class="mask-bg"></div>
            <img
              class="d-lg-none"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678762743183.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Kz9JxZKYDBZ%2BjNFRCxPYV8UeIskjVO9g6qn16CJZ7wxTCw8v1CSAVZb3%2F4Kta4%2B8UEY9tRX%2BFQx21MfooWlYgwCOSG24i%2FI12K5uyYXTtdPzAxnXwBba3CgQtf%2B%2FU54jCXqtYTgRutKZlNpiibLMUv7jNTIolD92UOR57Yw5I%2Fw8FamxRgCu7HoPOBDI0XcE6RXAYOSXOnLhwcXZQ94m2DZITAnpP0rMVfNBhND8d33X%2BHPrT46mUGe3Xv0QyH6C7zaPlkVlREY%2FSk0m1ecyyvD5ziuSwK8iqCuiB%2FgHEZPsAUltOTO168pD2hY%2FpxokLxAwh8S9Cq8OAprOkB8wKw%3D%3D"
              alt=""
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- products intro end-->
  <!-- more products start-->
  <div class="bg-secondary py-17">
    <div class="container-fluid p-0">
      <div class="text-center pt-12 pb-10">
        <p
          class="font-english fs-5xl fs-md-7xl clip-path"
          ref="splitIndexMoreProducts"
        >
          More Products
        </p>
        <p
          class="font-serifTc fs-lg fs-md-xl fw-medium clip-path"
          ref="splitIndexMoreProductsCh"
        >
          更多商品
        </p>
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
            <RouterLink :to="`/product/${product.id}`" class="mb-7 imgHover">
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
          class="py-2 px-17 rounded-pill d-inline-block bg-secondary btn btn-outline-dark hover-text-primary hover-border-primary font-english"
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
        <p
          class="fs-6xl fs-md-7xl font-english lh-sm clip-path"
          ref="splitIndexNews"
        >
          News
        </p>
        <p class="fs-lg fs-md-xl font-serifTc clip-path" ref="splitIndexNewsCh">
          最新消息
        </p>
      </div>
      <RouterLink
        to="/articles"
        class="py-2 px-17 rounded-pill d-md-inline-block btn bg-secondary-light btn-outline-dark hover-text-primary hover-border-primary font-english d-none"
      >
        All News
        <i class="bi bi-arrow-up-right fs-xs ms-2"></i>
      </RouterLink>
    </div>
    <div class="mb-10">
      <ul class="d-flex flex-column gap-7">
        <li v-for="article in articlesList.slice(0, 3)" :key="article.id">
          <RouterLink :to="`/article/${article.id}`" class="hover-text-primary">
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
                  <p class="fs-lg fs-lg-xl fw-medium mb-3 font-serifTc">
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
  // width: 80vw;
  // height: 45vh;
  object-fit: cover;
  @include phone {
    width: 80vw;
    height: 80vh;
  }
}
.video-subTitle {
  top: -30px;
  // width: 100%;
}
.scroll-down {
  position: fixed;
  right: 2vw;
  bottom: 1.25vw;
  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 150%;
    background-color: $secondary;
    left: -2px;
    top: 0;
  }
  &::after {
    animation: scrollDown 2s ease-in-out infinite;
    position: absolute;
    content: "";
    width: 1px;
    height: 0%;
    background-color: $secondary-darker;
    left: -2px;
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
  &-phone {
    position: fixed;
    right: 4vw;
    bottom: 1.25vw;
    &::before {
      position: absolute;
      content: "";
      width: 1px;
      height: 150%;
      background-color: $secondary;
      right: -2px;
      top: 0;
    }
    &::after {
      animation: scrollDown 2s ease-in-out infinite;
      position: absolute;
      content: "";
      width: 1px;
      height: 0%;
      background-color: $secondary-darker;
      right: -2px;
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
}
.index-About {
  transform: translateY(-130%);
}
</style>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { mapState, mapActions } from "pinia";
import LoadingComponent from "../../components/LoadingComponent.vue";
import cartStore from "../../stores/cartStore.js";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitType, ScrollTrigger);
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { Toast } from "../../utils/toast.js";
import SplitType from "split-type";
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
      isLoading: true,
      isFirstLoad: false,
    };
  },

  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    videoLoading() {
      console.log("影片載入中");
      this.isLoading = true;
      // setTimeout(() => {
      //   this.isLoading = false;
      // }, 5000);
    },

    videoLoaded() {
      console.log("影片載入完畢");
      setTimeout(() => {
        this.isLoading = false;
      }, 8000);
    },
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
          this.isLoading = false;
        })
        .catch((error) => {
          alert(error.data.message);
        });
    },
    getArticleList() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          this.articlesList = res.data.articles;
          this.isLoading = false;
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
    LoadingComponent,
  },

  mounted() {
    // ScrollTrigger.refresh();

    const splitIndexAbout = this.$refs.splitIndexAbout;
    const splitIndexProducts = this.$refs.splitIndexProducts;
    const splitIndexProductsCh = this.$refs.splitIndexProductsCh;
    const myText1 = this.$refs.myText1;
    const myText2 = this.$refs.myText2;
    const myText3 = this.$refs.myText3;
    const splitIndexMoreProducts = this.$refs.splitIndexMoreProducts;
    const splitIndexMoreProductsCh = this.$refs.splitIndexMoreProductsCh;
    const splitIndexNews = this.$refs.splitIndexNews;
    const splitIndexNewsCh = this.$refs.splitIndexNewsCh;

    new SplitType(splitIndexAbout);
    new SplitType(splitIndexProducts);
    new SplitType(splitIndexProductsCh);

    new SplitType(myText1);
    new SplitType(myText2);
    new SplitType(myText3);
    new SplitType(splitIndexMoreProducts);
    new SplitType(splitIndexMoreProductsCh);
    new SplitType(splitIndexNews);
    new SplitType(splitIndexNewsCh);

    this.$nextTick(() => {
      const maskBgElements = document.querySelectorAll(".mask-bg");
      maskBgElements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "center bottom",
            refreshPositions: true,
          },
          duration: 1,
          width: "0%",
          ease: "power3.inOut",
        });
      });

      gsap.to(splitIndexAbout.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexAbout,
          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(myText1.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: myText1,
          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(myText2.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: myText2,
          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(myText3.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: myText3,
          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(splitIndexMoreProducts.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexMoreProducts,

          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(splitIndexMoreProductsCh.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexMoreProductsCh,

          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });

      gsap.to(splitIndexProducts.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexProducts,

          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(splitIndexProductsCh.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexProductsCh,

          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(splitIndexNews.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexNews,

          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
      gsap.to(splitIndexNewsCh.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: splitIndexNewsCh,

          start: "bottom bottom",
        },
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    });

    gsap.to(".video-subTitle", {
      scrollTrigger: {
        trigger: ".videoCanvas",
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      height: 0,

      duration: 0.1,
    });
    this.scrollDown = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-wrap",
        start: "bottom-=500 bottom",

        scrub: true,
      },
    });
    this.scrollDown.to(".scroll-down", {
      opacity: 0,
      x: 100,
    });

    this.scrollDown = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-wrap",
        start: "bottom-=500 bottom",
        scrub: true,
      },
    });
    this.scrollDown.to(".scroll-down-phone", {
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
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    this.videoMotion
      .to(".videoCanvas", {
        // width: "90vw",
        width: mediaQuery.matches ? "100vw" : "90vw", // 如果是手機版則使用100vw，否則使
        height: "75vh",
        duration: 2,
        ease: "cubic-bezier(.5, .1, .2, 1)",
      })
      .to(".videoCanvas", {
        // width: "90vw",
        width: mediaQuery.matches ? "100vw" : "90vw", // 如果是手機版則使用100vw，否則使用90vw
        height: "75vh",
        duration: 40,
        ease: "none",
      })
      .to(".videoCanvas", {
        width: "100vw",
        height: "100vh",
        duration: 5,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "100vw",
        height: "100vh",
        duration: 20,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "45vmin",
        height: "50vmin",
        duration: 10,
        ease: "ease",
      });

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
    this.getCartList();
    this.getProductList();
    this.getArticleList();
    // this.videoLoading();
  },
  updated() {
    ScrollTrigger.refresh(); //必須要加這個trigger才會正確
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
