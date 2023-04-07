<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >Complete
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">訂單完成</h1>
  </div>
  <div class="container mb-8">
    <ul class="d-flex justify-content-center align-items-center gap-lg-7 gap-1">
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
      <li class="text-center text-primary">
        <p class="fs-xs fs-lg-sm">Step.4</p>
        <p class="fs-xs fs-lg-sm">訂單完成</p>
      </li>
    </ul>
  </div>
  <div class="container">
    <div class="text-center">
      <p class="text-center fs-xl fs-lg-5xl mb-5">感謝你的支持！</p>
      <p class="mb-1">
        謝謝你對於本店的支持，我們會盡快將產品送到您的手上，希望您會喜歡！
      </p>
      <p class="mb-6">
        如有任何問題，可以私訊 ig:
        <a
          class="d-inline text-primary"
          href="https://www.instagram.com/iiin.cookies/"
          target="_blank"
          >iiincookie
        </a>
      </p>

      <div class="d-flex flex-column flex-lg-row justify-content-center gap-5">
        <RouterLink
          to="/"
          class="bg-secondary-light btn-outline-dark py-2 px-15 rounded-pill d-inline-block btn hover-text-primary hover-border-primary"
        >
          回到首頁
        </RouterLink>

        <RouterLink
          to="/products"
          class="py-2 px-15 rounded-pill d-inline-block btn btn-primary text-light"
        >
          繼續購物
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-13">
      <!-- 訂單品項 start -->
      <div class="col-lg-6 mb-8 mb-lg-0">
        <div class="p-lg-7 rounded-2 shadow-lg-lg">
          <div
            class="d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"
          >
            <p class="fs-lg">
              訂單品項
              <span v-if="!orderInfo.is_paid" class="text-danger">未付款</span>
              <span v-else class="text-primary">已付款</span>
            </p>

            <p class="fs-lg">
              總金額：
              <span class="text-primary font-arimo"
                >NT$ {{ Math.round(orderInfo.total) }}</span
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
      <div class="col-lg-6">
        <div class="p-lg-7 rounded-2 shadow-lg-lg">
          <p class="fs-lg pb-4 border-bottom border-dark border-opacity-10">
            訂單資訊
          </p>
          <ul class="mb-6">
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                訂單金額： NT$ {{ Math.round(orderInfo.total) }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">訂單金額：</p>
              <p class="col d-none d-md-block col">
                NT$ {{ Math.round(orderInfo.total) }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">訂單編號： {{ orderInfo.id }}</p>
              <p class="fw-regular d-none d-md-block col-4">訂單編號：</p>
              <p class="col d-none d-md-block col">
                {{ orderInfo.id }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                下單時間： {{ formatDate(orderInfo.create_at) }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">下單時間：</p>
              <p class="col d-none d-md-block col">
                {{ formatDate(orderInfo.create_at) }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                寄送地址： {{ orderUser.address }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">寄送地址：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.address }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                顧客姓名： {{ orderUser.name }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">顧客姓名：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.name }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">聯絡電話： {{ orderUser.tel }}</p>

              <p class="fw-regular d-none d-md-block col-4">聯絡電話：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.tel }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                電子信箱： {{ orderUser.email }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">電子信箱：</p>
              <p class="col d-none d-md-block col">
                {{ orderUser.email }}
              </p>
            </li>
            <li
              class="d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"
            >
              <p class="fw-regular d-md-none">
                客戶備註： {{ orderInfo.message }}
              </p>
              <p class="fw-regular d-none d-md-block col-4">客戶備註：</p>
              <p class="col d-none d-md-block col">
                {{ orderInfo.message }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 訂單資訊 end-->
    </div>
  </div>
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import LoadingComponent from "../../components/LoadingComponent.vue";
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
      isLoading: false,
    };
  },
  components: {
    LoadingComponent,
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    },
    getOrder() {
      this.orderId = this.$route.params.id;
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.isLoading = false;
          this.orderInfo = res.data.order;
          this.orderUser = res.data.order.user;
          this.orderProducts = res.data.order.products;
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
    this.getCartList();
    this.getOrder();
  },
};
</script>
