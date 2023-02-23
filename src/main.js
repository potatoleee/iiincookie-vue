import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import AllRules from "@vee-validate/rules";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

//載入驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), //載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

//設定預設語系
setLocale("zh_TW");

const app = createApp(App);
app.use(CKEditor);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.component("VueLoading", Loading);
app.component("VField", Field);
app.component("VForm", Form);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
