import{g as a}from"./gsap-8fc7659c.js";import{S as m}from"./split-type-cdcb87fd.js";import{T as h}from"./toast-94376381.js";import{_ as g}from"./index-f31f9db4.js";import{aN as x,aD as c,X as l,Y as t,as as d,F as u,aL as y,a4 as b,bk as T,a_ as p}from"./@vue-9b9f1f8d.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-fe912644.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */const{VITE_APP_URL:k,VITE_APP_PATH:w}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0};a.registerPlugin(m);const A={emits:["split-index-products"],data(){return{articlesList:[],sortedArticles:[],currentTag:"全部消息"}},methods:{formatDate(e){return new Date(e*1e3).toLocaleDateString()},getArticleList(){this.$http.get(`${k}/api/${w}/articles`).then(e=>{this.articlesList=e.data.articles}).catch(e=>{h.fire({icon:"error",title:`${e.response.data.message}`})})}},computed:{filterArticles(){return this.currentTag==="全部消息"?this.sortedArticles:this.sortedArticles.filter(e=>e.tag===this.currentTag)}},watch:{articlesList:{handler(e){this.sortedArticles=e.sort((s,i)=>new Date(i.create_at)-new Date(s.create_at))},immediate:!0}},mounted(){const e=this.$refs.splitNews,s=this.$refs.splitNewsCh;new m(e),new m(s),s.querySelectorAll(".line").forEach(i=>{i.style.textAlign="end"}),this.$nextTick(()=>{a.fromTo(s.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1.5,duration:.2}),a.fromTo(e.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1.5,duration:.2}),document.querySelectorAll(".mask-bg").forEach(n=>{a.to(n,{scrollTrigger:{trigger:n,start:"top bottom",markers:!0,refreshPositions:!0},duration:1,width:"0%",ease:"power3.inOut"})}),a.to(".mask-bg",{duration:1,width:"0%",ease:"power3.inOut",delay:2})}),this.getArticleList()}},v={class:"title my-10 my-lg-15"},L={class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end",ref:"splitNews"},P={class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl",ref:"splitNewsCh"},E={class:"container"},D={class:"d-flex align-items-center justify-content-center justify-content-md-start py-10 border-top border-bottom border-secondary mb-8 mb-lg-12"},S=t("h3",{class:"fs-sm fs-md-base d-none d-md-block me-12 font-serifTc"},"Tag",-1),C={class:"d-flex gap-7 justify-content-center"},N={class:"fs-sm fs-md-base cursor-pointer cursor-pointer"},V={class:"fs-sm fs-md-base cursor-pointer cursor-pointer"},$={class:"fs-sm fs-md-base cursor-pointer cursor-pointer"},B={class:"container mb-12"},R={class:"d-flex flex-column gap-7"},j={class:"d-flex justify-content-between border-bottom border-dark border-opacity-50"},q={class:"d-flex flex-column flex-md-row"},I={class:"py-7"},O={class:"fs-sm bg-secondary-dark py-2 px-3 d-inline-block mb-5 text-dark font-serifTc"},U={class:"fs-lg fs-lg-xl fw-medium mb-3 font-serifTc"},F={class:"text-dark text-opacity-70"},H=t("div",{class:"d-flex align-items-end"},[t("i",{class:"bi bi-arrow-up-right fs-lg pb-2 text-dark text-opacity-70"})],-1);function z(e,s,i,n,o,f){const _=x("RouterLink");return c(),l(u,null,[t("div",v,[t("span",L,"News ",512),t("h1",P," 最新消息 ",512)]),t("div",E,[t("div",D,[S,t("ul",C,[t("li",N,[t("p",{class:d(["px-3 px-md-4 py-1 font-serifTc",{"text-primary":o.currentTag==="全部消息"}]),onClick:s[0]||(s[0]=r=>o.currentTag="全部消息")}," 全部消息 ",2)]),t("li",V,[t("p",{class:d(["px-3 px-md-4 py-1 font-serifTc",{"text-primary":o.currentTag==="產品消息"}]),onClick:s[1]||(s[1]=r=>o.currentTag="產品消息")}," 產品消息 ",2)]),t("li",$,[t("p",{class:d(["px-3 px-md-4 py-1 font-serifTc",{"text-primary":o.currentTag==="活動消息"}]),onClick:s[2]||(s[2]=r=>o.currentTag="活動消息")}," 活動消息 ",2)])])])]),t("div",B,[t("ul",R,[(c(!0),l(u,null,y(f.filterArticles,r=>(c(),l("li",{key:r.id},[b(_,{to:`/article/${r.id}`,class:"hover-text-primary"},{default:T(()=>[t("div",j,[t("div",q,[t("div",I,[t("p",O,p(r.tag),1),t("p",U,p(r.title),1),t("div",null,[t("p",F,p(f.formatDate(r.create_at)),1)])])]),H])]),_:2},1032,["to"])]))),128))])])],64)}const ct=g(A,[["render",z]]);export{ct as default};
