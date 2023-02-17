<template>
  <div class="container">
    <VueLoading v-model:active="isLoading"></VueLoading>
    <!-- 購物車列表 -->
    <div class="text-end" v-if="cartList.carts?.length > 0">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="deleteAllCartItem()"
      >
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>品項</th>
          <th class="text-center">單價</th>
          <th class="text-center">數量</th>
          <th class="text-center">小計</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="cartList.carts?.length > 0">
        <tr v-for="cartItem in cartList.carts" :key="cartItem.id">
          <td class="d-flex align-items-center gap-2">
            <div
              alt=""
              style="
                width: 100px;
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${cartItem.product.imageUrl})` }"
            ></div>
            <div>
              <p class="mb-0">
                {{ cartItem.product.title }}
              </p>
              <p class="mb-0">NT$ {{ cartItem.product.price }}</p>
            </div>
          </td>
          <td class="text-center">NT$ {{ cartItem.product.price }}</td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select
                  name=""
                  id=""
                  class="form-control"
                  v-model="cartItem.qty"
                  @change="updateCartItem(cartItem)"
                  :disabled="cartItem.id === loadingItem"
                >
                  <option :value="i" v-for="i in 25" :key="i + `123`">
                    {{ i }}
                  </option>
                </select>
              </div>
            </div>
          </td>
          <td class="text-center">NT$ {{ cartItem.total }}</td>

          <td class="text-end">
            <button
              type="button"
              class="btn"
              @click="deleteCartItem(cartItem)"
              :disabled="cartItem.id === loadingItem"
            >
              <i
                v-if="cartItem.id === loadingItem"
                class="fas fa-spinner fa-pulse"
              ></i>
              x
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="text-center">目前購物車沒有商品</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="text-end">總計</td>
          <td class="text-end">NT$ {{ cartList.total }}</td>
        </tr>
        <tr>
          <td colspan="4" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">NT$ {{ cartList.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <router-link to="/order" class="btn btn-primary">去買單</router-link>
  </div>
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import loadingStore from "../../stores/loadingStore.js";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      productListData: [],
      productId: "",
      loadingItem: "", //loading效果項目暫存區
    };
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "deleteCartItem",
      "updateCartItem",
      "deleteAllCartItem",
    ]),
  },
  computed: {
    ...mapState(cartStore, ["cartList"]),
    ...mapState(loadingStore, ["isLoading"]),
  },
  mounted() {
    this.getCartList();
    console.log(this.isLoading);
  },
};
</script>
