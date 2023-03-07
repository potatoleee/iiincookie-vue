<template>
  <div class="title py-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >Shopping Cart
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">購物車</h1>
  </div>
  <div
    class="container d-flex flex-column align-items-center gap-6 mt-12"
    v-if="totalQty === 0"
  >
    <p class="text-center fs-lg-xl">目前購物車是空的喔！</p>
    <RouterLink
      to="/products"
      class="btn btn-secondary-darker text-light fs-lg-xl py-5"
      >來去逛逛吧！</RouterLink
    >
  </div>
  <div v-else>
    <div class="container">
      <ul class="d-flex justify-content-center align-items-center gap-7">
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
      <VueLoading v-model:active="isLoading"></VueLoading>
      <div class="row my-13">
        <!-- 購物車 start -->
        <div class="col-lg-7 mb-8 mb-lg-0">
          <div class="p-lg-7 rounded-2 shadow-lg-lg">
            <div class="d-flex justify-content-between mb-5">
              <RouterLink
                to="/products"
                class="d-flex align-items-center gap-2 gap-lg-6"
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
                class="btn border border-dark border-opacity-40 py-2 px-8 rounded-pill fs-sm"
                type="button"
                @click="deleteAllCartItem()"
              >
                清空購物車
              </button>
            </div>

            <ul v-for="cartItem in cartList.carts" :key="cartItem.id">
              <li>
                <div
                  class="d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"
                >
                  <img class="w-20n" :src="cartItem.product.imageUrl" alt="" />
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
                        <button class="btn rounded-0" @click="addNum(cartItem)">
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
              <p class="font-arimo">NT$ {{ cartList.final_total }}</p>
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
import cartStore from "../../stores/cartStore.js";
import loadingStore from "../../stores/loadingStore.js";
import { mapActions, mapState } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { Toast } from "../../utils/toast.js";
export default {
  data() {
    return {
      productListData: [],
      productId: "",
      loadingItem: "", //loading效果項目暫存區
      couponCode: "iiincookienew",
    };
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "deleteCartItem",
      "updateCartItem",
      "deleteAllCartItem",
      "addNum",
      "decreaseNum",
    ]),
    useCoupon() {
      const data = {
        code: this.couponCode,
      };
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`, { data })
        .then((res) => {
          console.log(res);
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.getCartList();
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
    ...mapState(loadingStore, ["isLoading"]),
  },
  mounted() {
    this.getCartList();
    console.log(this.isLoading);
  },
};
</script>
