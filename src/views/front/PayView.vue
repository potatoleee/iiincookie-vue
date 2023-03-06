<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="title py-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >Payment
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">付款</h1>
  </div>
  <div class="container">
    <ul class="d-flex justify-content-center align-items-center gap-7">
      <li class="text-center">
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
      <!-- 訂單品項 start -->
      <div class="col-lg-7 mb-8 mb-lg-0">
        <div class="p-lg-7 rounded-2 shadow-lg-lg">
          <div
            class="d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"
          >
            <p class="fs-lg font-serifTc">
              訂單品項
              <span v-if="!orderInfo.is_paid" class="text-danger">未付款</span>
            </p>

            <p class="fs-lg fw-medium">
              總金額：
              <span class="text-primary">NT${{ orderInfo.total }}</span>
            </p>
          </div>

          <ul v-for="orderProduct in orderProducts" :key="orderProduct.id">
            <li>
              <div
                class="d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"
              >
                <img
                  class="w-20n"
                  :src="orderProduct.product.imageUrl"
                  alt=""
                />
                <div class="w-100 d-flex flex-column justify-content-between">
                  <div class="d-flex justify-content-between align-items-start">
                    <p>{{ orderProduct.product.title }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p>
                      NT$ {{ orderProduct.product.price }} x
                      {{ orderProduct.qty }}
                    </p>
                    NT$ {{ orderProduct.total }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 訂單品項 start -->
      <!-- 訂單資訊 start-->
      <div class="col-lg-5">
        <div class="p-lg-7 rounded-2 shadow-lg-lg">
          <p
            class="fs-lg font-serifTc pb-4 border-bottom border-dark border-opacity-10 mb-4"
          >
            訂單資訊
          </p>
          <p>訂單金額：NT$ {{ orderInfo.total }}</p>
          <p>訂單編號：{{ orderInfo.id }}</p>
          <p>下單時間：{{ formatDate(orderInfo.create_at) }}</p>
          <p>寄送地址：{{ orderUser.address }}</p>
          <p>顧客姓名：{{ orderUser.name }}</p>
          <p>聯絡電話：{{ orderUser.tel }}</p>
          <p>電子信箱：{{ orderUser.email }}</p>
          <p>備註：{{ orderInfo.message }}</p>
          <button type="button" class="btn btn-primary" @click="pay">
            確認付款
          </button>
        </div>
      </div>
      <!-- 訂單資訊 end-->
    </div>
  </div>
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import loadingStore from "../../stores/loadingStore.js";
import { mapActions, mapState } from "pinia";
import { Toast } from "../../utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      orderId: "",
      orderInfo: {},
      orderUser: {},
      orderProducts: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    },
    getAllOrder() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/orders`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    getOrder() {
      this.orderId = this.$route.params.id;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${this.orderId}`)
        .then((res) => {
          console.log(res);
          this.orderInfo = res.data.order;
          this.orderUser = res.data.order.user;
          this.orderProducts = res.data.order.products;
          console.log(this.orderInfo);
          console.log(this.orderProducts);
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    pay() {
      this.orderId = this.$route.params.id;
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${this.orderId}`)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          console.log(res);
          this.$router.push(`/complete/${this.orderId}`);
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
    this.getAllOrder();
    this.getCartList();
    this.getOrder();
  },
};
</script>
