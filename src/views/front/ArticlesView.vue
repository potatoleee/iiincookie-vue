<template>
  <div class="title my-10 my-lg-15">
    <span
      class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"
      ref="splitNews"
      >News
    </span>
    <h1
      class="title-main font-serifTc fw-black fs-xl fs-lg-3xl"
      ref="splitNewsCh"
    >
      最新消息
    </h1>
  </div>
  <div class="container">
    <div
      class="d-flex align-items-center justify-content-center justify-content-md-start py-10 border-top border-bottom border-secondary mb-8 mb-lg-12"
    >
      <h3 class="fs-sm fs-md-base d-none d-md-block me-12 font-serifTc">Tag</h3>
      <ul class="d-flex gap-7 justify-content-center">
        <li class="fs-sm fs-md-base cursor-pointer cursor-pointer">
          <p
            class="px-3 px-md-4 py-1 font-serifTc"
            @click="currentTag = '全部消息'"
            :class="{ 'text-primary': currentTag === '全部消息' }"
          >
            全部消息
          </p>
        </li>
        <li class="fs-sm fs-md-base cursor-pointer cursor-pointer">
          <p
            class="px-3 px-md-4 py-1 font-serifTc"
            @click="currentTag = '產品消息'"
            :class="{ 'text-primary': currentTag === '產品消息' }"
          >
            產品消息
          </p>
        </li>
        <li class="fs-sm fs-md-base cursor-pointer cursor-pointer">
          <p
            class="px-3 px-md-4 py-1 font-serifTc"
            @click="currentTag = '活動消息'"
            :class="{ 'text-primary': currentTag === '活動消息' }"
          >
            活動消息
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="container mb-12">
    <ul class="d-flex flex-column gap-7">
      <li v-for="article in filterArticles" :key="article.id">
        <RouterLink :to="`/article/${article.id}`" class="hover-text-primary">
          <div
            class="d-flex justify-content-between border-bottom border-dark border-opacity-50"
          >
            <div class="d-flex flex-column flex-md-row">
              <div class="py-7">
                <p
                  class="fs-sm bg-secondary-dark py-2 px-3 d-inline-block mb-5 text-dark font-serifTc"
                >
                  {{ article.tag }}
                </p>
                <p class="fs-lg fs-lg-xl fw-medium mb-3 font-serifTc">
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
import { gsap } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(SplitType);
import { Toast } from "@/utils/toast.js";

export default {
  emits: ["split-index-products"],
  data() {
    return {
      articlesList: [],
      sortedArticles: [],
      currentTag: "全部消息",
    };
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString();
    },
    getArticleList() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
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
    filterArticles() {
      if (this.currentTag === "全部消息") {
        return this.sortedArticles;
      } else {
        return this.sortedArticles.filter((article) => {
          return article.tag === this.currentTag;
        });
      }
    },
  },
  watch: {
    articlesList: {
      handler(newArticles) {
        this.sortedArticles = newArticles.sort((a, b) => {
          return new Date(b.create_at) - new Date(a.create_at);
        });
      },
      immediate: true,
    },
  },

  mounted() {
    const splitNews = this.$refs.splitNews;
    const splitNewsCh = this.$refs.splitNewsCh;
    new SplitType(splitNews);
    new SplitType(splitNewsCh);
    splitNewsCh.querySelectorAll(".line").forEach((line) => {
      line.style.textAlign = "end";
    });
    this.$nextTick(() => {
      gsap.fromTo(
        splitNewsCh.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1.5,
          duration: 0.2,
        }
      );

      gsap.fromTo(
        splitNews.querySelectorAll(".char"),
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          stagger: 0.05,
          delay: 1.5,
          duration: 0.2,
        }
      );
      const maskBgElements = document.querySelectorAll(".mask-bg");

      maskBgElements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            markers: true,
            refreshPositions: true,
          },
          duration: 1,
          width: "0%",
          ease: "power3.inOut",
        });
      });
      gsap.to(".mask-bg", {
        duration: 1,
        width: "0%",
        ease: "power3.inOut",
        delay: 2,
      });
    });
    this.getArticleList();
  },
};
</script>
