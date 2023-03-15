<template>
  <div
    id="deleteAllModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteAllModalLabel"
    aria-hidden="true"
    ref="deleteAllModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-secondary py-5">
        <div class="modal-header justify-content-center border-0 pb-0">
          <h5 id="deleteAllModalLabel" class="modal-title">
            <span>刪除全部</span>
          </h5>
        </div>
        <div class="modal-body text-center mb-7">
          {{ message }}
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
// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: {
    message: String,
  },
  data() {
    return {
      deleteAllModal: "",
    };
  },
  methods: {
    deleteConfirm() {
      this.$emit("deleteConfirm");
    },
    show() {
      this.deleteAllModal.show();
    },
    hide() {
      this.deleteAllModal.hide();
    },
  },
  mounted() {
    this.deleteAllModal = new Modal(this.$refs.deleteAllModal);
  },
};
</script>
