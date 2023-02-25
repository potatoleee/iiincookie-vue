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
        <div class="modal-body">
          <p>{{ tempCoupon }}</p>
          <div class="row">
            <div class="mb-3 col-12">
              <label for="coupon_title" class="form-label">優惠券名稱</label>
              <input
                id="coupon_title"
                type="text"
                class="form-control"
                placeholder="請輸入優惠券名稱"
                v-model="tempCoupon.title"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-12">
              <label for="coupon_code" class="form-label">優惠券代碼</label>
              <input
                id="coupon_code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠券代碼"
                v-model="tempCoupon.code"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-12">
              <label for="coupon_percent" class="form-label">優惠折扣</label>
              <input
                id="coupon_percent"
                type="number"
                class="form-control"
                placeholder="請輸入優惠百分比"
                v-model.number="tempCoupon.percent"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-12">
              <label for="coupon_endDate" class="form-label"
                >優惠券到期日</label
              >
              <input
                id="coupon_endDate"
                type="datetime-local"
                class="form-control"
                placeholder="請選擇優惠券到期日"
                v-model="due_date"
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
          <button type="button" class="btn btn-outline-secondary" @click="hide">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="confirm">
            {{ this.isNew ? "新增優惠券" : "更新優惠券" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { Toast } from "../../utils/toast.js";

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
      this.$http[http](url, { data: this.tempCoupon }) //這邊格式比較特別本來，要對照文件給的格式放入data
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
  watch: {
    innerTempCoupon() {
      this.tempCoupon = this.innerTempCoupon;
      //將外面傳進來的時間轉成 YYYY-MM-DD
      const timeStampToDate = new Date(this.tempCoupon.due_date * 1000);
      this.due_date = timeStampToDate.toLocaleString();
      console.log(this.due_date);
      // .toISOString()
      // .split("T");
      // .split('T') : 使用 "T" 分隔符將日期和時間拆分為一個數組，例如 ["2023-02-20", "13:42:30.000Z"]。
      // this.due_date = timeStampToDate[0];
      //[this.due_data] = timeStampToDate;
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
