import{R as l}from"./vue-router-fe912644.js";import{T as a}from"./toast-1797c5ef.js";import{aN as p,aD as m,X as f,Y as t,a4 as s,bk as r,bp as k,U as x,W as v,a3 as i}from"./@vue-9b9f1f8d.js";import{_ as $}from"./logo-ec0194c9.js";import{_ as g}from"./index-3e1f827c.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./aos-dcf01651.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{check:!1}},methods:{logout(){this.$http.post(`${d}/logout`).then(()=>{document.cookie=`hexToken=; expires=${new Date};`,a.fire({icon:"success",title:"token 已清除 已登出"}),this.$router.push("/login")})},checkAdmin(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=n,this.$http.post(`${d}/api/user/check`).then(()=>{this.check=!0,a.fire({icon:"success",title:"登入成功"})}).catch(e=>{a.fire({icon:"error",title:`${e.response.data.message}`}),this.$router.push("/login")})}},mounted(){this.checkAdmin()},components:{RouterView:l}},R={class:"d-flex"},T={class:"bg-secondary h-100vh p-7 dashboard-nav"},A={class:"d-flex flex-column align-items-start gap-9"},P=t("img",{src:$,alt:"餅乾生產餡後台"},null,-1),w={class:"dashboard-content p-7 px-10"};function B(n,e,D,E,h,c){const o=p("RouterLink"),u=p("RouterView");return m(),f("div",R,[t("div",T,[t("nav",A,[P,s(o,{to:"/admin",class:"fs-1"},{default:r(()=>[i("產品管理")]),_:1}),s(o,{to:"/admin/orders"},{default:r(()=>[i("訂單管理")]),_:1}),s(o,{to:"/admin/coupons"},{default:r(()=>[i("優惠券管理")]),_:1}),s(o,{to:"/admin/articles"},{default:r(()=>[i("文章管理")]),_:1}),t("a",{href:"#",onClick:e[0]||(e[0]=k((..._)=>c.logout&&c.logout(..._),["prevent"]))},"登出")])]),t("div",w,[h.check?(m(),x(u,{key:0})):v("",!0)])])}const G=g(V,[["render",B]]);export{G as default};