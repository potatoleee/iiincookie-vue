<template>
  <div
    id="editProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="editProductModalLabel"
    aria-hidden="true"
    ref="editProductModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="editProductModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
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
              <div class="col-sm-4">
                <!-- 主要圖片 start-->
                <UploadImages></UploadImages>
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">主要圖片</label>
                  <VField
                    v-model="tempData.imageUrl"
                    type="text"
                    name="主要圖片"
                    class="form-control mb-2"
                    :class="{ 'is-invalid': errors['主要圖片'] }"
                    rules="required"
                    placeholder="請輸入圖片連結"
                  ></VField>
                  <ErrorMessage
                    name="主要圖片"
                    class="invalid-feedback"
                  ></ErrorMessage>

                  <img
                    class="img-fluid"
                    :src="tempData.imageUrl"
                    :alt="tempData.title"
                  />
                </div>
                <!-- 主要圖片 end-->
                <!-- 次要圖片 start -->
                <h3 class="mb-3">次要圖片</h3>
                <!-- 判斷是否已經有建立 次要照片 陣列-->
                <div v-if="Array.isArray(tempData.imagesUrl)">
                  <div
                    class="mb-1"
                    v-for="(image, key) in tempData.imagesUrl"
                    :key="key"
                  >
                    <div class="mb-3">
                      <label for="imageUrl"> 圖片網址</label>
                      <input
                        type="text"
                        v-model="tempData.imagesUrl[key]"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <img class="img-fluid" :src="image" :alt="tempData.title" />
                  </div>
                  <!-- 前面判斷陣列為空的時後 後面 tempData.imagesUrl[tempData.imagesUrl.length - 1] 的原因是因為當長度1時 會得到 tempData.imagesUrl[0] 再來長度為2時 tempData.imagesUrl[1]第二筆-->
                  <div
                    v-if="
                      tempData.imagesUrl.length == 0 ||
                      tempData.imagesUrl[tempData.imagesUrl.length - 1]
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="tempData.imagesUrl.push('')"
                    >
                      新增圖片2
                    </button>
                  </div>
                  <div v-else>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="tempData.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
                <!-- 當判斷 tempData.imagesUrl 不存在時開啟 可能新建產品時就沒有新增次要照片-->
                <div v-else>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImage"
                  >
                    新增圖片1
                  </button>
                </div>
                <!-- 次要圖片 end -->
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">產品名稱</label>
                  <VField
                    id="title"
                    type="text"
                    class="form-control"
                    name="產品名稱"
                    :class="{ 'is-invalid': errors['產品名稱'] }"
                    rules="required"
                    placeholder="請輸入產品名稱"
                    v-model="tempData.title"
                  ></VField>
                  <ErrorMessage
                    name="產品名稱"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <VField
                      id="category"
                      type="text"
                      class="form-control"
                      name="分類"
                      :class="{ 'is-invalid': errors['分類'] }"
                      rules="required"
                      placeholder="請輸入分類"
                      v-model="tempData.category"
                    ></VField>
                    <ErrorMessage
                      name="分類"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <VField
                      id="unit"
                      type="text"
                      class="form-control"
                      name="單位"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                      placeholder="請輸入單位"
                      v-model="tempData.unit"
                    ></VField>
                    <ErrorMessage
                      name="單位"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VField
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      name="原價"
                      :class="{ 'is-invalid': errors['原價'] }"
                      rules="required"
                      placeholder="請輸入原價"
                      v-model.number="tempData.origin_price"
                    ></VField>
                    <ErrorMessage
                      name="原價"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <VField
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      name="售價"
                      :class="{ 'is-invalid': errors['售價'] }"
                      rules="required"
                      placeholder="請輸入售價"
                      v-model.number="tempData.price"
                    ></VField>
                    <ErrorMessage
                      name="售價"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-12">
                    <label for="flavor" class="form-label">口味</label>
                    <VField
                      id="flavor"
                      type="text"
                      class="form-control"
                      name="口味"
                      :class="{ 'is-invalid': errors['口味'] }"
                      rules="required"
                      placeholder="請輸入口味"
                      v-model.number="tempData.flavor"
                    ></VField>
                    <ErrorMessage
                      name="口味"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <VField
                    id="description"
                    type="text"
                    class="form-control"
                    name="產品描述"
                    :class="{ 'is-invalid': errors['產品描述'] }"
                    rules="required"
                    as="textarea"
                    placeholder="請輸入產品描述"
                    v-model="tempData.description"
                  >
                  </VField>
                  <ErrorMessage
                    name="產品描述"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <VField
                    id="content"
                    type="text"
                    class="form-control"
                    name="說明內容"
                    :class="{ 'is-invalid': errors['說明內容'] }"
                    rules="required"
                    as="textarea"
                    placeholder="請輸入說明內容"
                    v-model="tempData.content"
                  >
                  </VField>
                  <ErrorMessage
                    name="說明內容"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempData.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">{{
                      tempData.is_enabled ? "啟用" : "不啟用"
                    }}</label>
                  </div>
                </div>
              </div>
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
              確認
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImages from "@/components/admin/UploadImages.vue";
import { Modal } from "bootstrap";
import { Toast } from "@/utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["isNew", "innerTempData"],
  data() {
    return {
      //v-model 單向資料流問題
      tempData: JSON.parse(JSON.stringify(this.innerTempData)), //使用深拷貝並將父元件tempData拷貝到innerTempData
      editProductModal: "",
    };
  },
  methods: {
    //確認按鈕
    confirm() {
      //初始為新增
      let http = "post";
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;
      //判斷為編輯
      if (this.isNew === false) {
        http = "put";
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempData.id}`;
      }
      this.$http[http](url, { data: this.tempData }) //這邊格式比較特別本來，要對照文件給的格式放入data
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.editProductModal.hide();
          this.$emit("update"); //emit 觸發外層 getProductList()
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    //新增圖片
    createImage() {
      this.tempData.imagesUrl = []; //新增input欄位放入網址
      this.tempData.imagesUrl.push("");
    },
    show() {
      this.editProductModal.show();
    },
    hide() {
      this.editProductModal.hide();
    },
  },
  watch: {
    //監聽props
    innerTempData() {
      this.tempData = this.innerTempData;
    },
  },
  components: {
    UploadImages,
  },
  mounted() {
    this.editProductModal = new Modal(this.$refs.editProductModal);
  },
};
</script>
