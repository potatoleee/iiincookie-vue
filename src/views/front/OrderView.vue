<template>
  <!-- 資料表單 start-->
  <div class="my-5 row justify-content-center">
    <VForm
      ref="form"
      class="col-md-6"
      v-slot="{ errors }"
      @submit="createOrder"
    >
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="orderData.user.email"
        ></VField>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <VField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
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
          class="form-control"
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
          class="form-control"
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
          class="form-control"
          cols="30"
          rows="10"
          v-model="orderData.message"
        ></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </VForm>
  </div>
  <!-- 資料表單 start-->
</template>

<script>
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
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
    };
  },
  methods: {
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
          console.log(res);
          this.$refs.form.resetForm(); //清空表單
          this.orderData.message = "";
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "訂單建立成功",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "訂單建立失敗，請確認",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
};
</script>
