<template>
  <div class="title py-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      >News Content
    </span>
    <h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">消息內容</h1>
  </div>
  <div class="container">
    <div
      class="row px-0 border-bottom border-dark border-opacity-10 pb-11 pb-lg-17"
    >
      <div class="col-lg-7 ps-lg-0 mb-6">
        <div>
          <img :src="article.image" alt="" />
        </div>
      </div>
      <div class="col-lg-5">
        <div class="d-flex gap-6 align-items-center mb-8">
          <p
            class="font-serifTc fs-sm bg-secondary-dark py-2 px-3 text-dark d-inline-block"
          >
            {{ article.tag }}
          </p>
          <p class="text-dark text-opacity-70">
            {{ formatDate(article.create_at) }}
          </p>
        </div>
        <h1 class="font-serifTc">{{ article.title }}</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-lg-8 font-serifTc my-11 mt-lg-17 mb-lg-14">
        <div>
          {{ contentWithoutPTag }}
        </div>
      </div>
    </div>
    <div class="row justify-content-end mb-17">
      <div class="col-lg-8">
        <RouterLink
          to="/articles"
          class="d-flex flex-row-reverse align-items-center justify-content-center gap-5 py-7 border-top border-bottom border-dark border-opacity-10"
        >
          <div class="d-flex gap-1">
            <div>
              <div
                class="w-2n h-2n bg-secondary-light border-dark border mb-1"
              ></div>
              <div
                class="w-2n h-2n bg-secondary-light border-dark border"
              ></div>
            </div>
            <div>
              <div
                class="w-2n h-2n bg-secondary-light border-dark border mb-1"
              ></div>
              <div
                class="w-2n h-2n bg-secondary-light border-dark border"
              ></div>
            </div>
          </div>
          <p class="fs-2xl font-english">Back To List</p>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="text-center mb-8">
      <div class="w-100 h-1 bg-secondary-dark mb-8"></div>
      <p class="font-english fs-3xl">Latest News</p>
      <p class="fw-medium fs-xl">最新消息</p>
    </div>
    <ul class="gap-7 row justify-content-center mb-11">
      <li
        class="col-lg-8"
        v-for="article in articlesList.slice(0, 3)"
        :key="article.id"
      >
        <RouterLink :to="`/article/${article.id}`">
          <div
            class="d-flex justify-content-between border-bottom border-dark border-opacity-50"
          >
            <div class="d-flex flex-column flex-md-row">
              <div class="py-7">
                <p
                  class="fs-sm bg-secondary-dark py-2 px-3 text-dark font-serifTc d-inline-block mb-5"
                >
                  {{ article.tag }}
                </p>
                <p class="fs-xl fw-medium mb-3 text-dark font-serifTc">
                  {{ article.title }}
                </p>
                <div>
                  <p class="text-dark text-opacity-70">
                    {{ formatDate(article.create_at) }}
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-end">
              <i
                class="bi bi-arrow-up-right fs-lg pb-2 text-dark text-opacity-70"
              ></i>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { Toast } from "../../utils/toast.js";

export default {
  data() {
    return {
      article: [],
      articlesList: [],
      articleContent: "",
    };
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    },
    getArticle(id) {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          console.log(res.data.article);
          this.article = res.data.article;
          this.articleContent = res.data.article.content;
          console.log(this.articleContent);
        });
    },
    getArticleList() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          console.log(res.data.articles);
          this.articlesList = res.data.articles;
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        });
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    contentWithoutPTag() {
      // 移除 <p> 與 </p> 標籤
      return this.articleContent.replace(/<\/?p>/g, "");
    },
  },
  watch: {
    id(newID) {
      this.routeID = newID;
      if (this.$route.name === "article") {
        this.getArticle(this.routeID);
      }
    },
  },
  mounted() {
    this.routeID = this.$route.params.id;
    this.getArticle(this.routeID);
    this.getArticleList();
  },
};
</script>
