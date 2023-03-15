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
            class="btn btn-outline-dark rounded-0 py-1 px-2 text-opacity-50 border-opacity-50"
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
            <img class="w-20n" :src="favorite.imageUrl" alt="" />
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
        v-if="totalQty > 0"
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
            class="btn btn-outline-dark rounded-0 py-1 px-2 text-opacity-50 border-opacity-50"
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
            <img class="w-20n" :src="cartItem.product.imageUrl" alt="" />
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
  <div class="menu-btn" @click="toggleMenu" :class="{ open: isOpen }"></div>
  <div
    class="container-fluid d-flex w-100 justify-content-between align-items-center position-fixed top-0 left-0 z-3 py-7 px-7"
  >
    <!-- <RouterLink
      to="/"
      class="position-absolute start-50 top-50 translate-middle"
    >
      <img class="logo" src="../assets/images/logo.svg" alt="餅乾生產餡" />
    </RouterLink> -->
    <RouterLink to="/" exact native>
      <img class="logo" src="../assets/images/logo.svg" alt="餅乾生產餡" />
    </RouterLink>
    <div class="d-flex align-items-center gap-5">
      <i class="bi bi-heart fs-xl fs-md-2xl" @click="toggleFavorites"></i>
      <!-- <RouterLink to="/cart"> -->
      <div class="position-relative" @click="toggleCart">
        <i class="bi bi-bag fs-xl fs-md-2xl"></i>
        <span
          v-if="totalQty > 0"
          class="badge bg-primary text-light position-absolute top-0 start-100 translate-middle"
          >{{ totalQty }}</span
        >
      </div>
      <!-- </RouterLink> -->
    </div>
  </div>
  <!-- 導覽列 -->
  <!-- 導覽列展開內容 -->
  <div class="position-relative">
    <div class="images">
      <span ref="bg1" class="bg bg1 hide"></span>
      <span ref="bg2" class="bg bg2 hide"></span>
      <span ref="bg3" class="bg bg3 hide"></span>
    </div>
    <div class="menu">
      <ul class="d-flex flex-column gap-14">
        <RouterLink to="/about">
          <li @mouseenter="showBg1" @mouseleave="hideBg1" @click="toggleMenu">
            <p class="fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm">ABOUT</p>
            <p class="fs-2xl font-serifTc fw-medium">關於我們</p>
          </li>
        </RouterLink>
        <RouterLink to="/products" class="menu-item-2">
          <li @mouseenter="showBg2" @mouseleave="hideBg2">
            <p
              class="fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"
              @click="toggleMenu"
            >
              PRODUCTS
            </p>
            <p class="fs-2xl font-serifTc fw-medium" @click="toggleMenu">
              產品ㄧ覽
            </p>
          </li>
        </RouterLink>
        <RouterLink to="/articles" class="menu-item-3">
          <li @mouseenter="showBg3" @mouseleave="hideBg3" @click="toggleMenu">
            <p class="fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm">NEWS</p>
            <p class="fs-2xl font-serifTc fw-medium">最新消息</p>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
  <!-- 導覽列展開內容 -->
  <!-- 主要內容 -->
  <main>
    <RouterView></RouterView>
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
        class="vertical-lr scroll-top letter-spacing-4 font-english"
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
  top: 24px;
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
  background: url("../assets/images/newbanner正方形.jpg") no-repeat 50% 50%;
  background-size: cover;
  @include phone {
    display: none;
  }
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  &.show {
    transition: opacity 0.5s ease;
    opacity: 1;
  }
}
.bg1 {
  display: block;
  background: url("../assets/images/newbanner正方形.jpg") no-repeat 50% 50%;
  background-size: cover;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  &.show {
    transition: opacity 0.5s ease;
    opacity: 1;
  }
}
.bg2 {
  display: block;
  background: url("../assets/images/02.jpg") no-repeat 50% 50%;
  background-size: cover;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  &.show {
    transition: opacity 0.5s ease;
    opacity: 1;
  }
}
.bg3 {
  display: block;
  background: url("../assets/images/03.jpg") no-repeat 50% 50%;
  background-size: cover;
}
.hide {
  display: none;
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
    },
    showBg1() {
      this.$refs.bg1.style.display = "block";
      this.$refs.bg1.classList.add("show");
    },
    hideBg1() {
      this.$refs.bg1.style.display = "none";
    },
    showBg2() {
      this.$refs.bg2.style.display = "block";
      this.$refs.bg2.classList.add("show");
    },
    hideBg2() {
      this.$refs.bg2.style.display = "none";
    },
    showBg3() {
      this.$refs.bg3.style.display = "block";
      this.$refs.bg3.classList.add("show");
    },
    hideBg3() {
      this.$refs.bg3.style.display = "none";
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
    this.getCartList();
    this.deleteAllModalFavorites = new Modal(
      this.$refs.deleteAllModalFavorites.$el
    );
    this.deleteAllModalCart = new Modal(this.$refs.deleteAllModalCart.$el);

    this.navMotion = gsap.timeline({ paused: true });
    // 開啟動畫
    this.navMotion.to(".menu", {
      duration: 1,
      width: "100%",
      ease: "expo.in",
    });
    this.navMotion.from(".menu ul li", {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "expo.inOut",
      stagger: 0.1,
      display: "none",
    });
    this.navMotion.to(
      ".images",
      {
        duration: 1,
        width: "45%",
        ease: "expo.inOut",
        delay: -1,
      },
      "-=1"
    );
    this.navMotion.reverse();
  },
};
</script>
