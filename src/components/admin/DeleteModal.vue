<template>
  <div
    id="deleteProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteProductModalLabel"
    aria-hidden="true"
    ref="deleteProductModal"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="deleteProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempData.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["tempData"],
  data() {
    return {
      deleteProductModal: "",
    };
  },
  methods: {
    deleteProduct() {
      this.$http
        .delete(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempData.id}`
        )
        .then((res) => {
          alert(res.data.message);
          this.deleteProductModal.hide();
          this.$emit("update"); //emit 觸發外層 getProductList()
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    show() {
      this.deleteProductModal.show();
    },
    hide() {
      this.deleteProductModal.hide();
    },
  },
  mounted() {
    this.deleteProductModal = new Modal(this.$refs.deleteProductModal);
  },
};
</script>
