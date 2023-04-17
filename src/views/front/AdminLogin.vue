<template>
  <div class="container">
    <div class="row justify-content-center align-items-center h-100vh">
      <div class="col-lg-6">
        <h1 class="text-center mb-4">餅乾生產餡後台登入</h1>
        <VForm v-slot="{ errors }" @submit="login">
          <div class="form-floating mb-3">
            <VField
              type="email"
              class="form-control"
              id="userName"
              placeholder="name@example.com"
              v-model="user.username"
              name="帳號"
              :class="{ 'is-invalid': errors['帳號'] }"
              rules="email|required"
            >
            </VField>
            <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
            <label for="userName">請輸入帳號 Email address</label>
          </div>
          <div class="form-floating mb-4">
            <VField
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="user.password"
              name="密碼"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
            >
            </VField>
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
            <label for="password">請輸入密碼 Password</label>
          </div>
          <button
            class="btn btn-primary text-light w-100 py-2 d-block mx-auto"
            type="submit"
          >
            登入
          </button>
        </VForm>
        <RouterLink to="/" class="text-center mt-2">back to index </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;
import { Toast } from "@/utils/toast.js";
export default {
  emits: ["split-index-products"],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$http
        .post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          // 一般寫法
          // const token = res.data.token;
          // const expired = res.data.expired;

          // 解構賦值寫法
          const { token, expired } = res.data;
          //存token ,expired;
          // document.cookie = "someCookieName=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/admin");
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
};
</script>
