import{T as x}from"./toast-1797c5ef.js";import{g as a}from"./gsap-8fc7659c.js";import{S as p}from"./split-type-cdcb87fd.js";import{_ as v}from"./index-93fb7091.js";import{aN as m,aD as c,X as l,a4 as d,Y as t,a_ as r,bk as f,F as g,aL as w}from"./@vue-9b9f1f8d.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */const{VITE_APP_URL:u,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0};a.registerPlugin(p);const k={emits:["split-index-products"],data(){return{article:[],articlesList:[],articleContent:"",isLoading:!0}},methods:{formatDate(e){return new Date(e*1e3).toLocaleDateString()},getArticle(e){this.$http.get(`${u}/api/${b}/article/${e}`).then(s=>{this.article=s.data.article,this.articleContent=s.data.article.content})},getArticleList(){this.isLoading=!0,this.$http.get(`${u}/api/${b}/articles`).then(e=>{this.articlesList=e.data.articles,this.isLoading=!1}).catch(e=>{x.fire({icon:"error",title:`${e.response.data.message}`})})}},computed:{id(){return this.$route.params.id}},watch:{id(e){this.routeID=e,this.$route.name==="article"&&this.getArticle(this.routeID)}},mounted(){const e=this.$refs.splitNewsContent,s=this.$refs.splitNewsContentCh;new p(e),new p(s),s.querySelectorAll(".line").forEach(n=>{n.style.textAlign="end"}),this.$nextTick(()=>{a.fromTo(s.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1,duration:.2}),a.fromTo(e.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1,duration:.2});const n=document.querySelectorAll(".mask-bg");a.to(n,{duration:1,width:"0%",ease:"power3.inOut"})}),this.routeID=this.$route.params.id,this.getArticle(this.routeID),this.getArticleList()}},L={class:"title my-10 my-lg-15"},T={class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end",ref:"splitNewsContent"},A={class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl",ref:"splitNewsContentCh"},C={class:"container"},D={class:"row px-0 border-bottom border-dark border-opacity-10 pb-11 pb-lg-17"},P={class:"col-lg-7 ps-lg-0 mb-6"},N=["src","alt"],S={class:"col-lg-5"},E={class:"d-flex gap-6 align-items-center mb-8"},V={class:"font-serifTc fs-sm bg-secondary-dark py-2 px-3 text-dark d-inline-block"},I={class:"text-dark text-opacity-70"},$={class:"font-serifTc"},B={class:"container"},R={class:"row justify-content-end"},j={class:"col-lg-8 font-serifTc my-11 mt-lg-17 mb-lg-14"},q=["innerHTML"],H={class:"row justify-content-end mb-17"},U={class:"col-lg-8"},M=t("div",{class:"d-flex gap-1"},[t("div",null,[t("div",{class:"w-2n h-2n bg-secondary-light border-dark border mb-1"}),t("div",{class:"w-2n h-2n bg-secondary-light border-dark border"})]),t("div",null,[t("div",{class:"w-2n h-2n bg-secondary-light border-dark border mb-1"}),t("div",{class:"w-2n h-2n bg-secondary-light border-dark border"})])],-1),O=t("p",{class:"fs-2xl font-english"},"Back To List",-1),F={class:"container"},W=t("div",{class:"text-center mb-8"},[t("div",{class:"w-100 h-1 bg-secondary-dark mb-8"}),t("p",{class:"font-english fs-3xl"},"Latest News"),t("p",{class:"fw-medium fs-xl"},"最新消息")],-1),X={class:"gap-7 row justify-content-center mb-11"},Y={class:"d-flex justify-content-between border-bottom border-dark border-opacity-50"},z={class:"d-flex flex-column flex-md-row"},G={class:"py-7"},J={class:"fs-sm bg-secondary-dark py-2 px-3 text-dark font-serifTc d-inline-block mb-5"},K={class:"fs-xl fw-medium mb-3 text-dark font-serifTc"},Q={class:"text-dark text-opacity-70"},Z=t("div",{class:"d-flex align-items-end"},[t("i",{class:"bi bi-arrow-up-right fs-lg pb-2 text-dark text-opacity-70"})],-1);function tt(e,s,n,et,o,_){const y=m("VueLoading"),h=m("RouterLink");return c(),l(g,null,[d(y,{active:o.isLoading,"onUpdate:active":s[0]||(s[0]=i=>o.isLoading=i)},null,8,["active"]),t("div",L,[t("span",T,"News Content ",512),t("h1",A," 消息內容 ",512)]),t("div",C,[t("div",D,[t("div",P,[t("div",null,[t("img",{src:o.article.image,alt:o.article.title},null,8,N)])]),t("div",S,[t("div",E,[t("p",V,r(o.article.tag),1),t("p",I,r(_.formatDate(o.article.create_at)),1)]),t("h1",$,r(o.article.title),1)])])]),t("div",B,[t("div",R,[t("div",j,[t("div",{innerHTML:o.articleContent},null,8,q)])]),t("div",H,[t("div",U,[d(h,{to:"/articles",class:"d-flex flex-row-reverse align-items-center justify-content-center gap-5 py-7 border-top border-bottom border-dark border-opacity-10"},{default:f(()=>[M,O]),_:1})])])]),t("div",F,[W,t("ul",X,[(c(!0),l(g,null,w(o.articlesList.slice(0,3),i=>(c(),l("li",{class:"col-lg-8",key:i.id},[d(h,{to:`/article/${i.id}`},{default:f(()=>[t("div",Y,[t("div",z,[t("div",G,[t("p",J,r(i.tag),1),t("p",K,r(i.title),1),t("div",null,[t("p",Q,r(_.formatDate(i.create_at)),1)])])]),Z])]),_:2},1032,["to"])]))),128))])])],64)}const xt=v(k,[["render",tt]]);export{xt as default};
