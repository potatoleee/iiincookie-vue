<template>
  <VueLoading v-model:active="isLoading" />
  <h1 class="fs-2xl border-bottom border-secondary pb-2">產品管理</h1>
  <div>
    <div class="text-end mt-4">
      <button
        type="button"
        class="btn btn-primary text-light"
        @click="openModal('new', product)"
      >
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td>NT${{ product.origin_price }}</td>
          <td>NT${{ product.price }}</td>
          <td>
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent :page-in="pagination" @getPages="getProductList" />
  </div>

  <ProductModal
    :inner-temp-data="tempData"
    @update="getProductList"
    :is-new="isNew"
    ref="editProductModal"
  />

  <DeleteModal
    :deleteItem="tempData"
    :deleteModalTitle="'產品'"
    @del-item="deleteProduct"
    ref="deleteModal"
  />
</template>

<script>
import DeleteModal from "@/components/admin/DeleteModal.vue";
import ProductModal from "@/components/admin/ProductModal.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import { Toast } from "@/utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      //產品資料
      products: [],
      pagination: {},
      isNew: false, //判斷是否為新增or編輯
      tempData: {
        imagesUrl: [],
        flavor: "",
        is_enabled: 1,
      },
      isLoading: false,
    };
  },
  methods: {
    getProductList(currentPage = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products/?page=${currentPage}`
        )
        .then((res) => {
          this.isLoading = false;
          this.pagination = res.data.pagination;
          this.products = res.data.products;
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    //確認開啟的modal類別
    openModal(state, product) {
      if (state === "new") {
        this.tempData = {
          imagesUrl: [],
          is_enabled: 1,
        };
        this.$refs.editProductModal.show();
        this.isNew = true;
      } else if (state === "edit") {
        this.$refs.editProductModal.show();
        this.tempData = { ...product };
        this.isNew = false;
      } else if (state === "delete") {
        this.$refs.deleteModal.show();
        this.tempData = { ...product };
        this.isNew = false;
      }
    },
    deleteProduct() {
      this.$http
        .delete(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempData.id}`
        )
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.$refs.deleteModal.hide();
          this.getProductList();
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
  //區域註冊
  components: {
    ProductModal,
    DeleteModal,
    PaginationComponent,
  },
  mounted() {
    this.getProductList();
  },
};
</script>
