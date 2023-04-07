<template>
  <!-- 我的最愛視窗 -->
  <DeleteAllModal
    ref="deleteAllModalFavorites"
    :message="'請問你要刪除收藏列表中全部商品嗎？'"
    @deleteConfirm="clearFavorites"
  ></DeleteAllModal>
  <DeleteAllModal
    ref="deleteAllModalCart"
    :message="'請問你要刪除購物車中全部商品嗎？'"
    @deleteConfirm="deleteAllCartItem"
  ></DeleteAllModal>
  <!-- 我的最愛 start-->
  <div
    class="offCanvas-cart w-100 w-md-80 w-lg-50"
    :class="{ open: showFavorites }"
  >
    <div class="position-relative h-100 d-flex flex-column">
      <div class="pt-7 px-5 px-lg-7">
        <div class="d-flex justify-content-between align-items-center mb-6">
          <div
            class="d-flex align-items-center gap-2 cursor-pointer"
            @click="toggleFavorites"
          >
            <i class="bi bi-chevron-left fs-xl"></i>
            <p>返回</p>
          </div>

          <button
            v-if="myFavoriteList.length > 0"
            class="btn btn-outline-dark py-1 px-2 text-opacity-50 border-opacity-50"
            @click="openDeleteAllModalFavorites"
          >
            清除全部
          </button>
        </div>
        <h3
          class="font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"
        >
          收藏品項
        </h3>
      </div>
      <div
        v-if="myFavoriteList.length === 0"
        class="d-flex justify-content-center align-items-center h-80 flex-column gap-5"
      >
        <p>目前尚無任何收藏項目</p>
        <RouterLink to="/products">
          <button class="btn btn-primary text-light" @click="toggleFavorites">
            去看看好吃的！
          </button>
        </RouterLink>
      </div>
      <ul class="overflow-y-auto h-100 pb-17 px-5 px-lg-7">
        <li v-for="(favorite, index) in myFavoriteList" :key="favorite.id">
          <div
            class="d-flex py-7 gap-3 border-bottom border-dark border-opacity-40"
          >
            <img class="w-20n" :src="favorite.imageUrl" :alt="favorite.title" />
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-md-lg font-serifTc">{{ favorite.title }}</p>

                <i
                  class="bi bi-x-lg fs-lg fs-md-xl cursor-pointer"
                  @click="removeFavorite(index)"
                ></i>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <p class="font-arimo">NT$ {{ favorite.price }}</p>
                <i
                  class="bi bi-bag fs-xl fs-md-xl cursor-pointer"
                  @click="addToCart(favorite.id)"
                ></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div
        v-if="myFavoriteList.length > 0"
        class="d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"
      >
        <div>
          <p>收藏品項｜{{ myFavoriteList.length }}項</p>
        </div>
        <RouterLink to="/cart">
          <button class="btn btn-primary text-light" @click="toggleFavorites">
            購物車
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <div
    class="overlay"
    :class="{ open: showFavorites }"
    @click="toggleFavorites"
  ></div>
  <!-- 我的最愛 end-->

  <!-- 購物車預覽 start -->
  <div class="offCanvas-cart w-100 w-md-80 w-lg-50" :class="{ open: showCart }">
    <div class="position-relative h-100 d-flex flex-column">
      <div class="pt-7 px-5 px-lg-7">
        <div class="d-flex justify-content-between align-items-center mb-6">
          <div
            class="d-flex align-items-center gap-2 cursor-pointer"
            @click="toggleCart"
          >
            <i class="bi bi-chevron-left fs-xl"></i>
            <p>返回</p>
          </div>

          <button
            v-if="totalQty > 0"
            class="btn btn-outline-dark py-1 px-2 text-opacity-50 border-opacity-50"
            @click="openDeleteAllModalCart"
          >
            清除全部
          </button>
        </div>
        <h3
          class="font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"
        >
          購物車預覽
        </h3>
      </div>
      <div
        v-if="totalQty === 0"
        class="d-flex justify-content-center align-items-center h-80 flex-column gap-5"
      >
        <p>目前購物車上無產品</p>
        <RouterLink to="/products">
          <button class="btn btn-primary text-light" @click="toggleCart">
            去看看好吃的！
          </button>
        </RouterLink>
      </div>
      <ul class="overflow-y-scroll h-100 pb-17 px-5 px-lg-7">
        <li v-for="cartItem in cartList.carts" :key="cartItem.id">
          <div
            class="d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"
          >
            <img
              class="w-20n"
              :src="cartItem.product.imageUrl"
              :alt="cartItem.product.title"
            />
            <div class="w-100 d-flex flex-column justify-content-between">
              <div
                class="d-flex justify-content-between align-items-start font-serifTc fs-md-lg"
              >
                <p>{{ cartItem.product.title }}</p>

                <i
                  class="bi bi-x-lg fs-lg fs-md-xl cursor-pointer"
                  @click="deleteCartItem(cartItem)"
                  :disabled="cartItem.id === loadingItem"
                ></i>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <p class="font-arimo">NT$ {{ cartItem.product.price }}</p>
                <div
                  class="count d-flex justify-content-between border border-dark border-opacity-40"
                >
                  <button
                    @click="decreaseNum(cartItem)"
                    class="btn rounded-0 py-1 px-2"
                    :class="{
                      disabled: cartItem.qty == 1,
                      'border-0': cartItem.qty === 1,
                    }"
                  >
                    <i class="bi bi-dash-lg"></i>
                  </button>
                  <input
                    class="text-center bg-secondary border-0 w-8n w-lg-12n"
                    type="number"
                    v-model="cartItem.qty"
                    readonly
                  />
                  <button
                    class="btn rounded-0 py-1 px-2"
                    @click="addNum(cartItem)"
                  >
                    <i class="bi bi-plus-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div
        v-if="totalQty > 0"
        class="d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"
      >
        <div>
          <p>總金額</p>
          <p>NT$ {{ cartList.total }}</p>
        </div>
        <RouterLink to="/cart">
          <button class="btn btn-primary text-light" @click="toggleCart">
            前往結帳
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="overlay" :class="{ open: showCart }" @click="toggleCart"></div>
  <!-- 購物車預覽 end -->
  <!-- 導覽列 -->
  <header>
    <div class="menu-btn" @click="toggleMenu" :class="{ open: isOpen }"></div>
    <div
      class="container-fluid d-flex w-100 justify-content-between align-items-center position-fixed top-0 left-0 z-3 py-7 px-7 header"
      :class="{ 'bg-secondary-light': isHeaderBackgroundVisible }"
    >
      <RouterLink to="/" exact native>
        <img class="logo" src="../assets/images/logo.svg" alt="餅乾生產餡" />
      </RouterLink>
      <div class="d-flex align-items-center gap-5">
        <div class="position-relative cursor-pointer" @click="toggleFavorites">
          <i class="bi bi-heart fs-xl fs-md-2xl"> </i>
          <span
            v-if="myFavoriteList.length > 0"
            class="badge bg-primary text-light position-absolute top-0 start-100 translate-middle"
            >{{ myFavoriteList.length }}</span
          >
        </div>
        <!-- 購物車icon -->
        <div
          v-if="!$route.meta.hideCartIcon"
          class="position-relative cursor-pointer"
          @click="toggleCart"
        >
          <i class="bi bi-bag fs-xl fs-md-2xl"></i>
          <span
            v-if="totalQty > 0"
            class="badge bg-primary text-light position-absolute top-0 start-100 translate-middle"
            >{{ totalQty }}</span
          >
        </div>
      </div>
    </div>
    <!-- 導覽列展開內容 -->
    <nav class="position-relative">
      <div class="images">
        <span ref="bg1" class="bg bg1"></span>
        <span ref="bg2" class="bg bg2"></span>
        <span ref="bg3" class="bg bg3"></span>
      </div>
      <div class="menu">
        <ul class="d-flex flex-column gap-14">
          <RouterLink to="/about">
            <li
              @mouseenter="toggleShow('bg1')"
              @mouseleave="toggleShow('bg1')"
              @click="toggleMenu"
            >
              <p class="fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm">ABOUT</p>
              <p class="fs-2xl font-serifTc fw-medium">關於我們</p>
            </li>
          </RouterLink>
          <RouterLink to="/products" class="menu-item-2">
            <li
              @mouseenter="toggleShow('bg2')"
              @mouseleave="toggleShow('bg2')"
              @click="toggleMenu"
            >
              <p class="fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm">
                PRODUCTS
              </p>
              <p class="fs-2xl font-serifTc fw-medium">產品ㄧ覽</p>
            </li>
          </RouterLink>
          <RouterLink to="/articles" class="menu-item-3">
            <li
              @mouseenter="toggleShow('bg3')"
              @mouseleave="toggleShow('bg3')"
              @click="toggleMenu"
            >
              <p class="fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm">NEWS</p>
              <p class="fs-2xl font-serifTc fw-medium">最新消息</p>
            </li>
          </RouterLink>
        </ul>
      </div>
    </nav>
    <!-- 導覽列展開內容 -->
  </header>
  <!-- 導覽列 -->

  <!-- 主要內容 -->
  <main class="mb-16">
    <RouterView @split-index-products="onSplitIndexProducts"></RouterView>
  </main>
  <!-- 主要內容 -->
  <!-- footer -->
  <footer
    class="footer mt-auto bg-secondary-dark container-fluid py-12 px-7 pt-lg-15 position-relative"
  >
    <div>
      <div
        class="d-flex justify-content-between align-items-center flex-column flex-md-row gap-7"
      >
        <div class="d-flex gap-7">
          <RouterLink class="font-english fs-sm text-dark" to="/products"
            >Products</RouterLink
          >
          <RouterLink class="font-english fs-sm text-dark" to="/about"
            >About</RouterLink
          >
          <RouterLink class="font-english fs-sm text-dark" to="/articles"
            >News</RouterLink
          >
        </div>
        <div class="d-flex gap-7 align-items-center flex-column flex-md-row">
          <div class="d-flex gap-4">
            <a
              class="font-english fs-sm"
              href="https://www.instagram.com/iiin.cookies/"
              target="_blank"
            >
              Instagram
            </a>
            <span class="font-english fs-sm">|</span>
            <RouterLink class="font-english fs-sm" to="/login"
              >Admin</RouterLink
            >
          </div>
          <p class="font-english fs-sm">
            © 2023 iiincookie All Rights Reserved
          </p>
        </div>
      </div>
      <p
        class="vertical-lr scroll-top letter-spacing-4 font-english cursor-pointer"
        @click="scrollToTop"
      >
        To Top
      </p>
    </div>
  </footer>
  <!-- footer -->
  <!-- </div> -->
