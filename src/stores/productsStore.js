import { defineStore } from "pinia";
import axios from "axios";
import loadingStore from "./loadingStore.js";
const loading = loadingStore();
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore("productsStore", {
  state: () => ({
    productList: [],
    page: {},
  }),
  actions: {
    getProductList(page = 1) {
      loading.isLoading = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.productList = res.data.products;
          this.page = res.data.pagination;
          console.log(this.page);
        })
        .catch((error) => {
          alert(error.data.message);
        })
        .finally(() => {
          loading.isLoading = false;
        });
    },
  },
  getters: {
    sortProducts: ({ productList }) => {
      return productList;
    },
    pageIn: ({ page }) => {
      return page;
    },
  },
});
