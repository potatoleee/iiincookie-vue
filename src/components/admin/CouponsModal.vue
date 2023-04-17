<template>
  <div
    id="couponsModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="couponsModalLabel"
    aria-hidden="true"
    ref="couponsModal"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="couponsModalLabel" class="modal-title">
            <span v-if="isNew">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <VForm ref="form" v-slot="{ errors }" @submit="confirm">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3 col-12">
                <label for="coupon_title" class="form-label">優惠券名稱</label>

                <VField
                  id="coupon_title"
                  name="優惠券名稱"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['優惠券名稱'] }"
                  placeholder="請輸入優惠券名稱"
                  v-model="tempCoupon.title"
                  rules="required"
                />
                <ErrorMessage name="優惠券名稱" class="invalid-feedback" />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-12">
                <label for="coupon_code" class="form-label">優惠券代碼</label>
                <VField
                  id="coupon_code"
                  name="優惠券代碼"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['優惠券代碼'] }"
                  rules="required"
                  placeholder="請輸入優惠券代碼"
                  v-model="tempCoupon.code"
                />

                <ErrorMessage name="優惠券代碼" class="invalid-feedback" />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-12">
                <label for="coupon_percent" class="form-label">優惠折扣</label>
                <VField
                  id="coupon_percent"
                  name="優惠折扣"
                  type="number"
                  class="form-control"
                  :class="{ 'is-invalid': errors['優惠折扣'] }"
                  rules="required|between:1,100"
                  placeholder="請輸入優惠百分比 (60 = 6折)"
                  v-model.number="tempCoupon.percent"
                  min="1"
                  max="100"
                />
                <ErrorMessage name="優惠折扣" class="invalid-feedback" />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-12">
                <label for="coupon_endDate" class="form-label"
                  >優惠券到期日</label
                >
                <input
                  id="coupon_endDate"
                  type="date"
                  class="form-control"
                  placeholder="請選擇優惠券到期日"
                  v-model="due_date"
                  :min="minDate"
                />
              </div>
            </div>
            <div class="form-check">
              <input
                id="is_enabled"
                class="form-check-input"
                type="checkbox"
                v-model="tempCoupon.is_enabled"
                :true-value="1"
                :false-value="0"
              />
              <label class="form-check-label" for="is_enabled">{{
                tempCoupon.is_enabled ? "啟用" : "不啟用"
              }}</label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="hide"
            >
              取消
            </button>
            <button type="submit" class="btn btn-primary text-light">
              {{ this.isNew ? "新增優惠券" : "更新優惠券" }}
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { Toast } from "@/utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  props: ["isNew", "innerTempCoupon"],
  data() {
    return {
      tempCoupon: {},
      couponsModal: "",
      due_date: "",
    };
  },
  methods: {
    //確認按鈕
    confirm() {
      //初始為新增
      let http = "post";
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`;
      //判斷為編輯
      if (this.isNew === false) {
        http = "put";
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      }
      this.$http[http](url, { data: this.tempCoupon })
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.couponsModal.hide();
          this.$emit("update");
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    show() {
      this.couponsModal.show();
    },
    hide() {
      this.couponsModal.hide();
    },
  },
  computed: {
    minDate() {
      // 取得今天的日期
      const today = new Date();
      // 設定日期格式為 "YYYY-MM-DD"
      const formattedDate = today.toISOString().substr(0, 10);
      // 回傳今天的日期
      return formattedDate;
    },
  },
  watch: {
    innerTempCoupon() {
      this.tempCoupon = this.innerTempCoupon;
      //將外面傳進來的時間轉成 YYYY-MM-DD
      const timeStampToDate = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split("T");
      this.due_date = timeStampToDate[0];
    },
    due_date() {
      //監聽modal裡面的日期 轉換成 timeStamp
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  mounted() {
    this.couponsModal = new Modal(this.$refs.couponsModal);
  },
};
</script>