</template>

<style lang="scss">
@import "../assets/style/all.scss";

.scroll-top {
  position: absolute;
  right: 2vw;
  top: -28px;
  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 150%;
    background-color: $secondary-darker;
    left: -2px;
    bottom: 0;
  }
  &::after {
    animation: scrollUp 2s ease-in-out infinite;
    position: absolute;
    content: "";
    width: 1px;
    height: 0%;
    background-color: $secondary-light;
    left: -2px;
    bottom: 0;
  }
  @keyframes scrollUp {
    0% {
      height: 0%;
      bottom: 0%;
    }
    50% {
      height: 100%;
      bottom: 0%;
    }
    100% {
      height: 100%;
      bottom: 120%;
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(27, 24, 23, 0.5);
  z-index: 3;
  transform: translateX(-100%);
  transition: all 0.3s;
  &.open {
    transform: translateX(0%);
  }
}
.offCanvas-favorite {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: $secondary;
  z-index: 7;
  transform: translateX(100%);
  transition: all 0.3s;
  &.open {
    transform: translateX(0%);
  }
}
.offCanvas-cart {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background-color: $secondary;
  z-index: 7;
  transform: translateX(100%);
  transition: all 0.3s;
  &.open {
    transform: translateX(0%);
  }
}

// 漢堡start
.menu-btn {
  position: fixed;
  width: 28px;
  height: 28px;
  cursor: pointer;
  top: 28px;
  left: 24px;
  z-index: 6;
  @include phone {
    width: 24px;
    height: 24px;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 28px;
    height: 1px;
    background-color: black;
    transition: all 0.5s;
    @include phone {
      width: 24px;
    }
  }
  &::before {
    top: 8px;
  }
  &::after {
    bottom: 8px;
  }
  &.open {
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
// 漢堡end

.menu {
  position: fixed;
  width: 0%;
  height: 100vh;
  top: 0;
  left: 0;
  background: $secondary-dark;
  z-index: 3;

  ul {
    position: absolute;
    top: 50%;
    left: 12%;
    transform: translate(0, -50%);
    cursor: pointer;
    @include pad {
      left: 5%;
    }
    @include phone {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    li {
      color: #594637;
      display: block;
      &:hover {
        color: #a66f2c;
        transition: 1s;
      }
    }
  }
}
.logo {
  position: absolute;
  width: 130px;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  @include phone {
    width: 110px;
  }
}
.images {
  position: fixed;
  z-index: 4;
  width: 0%;
  height: 100vh;
  top: 0;
  left: 55%;
  background: url("https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678957076671.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qQ93WeCWbTqba%2FZxYxSotd1pvJc1oirol6GzI6obSmapb6faqRsHKH5%2FoKHhVOmsFXKnDyXpvGHR3CFtsElnTYM6TXufXYw6b4WT3ycW0P59pkbcOrhQrNTrjl1M3qK%2Fvs59zsxniLB7e3bjjRyI%2BjBkMAEfPO6U9AoigSzjHVQ1%2FR3nPmfPd%2F3Nimkh%2BlGXcck%2F%2ByWlJ7i7cPmggTBY%2BKFYO0NTJSHskdfm%2B57pLvz0OUgNEPvectJcf6xWPvtLBILpTfnBPWXoZ8IXqx4YSpCEqZ%2FykCvLh8QRgtsQQo0O2SuYh4xVhZNhTWiIx8s9TJz%2BM6wFjogLohpG7g8N1w%3D%3D")
    no-repeat 50% 50%;
  background-size: cover;
  @include phone {
    display: none;
  }
}
.bg {
  display: block;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.5s ease;
  &.show {
    opacity: 1;
  }
}
.bg1 {
  background: url(" https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678957350198.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nrGAQfM4qDxgt7ui4pXvDs2F3S6oxd8%2F6S2KH6THE2qVTJt8Z%2BdcLmybjn%2FkzpPC4exCRtg0Nn0XmcphEjirHw6JnZi%2BhmGi2gkE%2Fg4COPJQ49EaR1hHtN94BzNDvonqne%2BQrD0QZTmyNKLLAuGvLGJB5%2BmjQh8Cr9pnWS2V%2B8XQYW6jL1pe8OxKOW7bnTqjixJxbx2CQ5Ckks1SNvL5RUkrz8ZuP%2B50nA%2FIOwYqjLmqwznJPdkr%2B7IQ2zZpwd11ooq7KMIjlVey1CXE2LUtTl5PElEVEWE%2FM52KjiRwjvBGLmejU5PdkYFzlTDEntP8sc76QJUz9e67nuHYaiHVrQ%3D%3D")
    no-repeat 50% 50%;
  background-size: cover;
}
.bg2 {
  background: url("https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678957127192.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NQOTorqmibm%2BKTh0m7xnk%2BC2m25uqfOYln1ZoNxArGhfOvPQ%2FGx%2BizU%2F%2FZKsJVtJXxCwEceJ3IuUvbMSmsdHpnWo3ckINP3N9KZNRzepWGvXF7ncWc%2Bc9mozUa5DrekZQaG1ILiiuJXFzWrG9QTYFbRLG8dUls2a3URrk7FTtRjvUExcMSX7bRbU%2FX2%2BE9PHPtsuRjSRoAs998UfIfLrjTyBytmIdtl0Xvvx5YOMd3NsMO6tx3sfpQgZSKopbcsDc6K%2FkD%2FpsGBJLpeK5q%2Bd6TUuy4QEkcmv995pblLi8AmXv1cMudv3Wz5xEjrRdAAzDQJmAibxEqua5gOQ%2Bjmlxw%3D%3D")
    no-repeat 50% 50%;
  background-size: cover;
}
.bg3 {
  background: url("https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678957036460.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iQs2zOqd5hMGT5ywBhj%2B7z1bIL%2B2F3UUbbQJuddBNubEZMjkTBCzehrGjyeHvyKVlISTgygJw1YHcya7tgJZB4Oltt3I7QwoP86JWFWY1cOU9WWNx%2Bx0WNnFsMEK5SZUXPbIcGLU6NX0qrJFvBiSYrT%2FY4ttsUyqetPYshn0DSkCeCxUPLuMkOLYdpT7ia4%2BOLDQM5b6qoTosENyjXRcxZDAu4kroJ9y2OtrFx%2FPbmULsappMGNHgf7%2Bl32tV2DCgWjXpA3u1pyLJlOSf9YW0ub1E8mX24XjLgkCApCPjnTN%2F0gs6q7PhqsBXZEWc5v6jjfiQG9RStJ5ZyqeERVS7Q%3D%3D")
    no-repeat 50% 50%;
  background-size: cover;
}
.hide {
  visibility: hidden;
}
</style>

<script>
import DeleteAllModal from "../components/DeleteAllModal.vue";
import gsap from "gsap";
import { Modal } from "bootstrap";
import cartStore from "../stores/cartStore.js";
import favoriteStore from "../stores/favoriteStore.js";
import { mapState, mapActions } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { Toast } from "../utils/toast.js";

export default {
  data() {
    return {
      isOpen: false,
      showFavorites: false,
      showCart: false,
      deleteAllModalFavorites: null,
      deleteAllModalCart: null,
      paddingRight: 0,
      loadingItem: "",
      splitIndexProductsOffsetTop: null,
      isHeaderBackgroundVisible: false,
    };
  },
  components: {
    DeleteAllModal,
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "addToCart",
      "deleteCartItem",
      "addNum",
      "decreaseNum",
    ]),
    ...mapActions(favoriteStore, ["removeFavorite"]),
    onSplitIndexProducts(splitIndexProducts) {
      this.splitIndexProductsOffsetTop =
        splitIndexProducts.offsetTop - this.getHeaderHeight();
      this.checkHeaderBackground();
    },
    getHeaderHeight() {
      const header = this.$refs.header;
      return header ? header.clientHeight : 0;
    },
    checkHeaderBackground() {
      if (this.$route.path !== "/") {
        return;
      }
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isHeaderBackgroundVisible =
        scrollTop >= this.splitIndexProductsOffsetTop;
      this.isHeaderBackgroundVisible = isHeaderBackgroundVisible;
    },
    openDeleteAllModalFavorites() {
      this.$refs.deleteAllModalFavorites.show();
    },
    openDeleteAllModalCart() {
      this.$refs.deleteAllModalCart.show();
    },
    clearFavorites() {
      localStorage.clear("myFavoriteList");
      this.myFavoriteList.value = [];
      this.myFavoriteList.splice(0, this.myFavoriteList.length); //必須手動清除這樣myFavoriteList才會即時更新
      Toast.fire({
        icon: "success",
        title: "已刪除全部收藏品項",
      });
      this.$refs.deleteAllModalFavorites.hide();
    },
    deleteAllCartItem() {
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "已刪除全部品項",
          });
          this.$refs.deleteAllModalCart.hide();
          this.getCartList();
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    toggleFavorites() {
      this.showFavorites = !this.showFavorites;
      if (this.showFavorites) {
        this.paddingRight =
          window.innerWidth - document.body.offsetWidth + "px";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = this.paddingRight;
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    },
    toggleCart() {
      this.showCart = !this.showCart;
      if (this.showCart) {
        this.paddingRight =
          window.innerWidth - document.body.offsetWidth + "px";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = this.paddingRight;
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.navMotion.reversed(!this.navMotion.reversed());
      if (this.isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    toggleShow(refName) {
      this.$refs[refName].classList.toggle("show");
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        duration: 2000,
      });
    },
  },
  computed: {
    ...mapState(cartStore, ["cartList", "totalQty"]),
    ...mapState(favoriteStore, ["myFavoriteList"]),
    shouldShowCartIcon() {
      return !this.$route.meta.hideCartIcon;
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
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkHeaderBackground);
  },
  mounted() {
    window.addEventListener("scroll", this.checkHeaderBackground);
    this.getCartList();
    this.deleteAllModalFavorites = new Modal(
      this.$refs.deleteAllModalFavorites.$el
    );
    this.deleteAllModalCart = new Modal(this.$refs.deleteAllModalCart.$el);

    this.navMotion = gsap.timeline({ paused: true });
    // 開啟動畫
    this.navMotion.to(".menu", {
      duration: 0.7,
      width: "100%",
      ease: "expo.in",
    });
    this.navMotion.from(".menu ul li", {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "expo.inOut",
      stagger: 0.1,
      display: "none",
    });
    this.navMotion.to(
      ".images",
      {
        duration: 0.7,
        width: "45%",
        ease: "expo.inOut",
        delay: -0.7,
      },
      "-=1"
    );
    this.navMotion.reverse();
    this.$router.beforeEach((to, from, next) => {
      const header = document.querySelector(".header");
      if (to.name === "index") {
        header.classList.add("bg-transparent");
      } else {
        header.classList.remove("bg-transparent");
        header.classList.add("bg-secondary-light");
      }
      next();
    });
  },
};
</script>
