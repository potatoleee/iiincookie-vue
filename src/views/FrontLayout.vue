<template>
  <!-- 我的最愛視窗 -->

  <div class="offCanvas-favorite" v-if="showFavorites">
    <ul>
      <li v-for="(favorite, index) in myFavorite" :key="favorite.id">
        <button class="btn btn-primary" @click="removeFromFavorites(index)">
          移除
        </button>
        {{ favorite.title }}
        {{ favorite.id }}
        NT$ {{ favorite.price }}
        <img :src="favorite.imageUrl" width="300" alt="" />
      </li>
    </ul>
  </div>
  <div class="overlay" v-if="showFavorites" @click="toggleCanvas"></div>
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
      <i class="bi bi-heart fs-xl fs-lg-2xl" @click="toggleFavorites"></i>
      <RouterLink to="/cart">
        <div class="position-relative">
          <i class="bi bi-bag fs-xl fs-lg-2xl"></i>
          <span
            v-if="totalQty > 0"
            class="badge bg-primary text-light position-absolute top-0 start-100 translate-middle"
            >{{ totalQty }}</span
          >
        </div>
      </RouterLink>
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
  <footer class="footer mt-auto bg-secondary-dark container-fluid py-10">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex gap-8">
        <p class="font-english">© 2023 iiincookie</p>
        <a
          class="font-english"
          href="https://www.instagram.com/iiin.cookies/"
          target="_blank"
        >
          instagram
        </a>
      </div>
      <p @click="scrollToTop">To Top</p>
    </div>
  </footer>
  <!-- footer -->
  <!-- </div> -->
</template>

<style lang="scss">
@import "../assets/style/all.scss";

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(27, 24, 23, 0.5);
  z-index: 3;
}
.offCanvas-favorite {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background-color: $secondary-dark;
  z-index: 4;
}
// 漢堡start
.menu-btn {
  position: fixed;
  width: 28px;
  height: 28px;
  cursor: pointer;
  top: 24px;
  left: 24px;
  z-index: 100;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 28px;
    height: 1px;
    background-color: black;
    transition: all 0.5s;
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
  @include pad {
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
import gsap from "gsap";
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      isOpen: false,
      showFavorites: false,
      myFavorite: JSON.parse(localStorage.getItem("myFavorite")) || [],
      myFavoriteId: JSON.parse(localStorage.getItem("myFavoriteId")) || [],
      // favoriteList: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    toggleFavorite(product) {
      //
      const favoriteIndex = this.myFavorite.findIndex(
        (item) => item.id === product.id
      );
      // 如果找不到相符資料，就將資料新增一筆進去
      if (favoriteIndex === -1) {
        this.myFavorite.push(product);
        this.myFavoriteId.push(product.id);
        console.log("加到我得最愛");
      } else {
        // 如果有找到相符資料，就將資料刪除一筆
        this.myFavorite.splice(favoriteIndex, 1);
        this.myFavoriteId.splice(favoriteIndex, 1);
        console.log("重複刪除");
      }
      // localStorage.setItem("favorite", JSON.stringify(this.favorite));
    },
    removeFromFavorites(index) {
      this.myFavorite.splice(index, 1);
      this.myFavoriteId.splice(index, 1);
      localStorage.setItem("myFavorite", JSON.stringify(this.myFavorite));
      console.log("移除產品");
    },
    toggleFavorites() {
      this.showFavorites = !this.showFavorites;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.navMotion.reversed(!this.navMotion.reversed());
    },
    toggleCanvas() {
      this.showFavorites = !this.showFavorites;
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
  },
  watch: {
    // 用locolstorage自訂欄位並存取資料
    myFavorite: {
      handler() {
        // localStorage只接受字串
        localStorage.setItem("myFavorite", JSON.stringify(this.myFavorite));
      },
      deep: true,
    },
    myFavoriteId: {
      handler() {
        localStorage.setItem("myFavoriteId", JSON.stringify(this.myFavoriteId));
      },
      deep: true,
    },
  },
  mounted() {
    this.getCartList();
    console.log("myFavorite:", this.myFavorite);
    console.log("myFavoriteId:", this.myFavoriteId);
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
