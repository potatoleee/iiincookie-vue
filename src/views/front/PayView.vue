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
      <i class="bi bi-chevron-right text-primary"></i>
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
            <p class="fs-lg">
              訂單品項
              <span v-if="!orderInfo.is_paid" class="text-danger">未付款</span>
            </p>

            <p class="fs-lg">
              總金額：
              <span class="text-primary"
                ><span class="font-arimo">NT$ {{ orderInfo.total }}</span></span
              >
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
                    <p class="font-arimo">
                      NT$ {{ orderProduct.product.price }} x
                      {{ orderProduct.qty }}
                    </p>
                    <p class="font-arimo">NT$ {{ orderProduct.total }}</p>
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
          <p class="fs-lg pb-4 border-bottom border-dark border-opacity-10">
            訂單資訊
          </p>
          <table class="table mb-6">
            <tbody>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">訂單金額：</th>
                <td class="font-arimo">NT$ {{ orderInfo.total }}</td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">訂單編號：</th>
                <td>
                  {{ orderInfo.id }}
                </td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">下單時間：</th>
                <td>
                  {{ formatDate(orderInfo.create_at) }}
                </td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">寄送地址：</th>
                <td>
                  {{ orderUser.address }}
                </td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">顧客姓名：</th>
                <td>
                  {{ orderUser.name }}
                </td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">聯絡電話：</th>
                <td>
                  {{ orderUser.tel }}
                </td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">電子信箱：</th>
                <td>
                  {{ orderUser.email }}
                </td>
              </tr>
              <tr class="border-dark border-opacity-10">
                <th class="fw-regular ps-0" width="120">備註：</th>
                <td>
                  {{ orderInfo.message }}
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="button"
            class="btn btn-primary text-light w-100"
            @click="pay"
          >
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
