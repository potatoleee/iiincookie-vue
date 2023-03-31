<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >Carts
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">購物車</h1>
  </div>
  <div class="container">
    <ul class="d-flex justify-content-center align-items-center gap-lg-7 gap-1">
      <li class="text-center">
        <p class="fs-xs fs-lg-sm">Step.1</p>
        <p class="fs-xs fs-lg-sm">購買項目</p>
      </li>
      <i class="bi bi-chevron-right"></i>
      <li class="text-center text-primary">
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
          <RouterLink to="/cart" class="d-flex align-items-center gap-2 mb-5"
            ><i class="bi bi-chevron-left fs-xl"></i>返回購物車</RouterLink
          >
          <div
            class="d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"
          >
            <p class="fs-lg">
              訂單品項 <span class="font-arimo">{{ totalQty }}</span>
            </p>
            <p class="fs-lg">
              總金額：
              <span class="text-primary font-arimo"
                >NT$ {{ cartList.final_total }}</span
              >
            </p>
          </div>

          <ul v-for="cartItem in cartList.carts" :key="cartItem.id">
            <li>
              <div
                class="d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"
              >
                <img class="w-20n" :src="cartItem.product.imageUrl" alt="" />
                <div class="w-100 d-flex flex-column justify-content-between">
                  <div class="d-flex justify-content-between align-items-start">
                    <p>{{ cartItem.product.title }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="font-arimo">
                      NT$ {{ cartItem.product.price }} x {{ cartItem.qty }}
                    </p>
                    <p class="font-arimo">NT$ {{ cartItem.total }}</p>
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
            寄送資訊
          </p>
          <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <VField
                id="email"
                name="email"
                type="email"
                class="form-control border-dark border-opacity-40 rounded-0"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="orderData.user.email"
              ></VField>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <VField
                id="name"
                name="姓名"
                type="text"
                class="form-control border-dark border-opacity-40 rounded-0"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="orderData.user.name"
              ></VField>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <VField
                id="tel"
                name="電話"
                type="tel"
                class="form-control border-dark border-opacity-40 rounded-0"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="orderData.user.tel"
              ></VField>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <VField
                id="address"
                name="地址"
                type="text"
                class="form-control border-dark border-opacity-40 rounded-0"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="orderData.user.address"
              ></VField>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control border-dark border-opacity-40 rounded-0"
                cols="30"
                rows="10"
                v-model="orderData.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-primary text-light w-100">
                提交訂單
              </button>
            </div>
          </VForm>
        </div>

        <!-- 總額 end-->
      </div>
      <!-- 金額 end-->
    </div>
  </div>
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import loadingStore from "../../stores/loadingStore.js";
import LoadingComponent from "../../components/LoadingComponent.vue";
import { mapActions, mapState } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { Toast } from "../../utils/toast.js";
export default {
  data() {
    return {
      orderData: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      orderId: "",
      isLoading: true,
    };
  },
  components: {
    LoadingComponent,
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請填寫正確的手機號碼格式";
    },
    createOrder() {
      this.isLoading = true;
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, {
          data: this.orderData,
        })
        .then((res) => {
          this.$refs.form.resetForm(); //清空表單
          this.orderData.message = "";
          this.orderId = res.data.orderId;
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.isLoading = false;
          this.$router.push(`/pay/${this.orderId}`);
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
    this.isLoading = false;
  },
};
</script>
