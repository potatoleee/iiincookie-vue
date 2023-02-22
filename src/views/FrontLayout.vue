<template>
  <div class="d-flex w-100 justify-content-between position-fixed">
    <div class="menu-btn" @click="toggleMenu">menu1</div>
    <RouterLink to="/">
      <img src="../assets/images/logo.svg" alt="餅乾生產餡" />
    </RouterLink>
    <RouterLink to="/cart">購物車 {{ cartList.carts?.length }} </RouterLink>
  </div>
  <div class="position-relative">
    <div class="images">
      <span class="bg bg1 hide"></span>
      <span class="bg bg2 hide"></span>
      <span class="bg bg3 hide"></span>
    </div>
    <div class="nav1">
      <div class="menu">
        <ul>
          <RouterLink to="/about" class="menu-item-1">
            <li class="menu-item-1">
              <p class="menu-title">ABOUT</p>
              <p class="menu-title">關於我們</p>
            </li>
          </RouterLink>
          <RouterLink to="/products" class="menu-item-2">
            <li class="menu-item-2">
              <p>PRODUCTS</p>
              <p>產品ㄧ覽</p>
            </li>
          </RouterLink>
          <RouterLink to="/articles" class="menu-item-3">
            <li class="menu-item-3">
              <p>NEWS</p>
              <p>最新消息</p>
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<style lang="scss">
.nav1 {
  .menu {
    position: absolute;
    // width: 50%;
    width: 0%;
    height: 100vh;
    left: 10%;
    background: #fff;
    ul {
      position: absolute;
      top: 36%;
      left: 36%;
      transform: translate(-50%, -50%);
      cursor: pointer;

      li {
        color: #594637;
        font-size: 30px;
        line-height: 60px;
        &:hover {
          color: #a66f2c;
          transition: 1s;
        }
      }
    }
  }
}
.menu-title {
  background: linear-gradient(#5b5b5b, #5b5b5b) left no-repeat, #afafaf;
  background-size: 0% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 1s;
  &:hover {
    background-size: 100%, 100%;
  }
}
.images {
  position: absolute;
  width: 45%;
  width: 0%;
  height: 100vh;
  left: 55%;
  background: url("../assets/images/01.jpg") no-repeat 50% 50%;
  background-size: cover;
}
.bg {
  position: absolute;
  width: 100%;
  height: 100vh;
  // background: #000;
}
.bg1 {
  display: block;
  background: url("../assets/images/01.jpg") no-repeat 50% 50%;
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
      isMenuActive: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    // toggleMenu() {
    //   this.isMenuActive = !this.isMenuActive;
    //   console.log("11");
    //   this.navMotion.reversed(!this.navMotion.reversed());
    // },

    toggleMenu() {
      console.log("點擊到囉");
      const navMotion = gsap.timeline({ paused: true });
      // 開啟動畫
      navMotion.to(".menu", {
        duration: 2,
        width: "45%",
        ease: "expo.in",
      });
      navMotion.from(".menu ul li", {
        duration: 2,
        y: 20,
        opacity: 0,
        ease: "expo.inOut",
        stagger: 0.1,
      });
      navMotion.to(
        ".images",
        {
          duration: 2,
          width: "45%",
          ease: "expo.inOut",
          delay: -2,
        },
        "-=1"
      );
      navMotion.reverse();
      navMotion.reversed(!navMotion.reversed());
    },
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  mounted() {
    this.getCartList();
  },
};
</script>
