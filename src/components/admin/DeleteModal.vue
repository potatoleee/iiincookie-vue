<template>
  <div
    id="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
    ref="deleteModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-secondary py-5">
        <div class="modal-header justify-content-center border-0 pb-0">
          <h5 id="deleteAllModalLabel" class="modal-title">
            <span>刪除{{ deleteModalTitle }}</span>
          </h5>
        </div>
        <div class="modal-body text-center mb-7">
          是否刪除
          <strong class="text-primary">{{ deleteItem.title }}</strong>
          <strong class="text-primary" v-if="!deleteItem.title">{{
            deleteItem.id
          }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="border-0 d-flex flex-column flex-lg-row p-5 gap-6">
          <button
            type="button"
            class="btn btn-primary text-secondary-light w-lg-50"
            @click="deleteConfirm"
          >
            確認刪除
          </button>
          <button
            type="button"
            class="btn btn-outline-dark w-lg-50"
            data-bs-dismiss="modal"
            @click="hide"
          >
            不要刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  props: ["deleteItem", "deleteModalTitle"],
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
