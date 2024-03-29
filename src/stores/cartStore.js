import { defineStore } from "pinia";
import axios from "axios";
import { Toast } from "@/utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      cartList: [],
      totalQty: 0,
      loadingItem: "",
    };
  },
  actions: {
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      this.loadingItem = product_id;
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data }) //{data:data}同名可以縮寫
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    getCartList() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.totalQty = 0;
          this.cartList = res.data.data;
          this.cartList.carts.forEach((item) => {
            this.totalQty += item.qty;
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    updateCartItem(cartItem) {
      const data = {
        product_id: cartItem.product_id,
        qty: cartItem.qty,
      };
      this.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then(() => {
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    addNum(cartItem) {
      const data = {
        product_id: cartItem.product_id,
        qty: cartItem.qty + 1,
      };
      this.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then(() => {
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    decreaseNum(cartItem) {
      const data = {
        product_id: cartItem.product_id,
        qty: cartItem.qty - 1,
      };
      this.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then(() => {
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    deleteCartItem(cartItem) {
      this.loadingItem = cartItem.id;
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`) //{data:data}同名可以縮寫
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.getCartList();
          this.loadingItem = "";
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    deleteAllCartItem() {
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "已刪除全部品項",
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
});

export default cartStore;
