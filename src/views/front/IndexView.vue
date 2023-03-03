<template>
  <div
    class="container-fluid px-10 d-flex w-100 justify-content-between position-fixed top-0 left-0 z-10 py-7"
  >
    <div class="menu-btn" @click="toggleMenu" :class="{ open: isOpen }"></div>
    <RouterLink to="">
      <img class="logo" src="../../assets/images/logo.svg" alt="餅乾生產餡" />
    </RouterLink>
    <div class="d-flex align-items-center gap-10">
      <i class="bi bi-heart fs-2xl"></i>
      <RouterLink to="/cart">
        <i class="bi bi-bag fs-2xl"></i>
        {{ cartList.carts?.length }}
      </RouterLink>
    </div>
  </div>
  <!-- 導覽列 -->
  <!-- 導覽列展開內容 start-->
  <div class="position-relative z-9">
    <div class="images">
      <span ref="bg1" class="bg bg1 hide"></span>
      <span ref="bg2" class="bg bg2 hide"></span>
      <span ref="bg3" class="bg bg3 hide"></span>
    </div>
    <div class="menu">
      <ul class="d-flex flex-column gap-14">
        <RouterLink to="/about">
          <li @mouseenter="showBg1" @mouseleave="hideBg1" @click="toggleMenu">
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
          <li @mouseenter="showBg3" @mouseleave="hideBg3" @click="toggleMenu">
            <p class="menu-title fs-8xl font-english">NEWS</p>
            <p class="menu-title fs-2xl">最新消息</p>
          </li>
        </RouterLink>
      </ul>
    </div>
  </div>
  <!-- 導覽列展開內容 end-->
  <!-- 影片區 end-->
  <div class="video-wrap">
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
      class="font-serifTc position-absolute start-30 top-30 fw-medium letter-spacing-2 text-white fs-xl lh-lg"
    >
      你好，我們是餅乾生產餡，<br />
      致力於製作美味的甜點，<br />
      使每一個味蕾都獲得滿足。
    </p>
    <p
      class="font-serifTc position-absolute start-30 top-50 fw-medium letter-spacing-2 text-white fs-xl lh-lg"
    >
      因緣受到朋友委託製作餅乾，<br />
      因此挑戰了很想嘗試的鐵盒餅乾，<br />
      雖是第一次嘗試，但朋友一吃驚艷，<br />
      鼓勵我讓更多人也能品嚐得到。<br />
    </p>
    <p
      class="font-serifTc position-absolute start-30 top-70 fw-medium letter-spacing-2 text-white fs-xl lh-lg"
    >
      便誤打誤撞開始生產餡這個品牌 <br />
      從沒想過餅乾會成為另一份事業<br />
      人生就是這麼奇妙吧！
    </p>
    <p
      class="font-serifTc position-absolute start-30 top-80 fw-medium letter-spacing-2 text-white fs-xl lh-lg"
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
  <!-- products start-->
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
        <img src="../../assets/images/chocolate01.jpg" alt="" />
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
        <img src="../../assets/images/boxflower.jpg" alt="" />
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

  <!-- products end-->
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
  background: url("../../assets/images/newbanner正方形.jpg") no-repeat 50% 50%;
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
  background: url("../../assets/images/newbanner正方形.jpg") no-repeat 50% 50%;
  background-size: cover;
}
.bg2 {
  display: block;
  background: url("../../assets/images/02.jpg") no-repeat 50% 50%;
  background-size: cover;
}
.bg3 {
  display: block;
  background: url("../../assets/images/03.jpg") no-repeat 50% 50%;
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
  position: absolute;
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
  mounted() {
    this.getCartList();
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
        height: "75vh",
        duration: 20,
        ease: "ease",
        yPercent: "-50%",
      })
      .to(".videoCanvas", {
        width: "90vw",
        height: "90vh",
        duration: 20,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "100vw",
        height: "100vh",
        duration: 10,
        ease: "ease",
      })
      .to(".videoCanvas", {
        width: "25vmin",
        height: "50vmin",
        duration: 20,
        ease: "ease",
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
      opacity: 0.6,
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
