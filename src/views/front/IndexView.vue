<template>
  <div class="video-wrap">
    <!-- 導覽列 -->
    <div
      class="container-fluid d-flex w-100 justify-content-between position-fixed top-0 left-0 z-10 py-7"
    >
      <div class="menu-btn" @click="toggleMenu" :class="{ open: isOpen }"></div>
      <RouterLink to="/">
        <img class="logo" src="../../assets/images/logo.svg" alt="餅乾生產餡" />
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
    <div class="position-relative z-9">
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
        <source src="../../assets/video/boilTea.mp4" type="video/mp4" />
      </video>
    </div>
    <h2 class="position-absolute top-50 start-50 translate-middle text-white">
      因緣受到朋友委託製作餅乾 因此挑戰了很想嘗試的鐵盒餅乾
      第一次嘗試，但朋友一吃驚艷 鼓勵我讓大家也能品嚐得到 那美味的夾餡餅乾
      便誤打誤撞開始生產餡這個品牌 從沒想過餅乾會成為另一份事業
      人生就是這麼奇妙吧！
    </h2>
  </div>
</template>

<style lang="scss">
@import "../../assets/style/all.scss";
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
.logo {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.video-wrap {
  height: 1000vh; //可以調整這裡 改變滑動的距離
  position: relative;
}
.video-content {
  height: 100vh;
  position: sticky;
  top: 0; //要給他位置
  left: 0;
}
.videoCanvas {
  width: 35em;
  height: 35em;
  object-fit: cover;
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cartStore.js";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(gsap, ScrollTrigger);

ScrollTrigger.defaults({
  markers: true,
});
export default {
  data() {
    return {};
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
  mounted() {
    let videoMotion = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-wrap",
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    videoMotion
      .to(".videoCanvas", {
        width: "90vw",
        height: "90vh",
        borderRadius: "0em",
        duration: 20,
        ease: "power1.out",
      })
      .to(".videoCanvas", {
        width: "100vw",
        height: "100vh",
        borderRadius: "0em",
        duration: 10,
        ease: "power1.out",
      })
      .to(".videoCanvas", {
        width: "10vmin",
        height: "50vmin",
        borderRadius: "0em",
        duration: 20,
        ease: "power1.out",
      });

    let logoTop = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoCanvas",
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    logoTop.from(".logo", {
      width: "80%",
      xPercent: "-50",
      y: "70vh",
      duration: 2,
      opacity: 0.3,
      ease: "ease",
    });

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

  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
};
</script>
