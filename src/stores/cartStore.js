import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import loadingStore from "./loadingStore.js";
const loading = loadingStore();
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("cartStore", {
  state: () => ({
    cart: {},
  }),
  actions: {
    addToCart(product_id) {
      const data = {
        product_id,
        qty: 1,
      };
      this.loadingItem = product_id;
      // loading.isLoading = true;
      //   this.$http 不能用這種方式？
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data }) //{data:data}同名可以縮寫
        .then(() => {
          this.getCartList();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "已加入購物車",
            showConfirmButton: false,
            timer: 800,
          });
          this.loadingItem = ""; //清空loading暫存
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    getCartList() {
      loading.isLoading = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
        })
        .catch((error) => {
          alert(error.response.data.message);
        })
        .finally(() => {
          loading.isLoading = false;
        });
    },
    updateCartItem(cartItem) {
      //購物車的id 產品的id
      const data = {
        product_id: cartItem.product_id,
        qty: cartItem.qty,
      };
      this.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then((res) => {
          console.log(res);
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    deleteCartItem(cartItem) {
      loading.isLoading = true;
      this.loadingItem = cartItem.id;
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`) //{data:data}同名可以縮寫
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "已刪除品項",
            showConfirmButton: false,
            timer: 800,
          });
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          alert(error.response.data.message);
        })
        .finally(() => {
          loading.isLoading = false;
        });
    },
    deleteAllCartItem() {
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "已刪除全部品項",
            showConfirmButton: false,
            timer: 800,
          });
          this.getCartList();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
  getters: {
    cartList: ({ cart }) => {
      return cart;
    },
  },
});
