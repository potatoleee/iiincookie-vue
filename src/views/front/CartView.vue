<template>
  <VueLoading v-model:active="isLoading" />
  <DeleteAllModal
    ref="deleteAllModalCart"
    :message="'請問你要刪除購物車中全部商品嗎？'"
    @deleteConfirm="deleteAllCartItem"
  />
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      ref="splitCart"
      >Shopping Cart
    </span>
    <h1
      class="title-main font-serifTc fw-black fs-xl fs-lg-3xl"
      ref="splitCartCh"
    >
      購物車
    </h1>
  </div>
  <div
    class="container d-flex flex-column align-items-center gap-6 mt-12"
    v-if="totalQty === 0"
  >
    <p class="text-center fs-lg-xl">目前購物車是空的喔！</p>

    <RouterLink
      to="/products"
      class="py-2 px-md-17 px-13 rounded-pill d-md-inline-block btn bg-secondary-light btn-outline-dark hover-text-primary hover-border-primary"
    >
      來去逛逛吧！
      <i class="bi bi-arrow-up-right fs-xs ms-2"></i>
    </RouterLink>
  </div>
  <div v-else>
    <div class="container">
      <ul
        class="d-flex justify-content-center align-items-center gap-lg-7 gap-1"
      >
        <li class="text-center text-primary">
          <p class="fs-xs fs-lg-sm">Step.1</p>
          <p class="fs-xs fs-lg-sm">購買項目</p>
        </li>
        <i class="bi bi-chevron-right"></i>
        <li class="text-center">
          <p class="fs-xs fs-lg-sm">Step.2</p>
          <p class="fs-xs fs-lg-sm">填寫資料</p>
        </li>
        <i class="bi bi-chevron-right"></i>
        <li class="text-center">
          <p class="fs-xs fs-lg-sm">Step.3</p>
          <p class="fs-xs fs-lg-sm">確認付款</p>
        </li>
        <i class="bi bi-chevron-right"></i>
        <li class="text-center">
          <p class="fs-xs fs-lg-sm">Step.4</p>
          <p class="fs-xs fs-lg-sm">訂單完成</p>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="row my-13">
        <!-- 購物車 start -->
        <div class="col-lg-7 mb-8 mb-lg-0">
          <div class="p-lg-7 rounded-2 shadow-lg-lg">
            <div class="d-flex justify-content-between mb-5">
              <RouterLink to="/products" class="d-flex align-items-center gap-2"
                ><i class="bi bi-chevron-left fs-xl"></i
                >還有想要購買的商品嗎？</RouterLink
              >
            </div>
            <div
              class="d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"
            >
              <p class="fs-lg">購物車品項</p>
              <button
                v-if="cartList.carts?.length > 0"
                class="py-2 px-8 rounded-pill fs-sm bg-secondary-light py-2 px-6 rounded-pill d-inline-block btn btn-outline-dark hover-text-primary hover-border-primary"
                type="button"
                @click="openDeleteAllModalCart()"
              >
                清空購物車
              </button>
            </div>
            <ul>
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
                      class="d-flex justify-content-between align-items-start"
                    >
                      <p>{{ cartItem.product.title }}</p>

                      <i
                        class="bi bi-x-lg"
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
                          type="button"
                          @click="decreaseNum(cartItem)"
                          class="btn rounded-0"
                          :class="{
                            disabled: cartItem.qty == 1,
                            'border-0': cartItem.qty === 1,
                          }"
                        >
                          <i class="bi bi-dash-lg"></i>
                        </button>
                        <input
                          class="text-center bg-secondary-light border-0 w-8n w-lg-12n"
                          type="number"
                          v-model="cartItem.qty"
                          readonly
                        />
                        <button
                          type="button"
                          class="btn rounded-0"
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
          </div>
        </div>
        <!-- 購物車 start -->
        <!-- 金額 start-->
        <div class="col-lg-5">
          <div class="p-lg-7 rounded-2 shadow-lg-lg">
            <p
              class="fs-lg pb-4 border-bottom border-dark border-opacity-10 mb-4"
            >
              訂單資訊
            </p>
            <!-- 總額 start-->
            <div class="pb-6 border-bottom border-dark border-opacity-10 mb-4">
              <div class="mb-4 d-flex justify-content-between">
                <p>總數量</p>
                <p>
                  共 <span class="font-arimo">{{ totalQty }}</span> 個
                </p>
              </div>
              <div class="mb-4 d-flex justify-content-between">
                <p>小計</p>
                <p class="font-arimo">NT$ {{ cartList.total }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <input
                  type="text"
                  class="form-control rounded-0 border-secondary w-70"
                  v-model="couponCode"
                  placeholder="請輸入優惠碼"
                />
                <button
                  type="button"
                  class="btn btn-primary w-30 rounded-0 text-light fs-sm border-0"
                  @click="useCoupon"
                >
                  使用優惠券
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-6">
              <p>總計</p>
              <p class="font-arimo">NT$ {{ Math.round(cartList.total) }}</p>
            </div>
            <div v-if="isCouponUsed">
              <div class="d-flex justify-content-between mb-6">
                <p>優惠券折抵</p>

                <p class="font-arimo text-primary">
                  NT$
                  {{
                    Math.round(cartList.total) -
                    Math.round(cartList.final_total)
                  }}
                </p>
              </div>
              <div class="d-flex justify-content-between mb-6">
                <p>折扣後金額</p>

                <p class="font-arimo text-primary">
                  NT$ {{ Math.round(cartList.final_total) }}
                </p>
              </div>
            </div>
            <RouterLink to="/order" class="btn btn-primary text-light w-100"
              >去買單</RouterLink
            >
          </div>

          <!-- 總額 end-->
        </div>
        <!-- 金額 end-->
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "@/stores/cartStore.js";
import DeleteAllModal from "@/components/DeleteAllModal.vue";
import { gsap } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(SplitType);
import { mapActions, mapState } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { Toast } from "@/utils/toast.js";
export default {
  emits: ["split-index-products"],
  data() {
    return {
      productListData: [],
      productId: "",
      loadingItem: "", //loading效果項目暫存區
      couponCode: "iiincookienew",
      isCouponUsed: false,
      isLoading: true,
    };
  },
  components: {
    DeleteAllModal,
  },

  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "deleteCartItem",
      "updateCartItem",
      "addNum",
      "decreaseNum",
    ]),
    openDeleteAllModalCart() {
      this.$refs.deleteAllModalCart.show();
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
    useCoupon() {
      const data = {
        code: this.couponCode,
      };
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`, { data })
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.getCartList();
          this.isCouponUsed = true;
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
  computed: {
    ...mapState(cartStore, ["cartList", "totalQty"]),
  },
  mounted() {
    const splitCart = this.$refs.splitCart;
    const splitCartCh = this.$refs.splitCartCh;
    new SplitType(splitCart);
    new SplitType(splitCartCh);

    splitCartCh.querySelectorAll(".line").forEach((line) => {
      line.style.textAlign = "end";
    });

    this.$nextTick(() => {
      gsap.fromTo(
        splitCartCh.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1,
          duration: 0.2,
        }
      );
      gsap.fromTo(
        splitCart.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1,
          duration: 0.2,
        }
      );
      const maskBgElements = document.querySelectorAll(".mask-bg");
      gsap.to(maskBgElements, {
        duration: 1,
        width: "0%",
        ease: "power3.inOut",
      });
    });
    this.getCartList();
    this.isLoading = false;
  },
};
</script>
