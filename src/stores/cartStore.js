import { defineStore } from "pinia";
import axios from "axios";
import { Toast } from "../utils/toast.js";
import loadingStore from "./loadingStore.js";
const loading = loadingStore();
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      cartList: [],
      totalQty: 0,
    };
  },
  actions: {
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      loading.loadingItem = product_id;
      // loading.isLoading = true;
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data }) //{data:data}同名可以縮寫
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.getCartList();
          loading.loadingItem = ""; //清空loading暫存
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    getCartList() {
      loading.isLoading = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.totalQty = 0;
          this.cartList = res.data.data;
          console.log(this.cartList);
          this.cartList.carts.forEach((item) => {
            this.totalQty += item.qty;
          });
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
      loading.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then((res) => {
          console.log(res);
          this.getCartList();
          loading.loadingItem = "";
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    addNum(cartItem) {
      const data = {
        product_id: cartItem.product_id,
        qty: cartItem.qty + 1,
      };
      loading.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then((res) => {
          console.log(res);
          this.getCartList();
          loading.loadingItem = "";
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    decreaseNum(cartItem) {
      const data = {
        product_id: cartItem.product_id,
        qty: cartItem.qty - 1,
      };
      loading.loadingItem = cartItem.id;
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${cartItem.id}`, {
          data,
        }) //{data:data}同名可以縮寫
        .then((res) => {
          console.log(res);
          this.getCartList();
          loading.loadingItem = "";
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
        })
        .finally(() => {
          loading.isLoading = false;
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
  // getters: {
  //   cartList: ({ cart }) => {
  //     return cart;
  //   },
  // },
});

export default cartStore;
