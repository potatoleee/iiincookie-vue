<template>
  <div
    id="articleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="articleModalabel"
    aria-hidden="true"
    ref="articleModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="articleModalLabel" class="modal-title">
            <span v-if="isNew">新增文章</span>
            <span v-else>編輯文章</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <UploadImages></UploadImages>
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="article_image" class="form-label">文章圖片網址</label>
              <input
                id="article_image"
                type="text"
                class="form-control"
                placeholder="請輸入文章圖片網址"
                v-model="tempArticle.image"
              />
            </div>
            <img class="img-fluid" :src="tempArticle.image" />
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="article_title" class="form-label">文章標題</label>
              <input
                id="article_title"
                type="text"
                class="form-control"
                placeholder="請輸入文章標題"
                v-model="tempArticle.title"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="article_create_at" class="form-label">創立時間</label>
              <input
                id="article_create_at"
                type="date"
                class="form-control"
                placeholder="請輸入文章標題"
                v-model="create_at"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="article_author" class="form-label">文章作者</label>
              <input
                id="article_author"
                type="text"
                class="form-control"
                placeholder="請輸入文章作者"
                v-model="tempArticle.author"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="article_description" class="form-label"
                >文章描述</label
              >
              <input
                id="article_description"
                type="text"
                class="form-control"
                placeholder="請輸入文章標題"
                v-model="tempArticle.description"
              />
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <p>文章內容</p>
            </div>
            <div class="w-100">
              <ckeditor
                :editor="editor"
                v-model="tempArticle.content"
                :config="editorConfig"
              ></ckeditor>
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-md-12">
              <label for="article_tag" class="form-label">文章標籤</label>
              <input
                id="article_tag"
                type="text"
                class="form-control"
                placeholder="請輸入文章標題"
                v-model="tempArticle.tag"
              />
            </div>
          </div>
          <div class="form-check">
            <input
              id="isPublic"
              class="form-check-input"
              type="checkbox"
              v-model="tempArticle.isPublic"
              :true-value="true"
              :false-value="false"
            />
            <label class="form-check-label" for="isPublic">{{
              tempArticle.isPublic ? "啟用" : "不啟用"
            }}</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="hide">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="confirm">
            {{ this.isNew ? "新增文章" : "更新文章" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadImages from "../../components/admin/UploadImages.vue";
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["isNew", "innerTempArticle"],
  data() {
    return {
      tempArticle: {},
      articleModal: "",
      create_at: 0,
      content: "",
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "|",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "undo",
          "redo",
        ],
      },
    };
  },
  methods: {
    //確認按鈕
    confirm() {
      //初始為新增
      let http = "post";
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`;
      //判斷為編輯
      if (this.isNew === false) {
        http = "put";
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      }
      this.$http[http](url, { data: this.tempArticle }) //這邊格式比較特別本來，要對照文件給的格式放入data
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "已更新文章",
            showConfirmButton: false,
            timer: 800,
          });
          this.articleModal.hide();
          this.$emit("update");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    show() {
      this.articleModal.show();
    },
    hide() {
      this.articleModal.hide();
    },
  },
  watch: {
    //監聽props
    innerTempArticle() {
      this.tempArticle = this.innerTempArticle;
      const timeStampToDate = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split("T");
      // .split('T') : 使用 "T" 分隔符將日期和時間拆分為一個數組，例如 ["2023-02-20", "13:42:30.000Z"]。
      this.create_at = timeStampToDate[0];
    },
    create_at() {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    },
  },
  mounted() {
    this.articleModal = new Modal(this.$refs.articleModal);
    console.log(this.tempData);
  },
  components: {
    UploadImages,
  },
};
</script>
