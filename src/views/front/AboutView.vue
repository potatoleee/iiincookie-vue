<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >About iiin
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">關於我們</h1>
  </div>

  <div class="container mb-17">
    <div class="row justify-content-end mb-12 mb-md-0">
      <div class="col-12 col-lg-5 d-flex flex-row gap-10 mb-10">
        <p class="vertical-rl lines letter-spacing-4">品牌由來</p>
        <div>
          <h3 class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7">
            品牌的小故事
          </h3>
          <p>
            製造夾餡餅乾的過程一個步驟接著一個步驟，很像製造的生產線，藉此取了諧音＿餅乾生產餡。並在Logo右下角放上招牌栗子造型～
            品牌英文名稱iiicookie的小巧思：iiin跟男友兩位名字都有穎，以英文諧音in為發想，覺得三個i有拉長音可愛的感覺，所以唸法為「穎～穎～cookie
            」。
          </p>
        </div>
      </div>
      <div class="col-11 col-lg-7 ps-11">
        <div class="mask">
          <div class="mask-bg"></div>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678806137926.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bLNjkCW8gCTf9YLVS2b3S6pLJwRhGw4DdjtnKZwSqApzsghT%2Bl3kj%2BVIN6LELfhqOSGh3GV3birPpVGVA5EF5%2BeqORIPt2LPhAXYZvtDFzLWYr%2BLefglqk1k%2F%2FRn64TNXbcV4PWr%2BF%2Bk7LW%2BFWXK2Vhb6XPZw0SrlJZSUNwbkZjuBc7%2FgmOMeFlW0i6lgNT2hagkJ7DuN2ZUttn5h3%2B%2BEh16r6SSKOl8VVfuPKgrNVQvE2euuCEymIVLqaRWs2T7oGk1uWl1%2FW5Zqvy%2FOGed7QJVlmEHwD7gTiUmDK7sF4E%2FeGMOX126VJc1mpBWUkX%2FczDH2fHtXRGLBX%2FhJU%2B8IA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container py-17">
    <p class="font-english fs-3xl fs-lg-5xl text-center">Contact</p>
    <a
      class="fs-xl fs-lg-5xl text-center font-serifTc"
      href="https://www.instagram.com/iiin.cookies/"
      target="_blank"
    >
      聯絡我們請往 instagram
    </a>
  </div>

  <div class="my-17">
    <div class="container">
      <div class="mb-13">
        <p class="fs-6xl fs-md-7xl font-english fw-light lh-sm">Products</p>
        <p class="font-serifTc fs-lg fs-md-xl fw-medium">商品一覽</p>
      </div>
      <div
        class="row flex-column flex-md-row align-items-end align-items-md-start mb-md-0 pb-17"
      >
        <div class="col-12 col-md-5 d-flex gap-10 mb-10">
          <p class="vertical-rl lines letter-spacing-4">招牌商品</p>
          <div>
            <h3
              class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 letter-spacing-2 clip-path split-text"
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
            scrollTrigger="mask"
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
        <RouterLink
          :to="`/product/-NOhssrBueALw3krYCOv`"
          class="imgHover mask"
          scrollTrigger="mask"
        >
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
                class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 clip-path split-text"
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
              scrollTrigger="mask"
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
              class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 clip-path split-text"
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
            scrollTrigger="mask"
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
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import favoriteStore from "../../stores/favoriteStore.js";
import loadingStore from "../../stores/loadingStore.js";
import { gsap, ScrollTrigger } from "gsap/all";

import { mapState, mapActions } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      productList: [],
      page: {},
      selectCategoryList: [],
      selectCategory: "",
      nowCategory: "",
      allProducts: [],
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
          console.log(res.data);
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getAllProducts() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res.data.products);
          this.allProducts = res.data.products;
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    getCategory(category, page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`
        )
        .then((res) => {
          console.log("相似類別全部", res.data.products);

          this.selectCategoryList = res.data.products;
          this.page = res.data.pagination;
          this.nowCategory = this.page.category;
          console.log(this.nowCategory);
          console.log(this.page);
          console.log(this.page.category);
          console.log(res);
          this.$router.push(`./products?page=${page}&category=${category}`);
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(favoriteStore, [
      "removeFavorite",
      "toggleFavorite",
      "isFavorite",
    ]),
    // ...mapActions(productsStore, ["getProductList"]),
  },
  computed: {
    ...mapState(loadingStore, ["isLoading", "loadingItem"]),
    ...mapState(favoriteStore, ["myFavoriteList"]),
    // ...mapState(productsStore, ["sortProducts"]),
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
  mounted() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event("resize"));
      gsap.registerPlugin(ScrollTrigger);
      const maskList = gsap.utils.toArray(".mask");
      const maskBgElements = document.querySelectorAll(".mask-bg");
      const maskBgArray = gsap.utils.toArray(maskBgElements);
      console.log(maskList);
      maskBgArray.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            markers: true,
            refreshPositions: true,
          },
          duration: 1,
          width: "0%",
          ease: "power3.inOut",
        });
      });
      gsap.to(".mask-bg", {
        duration: 1,
        width: "0%",
        ease: "power3.inOut",
        delay: 2,
      });
    });
  },
  updated() {
    ScrollTrigger.refresh();
  },
};
</script>
