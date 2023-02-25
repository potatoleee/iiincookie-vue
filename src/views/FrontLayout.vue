<template>
  <!-- 導覽列 -->
  <div
    class="container-fluid d-flex w-100 justify-content-between position-fixed top-0 left-0 z-8 py-7"
  >
    <div class="menu-btn" @click="toggleMenu" :class="{ open: isOpen }"></div>
    <RouterLink to="/">
      <img src="../assets/images/logo.svg" alt="餅乾生產餡" />
    </RouterLink>
    <div class="d-flex align-items-cente gap-2">
      <i class="bi bi-heart fs-2xl"></i>
      <RouterLink to="/cart">
        <i class="bi bi-bag fs-2xl"></i>
        {{ cartList.carts?.length }}
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
          <li @mouseenter="showBg1" @mouseleave="hideBg1">
            <p class="menu-title fs-8xl font-english">ABOUT</p>
            <p class="menu-title fs-2xl">關於我們</p>
          </li>
        </RouterLink>
        <RouterLink to="/products" class="menu-item-2">
          <li @mouseenter="showBg2" @mouseleave="hideBg2">
            <p class="menu-title fs-8xl font-english" @click="toggleMenu">
              PRODUCTS
            </p>
            <p class="menu-title fs-2xl" @click="toggleMenu">產品ㄧ覽</p>
          </li>
        </RouterLink>
        <RouterLink to="/articles" class="menu-item-3">
          <li @mouseenter="showBg3" @mouseleave="hideBg3">
            <p class="menu-title fs-8xl font-english">NEWS</p>
            <p class="menu-title fs-2xl">最新消息</p>
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
  <div class="footer mt-auto">這是底部</div>
  <!-- footer -->
  <!-- </div> -->
</template>

<style lang="scss">
@import "../assets/style/all.scss";
// 漢堡start
.menu-btn {
  position: relative;
  width: 24px;
  height: 24px;
  z-index: 1030;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 1px;
    background-color: black;
    right: 2px;
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

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    li {
      color: #594637;
      font-size: 30px;
      line-height: 60px;
      display: block;
      &:hover {
        color: #a66f2c;
        transition: 1s;
      }
    }
  }
}

.images {
  position: fixed;
  width: 0%;
  height: 100vh;
  top: 0;
  left: 55%;
  background: url("../assets/images/newbanner正方形.jpg") no-repeat 50% 50%;
  background-size: cover;
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
}
.bg2 {
  display: block;
  background: url("../assets/images/02.jpg") no-repeat 50% 50%;
  background-size: cover;
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
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
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
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  mounted() {
    this.getCartList();
    this.navMotion = gsap.timeline({ paused: true });
    // 開啟動畫
    this.navMotion.to(".menu", {
      duration: 1,
      width: "55%",
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
