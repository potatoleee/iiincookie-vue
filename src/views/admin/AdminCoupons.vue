<template>
  <VueLoading v-model:active="isLoading" />
  <h1 class="fs-2xl border-bottom border-secondary pb-2">優惠券管理</h1>
  <div class="text-end mt-4">
    <button
      type="button"
      class="btn btn-primary text-light"
      @click="openModal('new', coupon)"
    >
      建立新優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">優惠券標題</th>
        <th width="120">優惠碼</th>
        <th width="120">折扣百分比</th>
        <th width="120">到期日</th>
        <th width="100">啟用狀態</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.code }}</td>
        <td>{{ coupon.percent }}</td>
        <td>{{ formatDate(coupon.due_date) }}</td>
        <td>
          <span v-if="coupon.is_enabled" class="text-success">已啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', coupon)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', coupon)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationComponent :page-in="pagination" @getPages="getCouponList" />
  <CouponsModal
    ref="couponsModal"
    :innerTempCoupon="tempCoupon"
    :isNew="isNew"
    @update="getCouponList"
  />

  <DeleteModal
    :deleteItem="tempCoupon"
    :deleteModalTitle="'優惠券'"
    @del-item="deleteCoupon"
    ref="deleteModal"
  />
</template>

<script>
import CouponsModal from "@/components/admin/CouponsModal.vue";
import DeleteModal from "@/components/admin/DeleteModal.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import { Toast } from "@/utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      isNew: false,
      tempCoupon: {
        title: "",
        is_enabled: 1,
        percent: 100,
        code: "",
      },
      isLoading: false,
    };
  },
  methods: {
    openModal(state, coupon) {
      if (state === "new") {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 1,
        };
        this.$refs.couponsModal.show();
        this.isNew = true;
      } else if (state === "edit") {
        this.$refs.couponsModal.show();
        this.tempCoupon = { ...coupon };
        this.isNew = false;
      } else if (state === "delete") {
        this.$refs.deleteModal.show();
        this.tempCoupon = { ...coupon };
        this.isNew = false;
      }
    },

    getCouponList(currentPage = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons/?page=${currentPage}`
        )
        .then((res) => {
          this.isLoading = false;
          this.pagination = res.data.pagination;
          this.coupons = res.data.coupons;
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    },
    deleteCoupon() {
      this.$http
        .delete(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        )
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.$refs.deleteModal.hide();
          this.getCouponList();
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
  mounted() {
    this.getCouponList();
  },
  components: {
    CouponsModal,
    DeleteModal,
    PaginationComponent,
  },
};
</script>
