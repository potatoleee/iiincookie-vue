<template>
  <h1 class="fs-2xl border-bottom border-secondary pb-2">文章管理</h1>
  <div class="text-end mt-4">
    <button
      type="button"
      class="btn btn-primary"
      @click="openModal('new', article)"
    >
      建立新文章
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">文章標題</th>
        <th width="120">標籤</th>
        <th width="120">創建日</th>
        <th width="100">是否發佈</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in sortedArticles" :key="article.id">
        <td>{{ article.title }}</td>
        <td>{{ article.tag }}</td>
        <td>{{ formatDate(article.create_at) }}</td>
        <td>
          <span v-if="article.isPublic" class="text-success">已啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openArticle(article)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', article)"
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
    @getPages="getArticleList"
  ></PaginationComponent>
  <ArticleModal
    ref="articleModal"
    :innerTempArticle="tempArticle"
    :isNew="isNew"
    @update="getArticleList"
  >
  </ArticleModal>

  <DeleteModal
    :deleteItem="tempArticle"
    @del-item="deleteArticle"
    ref="deleteModal"
  ></DeleteModal>
</template>

<script>
import ArticleModal from "../../components/admin/ArticleModal.vue";
import DeleteModal from "../../components/admin/DeleteModal.vue";
import PaginationComponent from "../../components/PaginationComponent.vue";
import { Toast } from "../../utils/toast.js";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      articles: [],
      sortedArticles: [],
      pagination: {},
      isNew: false,
      tempArticle: {},
    };
  },
  methods: {
    //開啟modal
    openModal(state, article) {
      if (state === "new") {
        this.tempArticle = {
          create_at: new Date().getTime() / 1000,
          isPublic: true,
          tag: [],
          content: "",
        };
        this.$refs.articleModal.show();
        this.isNew = true;
      } else if (state === "edit") {
        this.$refs.articleModal.show();
        this.tempArticle = { ...article };
        this.isNew = false;
      } else if (state === "delete") {
        this.$refs.deleteModal.show();
        this.tempArticle = { ...article };
        this.isNew = false;
      }
    },
    getArticleList(currentPage = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/articles/?page=${currentPage}`
        )
        .then((res) => {
          this.pagination = res.data.pagination;
          this.articles = res.data.articles;
          console.log(this.articles);
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
    openArticle(article) {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${article.id}`)
        .then((res) => {
          this.tempArticle = res.data.article;
          this.$refs.articleModal.show();
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
    deleteArticle() {
      this.$http
        .delete(
          `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        )
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: `${res.data.message}`,
          });
          this.$refs.deleteModal.hide();
          this.getArticleList();
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
  watch: {
    articles: {
      handler(newArticles) {
        this.sortedArticles = newArticles.sort((a, b) => {
          return new Date(b.create_at) - new Date(a.create_at);
        });
      },
      immediate: true,
    },
  },
  mounted() {
    //取出Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    this.getArticleList();
  },
  components: {
    ArticleModal,
    DeleteModal,
    PaginationComponent,
  },
};
</script>
