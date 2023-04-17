<template>
  <div
    id="orderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="orderModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="orderModalLabel" class="modal-title">
            <span>編輯訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>訂單資訊</p>
          {{ tempOrder.id }}
          <div class="form-check">
            <input
              id="is_paid"
              class="form-check-input"
              type="checkbox"
              v-model="tempOrder.is_paid"
              :true-value="true"
              :false-value="false"
            />
            <label class="form-check-label" for="is_paid">{{
              tempOrder.is_paid ? "已付款" : "未付款"
            }}</label>
          </div>
          <h3>客戶資訊</h3>
          <ul>
            <li>客戶姓名：{{ tempOrder.user?.name }}</li>
            <li>聯絡電話：{{ tempOrder.user?.tel }}</li>
            <li>電子信箱：{{ tempOrder.user?.email }}</li>
            <li>寄送地址：{{ tempOrder.user?.address }}</li>
            <li>備註：{{ tempOrder.message }}</li>
          </ul>
          <!-- 訂購品項 -->
          <h3>訂單品項</h3>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th>品項</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in tempOrder.products"
                  :key="product.products"
                >
                  <td>{{ product.product.title }}</td>
                  <td>NT$ {{ product.product.price }}</td>
                  <td>{{ product.qty }}</td>
                  <td>NT$ {{ product.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-end">
            <p>總計：NT$ {{ Math.round(tempOrder.total) }}</p>
          </div>
          <!-- 訂購品項 -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="hide">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-light"
            @click="orderConfirm"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  props: {
    innerTempOrder: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      orderModal: "",
      tempOrder: {},
    };
  },
  methods: {
    orderConfirm() {
      this.$emit("orderConfirm", this.tempOrder);
    },
    show() {
      this.orderModal.show();
    },
    hide() {
      this.orderModal.hide();
    },
  },
  watch: {
    //監聽props
    innerTempOrder() {
      this.tempOrder = this.innerTempOrder;
    },
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.orderModal);
  },
};
</script>
