import{T as x}from"./toast-1797c5ef.js";import{L as w}from"./LoadingComponent-cdcd4a3d.js";import{g as a}from"./gsap-8fc7659c.js";import{S as h}from"./split-type-cdcb87fd.js";import{_ as v}from"./index-93eedd4e.js";import{aN as m,aD as l,X as d,a4 as p,Y as t,a_ as o,bk as g,F as f,aL as k}from"./@vue-9b9f1f8d.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./logo-ec0194c9.js";import"./pinia-a2ec2acd.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-feb1a2d6.js";import"./aos-dcf01651.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */const{VITE_APP_URL:u,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0};a.registerPlugin(h);const L={data(){return{article:[],articlesList:[],articleContent:"",isLoading:!0}},components:{LoadingComponent:w},methods:{formatDate(e){return new Date(e*1e3).toLocaleDateString()},getArticle(e){this.$http.get(`${u}/api/${b}/article/${e}`).then(s=>{console.log(s.data.article),this.article=s.data.article,this.articleContent=s.data.article.content,console.log(this.articleContent)})},getArticleList(){this.isLoading=!0,this.$http.get(`${u}/api/${b}/articles`).then(e=>{console.log(e.data.articles),this.articlesList=e.data.articles,this.isLoading=!1}).catch(e=>{x.fire({icon:"error",title:`${e.response.data.message}`})})}},computed:{id(){return this.$route.params.id},contentWithoutPTag(){return this.articleContent.replace(/<\/?p>/g,"")}},watch:{id(e){this.routeID=e,this.$route.name==="article"&&this.getArticle(this.routeID)}},mounted(){const e=this.$refs.splitNewsContent,s=this.$refs.splitNewsContentCh;new h(e),new h(s),s.querySelectorAll(".line").forEach(n=>{n.style.textAlign="end"}),this.$nextTick(()=>{a.fromTo(s.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1,duration:.2}),a.fromTo(e.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1,duration:.2});const n=document.querySelectorAll(".mask-bg");a.to(n,{duration:1,width:"0%",ease:"power3.inOut"})}),this.routeID=this.$route.params.id,this.getArticle(this.routeID),this.getArticleList()}},T={class:"title my-10 my-lg-15"},C={class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end",ref:"splitNewsContent"},A={class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl",ref:"splitNewsContentCh"},D={class:"container"},P={class:"row px-0 border-bottom border-dark border-opacity-10 pb-11 pb-lg-17"},N={class:"col-lg-7 ps-lg-0 mb-6"},S=["src"],E={class:"col-lg-5"},$={class:"d-flex gap-6 align-items-center mb-8"},I={class:"font-serifTc fs-sm bg-secondary-dark py-2 px-3 text-dark d-inline-block"},V={class:"text-dark text-opacity-70"},B={class:"font-serifTc"},R={class:"container"},j={class:"row justify-content-end"},q={class:"col-lg-8 font-serifTc my-11 mt-lg-17 mb-lg-14"},O={class:"row justify-content-end mb-17"},U={class:"col-lg-8"},W=t("div",{class:"d-flex gap-1"},[t("div",null,[t("div",{class:"w-2n h-2n bg-secondary-light border-dark border mb-1"}),t("div",{class:"w-2n h-2n bg-secondary-light border-dark border"})]),t("div",null,[t("div",{class:"w-2n h-2n bg-secondary-light border-dark border mb-1"}),t("div",{class:"w-2n h-2n bg-secondary-light border-dark border"})])],-1),F=t("p",{class:"fs-2xl font-english"},"Back To List",-1),H={class:"container"},M=t("div",{class:"text-center mb-8"},[t("div",{class:"w-100 h-1 bg-secondary-dark mb-8"}),t("p",{class:"font-english fs-3xl"},"Latest News"),t("p",{class:"fw-medium fs-xl"},"最新消息")],-1),X={class:"gap-7 row justify-content-center mb-11"},Y={class:"d-flex justify-content-between border-bottom border-dark border-opacity-50"},z={class:"d-flex flex-column flex-md-row"},G={class:"py-7"},J={class:"fs-sm bg-secondary-dark py-2 px-3 text-dark font-serifTc d-inline-block mb-5"},K={class:"fs-xl fw-medium mb-3 text-dark font-serifTc"},Q={class:"text-dark text-opacity-70"},Z=t("div",{class:"d-flex align-items-end"},[t("i",{class:"bi bi-arrow-up-right fs-lg pb-2 text-dark text-opacity-70"})],-1);function tt(e,s,n,et,i,c){const y=m("LoadingComponent"),_=m("RouterLink");return l(),d(f,null,[p(y,{isLoading:i.isLoading},null,8,["isLoading"]),t("div",T,[t("span",C,"News Content ",512),t("h1",A," 消息內容 ",512)]),t("div",D,[t("div",P,[t("div",N,[t("div",null,[t("img",{src:i.article.image,alt:""},null,8,S)])]),t("div",E,[t("div",$,[t("p",I,o(i.article.tag),1),t("p",V,o(c.formatDate(i.article.create_at)),1)]),t("h1",B,o(i.article.title),1)])])]),t("div",R,[t("div",j,[t("div",q,[t("div",null,o(c.contentWithoutPTag),1)])]),t("div",O,[t("div",U,[p(_,{to:"/articles",class:"d-flex flex-row-reverse align-items-center justify-content-center gap-5 py-7 border-top border-bottom border-dark border-opacity-10"},{default:g(()=>[W,F]),_:1})])])]),t("div",H,[M,t("ul",X,[(l(!0),d(f,null,k(i.articlesList.slice(0,3),r=>(l(),d("li",{class:"col-lg-8",key:r.id},[p(_,{to:`/article/${r.id}`},{default:g(()=>[t("div",Y,[t("div",z,[t("div",G,[t("p",J,o(r.tag),1),t("p",K,o(r.title),1),t("div",null,[t("p",Q,o(c.formatDate(r.create_at)),1)])])]),Z])]),_:2},1032,["to"])]))),128))])])],64)}const vt=v(L,[["render",tt]]);export{vt as default};
