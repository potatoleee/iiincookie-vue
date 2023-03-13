import{aN as f,aD as h,U as E,Q as v}from"./@vue-9b9f1f8d.js";import{c as g}from"./pinia-a2ec2acd.js";import{R as L,c as P,a as R}from"./vue-router-feb1a2d6.js";import{a as O}from"./axios-bff3f665.js";import{p as V}from"./vue-axios-58a7c26f.js";import{L as y}from"./vue-loading-overlay-89c4fdf0.js";import{d as A,c as T,F as D,a as I,E as k}from"./vee-validate-aa5cd44a.js";import{a as l,l as S,s as b,z as C}from"./@vee-validate-533577de.js";import{C as $}from"./@ckeditor-34cd5b3f.js";/* empty css                        */import{g as w,S as x,D as B,M as F}from"./gsap-8fc7659c.js";import"./vue-demi-71ba0ef2.js";import"./vue-d45f05e8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const M=(r,i)=>{const a=r.__vccOpts||r;for(const[c,t]of i)a[c]=t;return a},W={components:{RouterView:L}};function z(r,i,a,c,t,e){const n=f("RouterView");return h(),E(n)}const N=M(W,[["render",z]]),U="modulepreload",q=function(r){return"/iiincookie-vue/"+r},u={},o=function(i,a,c){if(!a||a.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=q(e),e in u)return;u[e]=!0;const n=e.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!c)for(let _=t.length-1;_>=0;_--){const m=t[_];if(m.href===e&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":U,n||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),n)return new Promise((_,m)=>{p.addEventListener("load",_),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())},H=P({history:R("/iiincookie-vue/"),linkActiveClass:"active",scrollBehavior(r){return r.fullPath.match("product")||r.fullPath.match("article")?{top:0}:{}},routes:[{path:"/",component:()=>o(()=>import("./FrontLayout-d657cd88.js"),["assets/FrontLayout-d657cd88.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@vue-9b9f1f8d.js","assets/gsap-8fc7659c.js","assets/cartStore-df922902.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/favoriteStore-61913d83.js","assets/logo-ec0194c9.js","assets/vue-router-feb1a2d6.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/FrontLayout-57fe7d22.css","assets/bootstrap-icons-ee933033.css"]),children:[{path:"",name:"index",component:()=>o(()=>import("./IndexView-3c5f3466.js"),["assets/IndexView-3c5f3466.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/@vue-9b9f1f8d.js","assets/cartStore-df922902.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/gsap-8fc7659c.js","assets/swiper-fce122d8.js","assets/ssr-window-c9202916.js","assets/swiper-b099ecf4.css","assets/vue-router-feb1a2d6.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/IndexView-26f26958.css","assets/bootstrap-icons-ee933033.css"])},{path:"/about",name:"about",component:()=>o(()=>import("./AboutView-55674cf6.js"),["assets/AboutView-55674cf6.js","assets/@vue-9b9f1f8d.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/AboutView-4d995ba2.css","assets/bootstrap-icons-ee933033.css"])},{path:"/products",name:"products",component:()=>o(()=>import("./ProductsView-b188b09f.js"),["assets/ProductsView-b188b09f.js","assets/vue-router-feb1a2d6.js","assets/@vue-9b9f1f8d.js","assets/cartStore-df922902.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/favoriteStore-61913d83.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/ProductsView-f2abd1d6.css","assets/bootstrap-icons-ee933033.css"])},{path:"/product/:id",name:"product",component:()=>o(()=>import("./ProductView-a297112f.js"),["assets/ProductView-a297112f.js","assets/swiper-fce122d8.js","assets/ssr-window-c9202916.js","assets/@vue-9b9f1f8d.js","assets/swiper-b099ecf4.css","assets/loadingStore-cfb944cc.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/cartStore-df922902.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/favoriteStore-61913d83.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/ProductView-a529ff60.css","assets/bootstrap-icons-ee933033.css"])},{path:"/articles",name:"articles",component:()=>o(()=>import("./ArticlesView-43eb12e9.js"),["assets/ArticlesView-43eb12e9.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/@vue-9b9f1f8d.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/article/:id",name:"article",component:()=>o(()=>import("./ArticleView-cd43a1d1.js"),["assets/ArticleView-cd43a1d1.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/@vue-9b9f1f8d.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/cart",name:"cart",component:()=>o(()=>import("./CartView-05414593.js"),["assets/CartView-05414593.js","assets/cartStore-df922902.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/@vue-9b9f1f8d.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/vue-router-feb1a2d6.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/order",name:"order",component:()=>o(()=>import("./OrderView-804468f9.js"),["assets/OrderView-804468f9.js","assets/cartStore-df922902.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/@vue-9b9f1f8d.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/vue-router-feb1a2d6.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/pay/:id",name:"pay",component:()=>o(()=>import("./PayView-b3c2641f.js"),["assets/PayView-b3c2641f.js","assets/cartStore-df922902.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/@vue-9b9f1f8d.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/vue-router-feb1a2d6.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/complete/:id",name:"complete",component:()=>o(()=>import("./OrderComplete-454e1c2d.js"),["assets/OrderComplete-454e1c2d.js","assets/cartStore-df922902.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/@vue-9b9f1f8d.js","assets/axios-bff3f665.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/vue-router-feb1a2d6.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])}]},{path:"/login",name:"login",component:()=>o(()=>import("./AdminLogin-49f751d4.js"),["assets/AdminLogin-49f751d4.js","assets/@vue-9b9f1f8d.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/admin",component:()=>o(()=>import("./DashBoard-bb266eec.js"),["assets/DashBoard-bb266eec.js","assets/vue-router-feb1a2d6.js","assets/@vue-9b9f1f8d.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/logo-ec0194c9.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"]),children:[{path:"products",component:()=>o(()=>import("./AdminProducts-c46b4c04.js"),["assets/AdminProducts-c46b4c04.js","assets/PaginationComponent-703cc6fb.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@vue-9b9f1f8d.js","assets/UploadImages-df42d618.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/loadingStore-cfb944cc.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"orders",component:()=>o(()=>import("./AdminOrders-1d4aef99.js"),["assets/AdminOrders-1d4aef99.js","assets/PaginationComponent-703cc6fb.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@vue-9b9f1f8d.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"coupons",component:()=>o(()=>import("./AdminCoupons-487022e4.js"),["assets/AdminCoupons-487022e4.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/@vue-9b9f1f8d.js","assets/PaginationComponent-703cc6fb.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"articles",component:()=>o(()=>import("./AdminArticles-6d6b8035.js"),["assets/AdminArticles-6d6b8035.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/@vue-9b9f1f8d.js","assets/UploadImages-df42d618.js","assets/toast-ba4829f6.js","assets/sweetalert2-761b07dd.js","assets/loadingStore-cfb944cc.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/PaginationComponent-703cc6fb.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])}]},{path:"/:pathMath(.*)*",component:()=>o(()=>import("./NotFound-186d6ca6.js"),["assets/NotFound-186d6ca6.js","assets/@vue-9b9f1f8d.js","assets/pinia-a2ec2acd.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-feb1a2d6.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-89c4fdf0.js","assets/@ckeditor-34cd5b3f.js","assets/vue-d45f05e8.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-aa5cd44a.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])}]});w.registerPlugin(x,B,F);Object.keys(l).forEach(r=>{A(r,l[r])});T({generateMessage:S({zh_TW:C}),validateOnInput:!0});b("zh_TW");const s=v(N);s.use($);s.use(g());s.use(H);s.use(V,O);s.component("VueLoading",y);s.component("VField",D);s.component("VForm",I);s.component("ErrorMessage",k);s.mount("#app");export{M as _};
