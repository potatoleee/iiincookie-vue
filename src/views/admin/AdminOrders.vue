<template>
  <h1 class="fs-2xl border-bottom border-secondary pb-2">訂單管理</h1>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">訂單日期</th>
        <th width="120">訂單編號</th>
        <th width="120">聯絡人</th>
        <th width="120">金額</th>
        <th width="100">付款狀態</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orderData" :key="order.id">
        <td>{{ formatDate(order.create_at) }}</td>
        <td>{{ order.id }}</td>
        <td>
          {{ order.user.name }}
          {{ order.user.email }}
        </td>
        <td>NT${{ order.total }}</td>
        <td>
          <span v-if="order.is_paid" class="text-success">已付款</span>
          <span v-else>未付款</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', order)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', order)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationComponent
    :page-in="pagination"
    @getPages="getOrderList"
  ></PaginationComponent>

  <OrderModal
    :inner-temp-order="tempOrder"
    @orderConfirm="editOrderModal"
    ref="orderModal"
  ></OrderModal>
  <!-- 刪除 Modal start-->
  <DeleteModal
    :deleteItem="tempOrder"
    @del-item="deleteOrder"
    ref="deleteModal"
  ></DeleteModal>
  <!-- 刪除 Modal end-->
</template>

<script>
import DeleteModal from "../../components/admin/DeleteModal.vue";
import PaginationComponent from "../../components/PaginationComponent.vue";
import OrderModal from "../../components/admin/OrderModal.vue";
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      pagination: {},
      orderData: [],
      tempOrder: {},
    };
  },
  methods: {
    getOrderList(currentPage = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/?page=${currentPage}`
        )
        .then((res) => {
          console.log(res.data);
          this.orderData = res.data.orders;
          this.pagination = res.data.pagination;
          console.log(this.orderData);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    },
    openModal(state, order) {
      if (state === "edit") {
        this.$refs.orderModal.show();
        this.tempOrder = { ...order };
      } else if (state === "delete") {
        this.$refs.deleteModal.show();
        this.tempOrder = { ...order };
      }
    },
    deleteOrder() {
      this.$http
        .delete(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
        )
        .then((res) => {
          alert(res.data.message);
          this.$refs.deleteModal.hide();
          this.getOrderList();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    editOrderModal(order) {
      const orderInfo = {
        is_paid: order.is_paid,
      };
      this.$http
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${order.id}`, {
          data: orderInfo,
        }) //這邊格式比較特別本來，要對照文件給的格式放入data
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "已訂單資訊",
            showConfirmButton: false,
            timer: 800,
          });
          this.$refs.orderModal.hide();
          this.getOrderList();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
  mounted() {
    //取出Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    this.getOrderList();
  },
  components: {
    PaginationComponent,
    DeleteModal,
    OrderModal,
  },
};
</script>
