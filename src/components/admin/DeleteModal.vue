<template>
  <div
    id="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
    ref="deleteModal"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="deleteModalLabel" class="modal-title">
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
          <strong class="text-danger">{{ deleteItem.title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteConfirm">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["deleteItem"],
  data() {
    return {
      deleteModal: "",
    };
  },
  methods: {
    deleteConfirm() {
      this.$emit("del-item");
    },
    show() {
      this.deleteModal.show();
    },
    hide() {
      this.deleteModal.hide();
    },
  },
  mounted() {
    this.deleteModal = new Modal(this.$refs.deleteModal);
  },
};
</script>
