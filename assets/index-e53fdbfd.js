import{aN as f,aD as h,P as E,O as g}from"./@vue-01f76383.js";import{c as v}from"./pinia-6b383ae9.js";import{R as L,c as P,a as R}from"./vue-router-878122eb.js";import{a as O}from"./axios-bff3f665.js";import{p as y}from"./vue-axios-58a7c26f.js";import{L as V}from"./vue-loading-overlay-449b88b9.js";import{d as A,c as T,F as D,a as I,E as k}from"./vee-validate-939181b4.js";import{a as l,l as S,s as b,z as C}from"./@vee-validate-533577de.js";import{C as $}from"./@ckeditor-75295a52.js";/* empty css                        */import{g as w,S as x,D as F,M}from"./gsap-8fc7659c.js";import"./vue-demi-71ba0ef2.js";import"./vue-00609181.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const W=(n,i)=>{const s=n.__vccOpts||n;for(const[c,t]of i)s[c]=t;return s},z={components:{RouterView:L}};function B(n,i,s,c,t,e){const r=f("RouterView");return h(),E(r)}const N=W(z,[["render",B]]),q="modulepreload",H=function(n){return"/iiincookie-vue/"+n},u={},o=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=H(e),e in u)return;u[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let _=t.length-1;_>=0;_--){const m=t[_];if(m.href===e&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":q,r||(p.as="script",p.crossOrigin=""),p.href=e,document.head.appendChild(p),r)return new Promise((_,m)=>{p.addEventListener("load",_),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())},K=P({history:R("/iiincookie-vue/"),linkActiveClass:"active",routes:[{path:"",name:"index",component:()=>o(()=>import("./IndexView-f9408851.js"),["assets/IndexView-f9408851.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/@vue-01f76383.js","assets/cartStore-af7d758c.js","assets/axios-bff3f665.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/loadingStore-22cd12f0.js","assets/gsap-8fc7659c.js","assets/logo-ec0194c9.js","assets/vue-router-878122eb.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/IndexView-a3bb0695.css","assets/bootstrap-icons-ee933033.css"])},{path:"/",component:()=>o(()=>import("./FrontLayout-bfea4899.js"),["assets/FrontLayout-bfea4899.js","assets/gsap-8fc7659c.js","assets/cartStore-af7d758c.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/@vue-01f76383.js","assets/axios-bff3f665.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/loadingStore-22cd12f0.js","assets/logo-ec0194c9.js","assets/vue-router-878122eb.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/FrontLayout-9b526002.css","assets/bootstrap-icons-ee933033.css"]),children:[{path:"about",name:"about",component:()=>o(()=>import("./AboutView-2b5cf6db.js"),["assets/AboutView-2b5cf6db.js","assets/@vue-01f76383.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/AboutView-4d995ba2.css","assets/bootstrap-icons-ee933033.css"])},{path:"/products",name:"products",component:()=>o(()=>import("./ProductsView-673f2752.js"),["assets/ProductsView-673f2752.js","assets/vue-router-878122eb.js","assets/@vue-01f76383.js","assets/PaginationComponent-e3cb759f.js","assets/cartStore-af7d758c.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/axios-bff3f665.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/loadingStore-22cd12f0.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/ProductsView-5edc455d.css","assets/bootstrap-icons-ee933033.css"])},{path:"/product/:id",name:"product",component:()=>o(()=>import("./ProductView-54ad4a7a.js"),["assets/ProductView-54ad4a7a.js","assets/cartStore-af7d758c.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/@vue-01f76383.js","assets/axios-bff3f665.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/loadingStore-22cd12f0.js","assets/vue-router-878122eb.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/articles",name:"articles",component:()=>o(()=>import("./ArticlesView-c0a72610.js"),["assets/ArticlesView-c0a72610.js","assets/@vue-01f76383.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/cart",name:"cart",component:()=>o(()=>import("./CartView-96ee0bce.js"),["assets/CartView-96ee0bce.js","assets/cartStore-af7d758c.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/@vue-01f76383.js","assets/axios-bff3f665.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/loadingStore-22cd12f0.js","assets/vue-router-878122eb.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/order",name:"order",component:()=>o(()=>import("./OrderView-6278acf6.js"),["assets/OrderView-6278acf6.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/@vue-01f76383.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])}]},{path:"/login",name:"login",component:()=>o(()=>import("./AdminLogin-82fec764.js"),["assets/AdminLogin-82fec764.js","assets/@vue-01f76383.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"/admin",component:()=>o(()=>import("./DashBoard-2d798d4f.js"),["assets/DashBoard-2d798d4f.js","assets/vue-router-878122eb.js","assets/@vue-01f76383.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/logo-ec0194c9.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"]),children:[{path:"products",component:()=>o(()=>import("./AdminProducts-68597de3.js"),["assets/AdminProducts-68597de3.js","assets/DeleteModal-688a77cc.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@vue-01f76383.js","assets/UploadImages-4a0ae64a.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/loadingStore-22cd12f0.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/PaginationComponent-e3cb759f.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"orders",component:()=>o(()=>import("./AdminOrders-da063b99.js"),["assets/AdminOrders-da063b99.js","assets/DeleteModal-688a77cc.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@vue-01f76383.js","assets/PaginationComponent-e3cb759f.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"coupons",component:()=>o(()=>import("./AdminCoupons-6a006081.js"),["assets/AdminCoupons-6a006081.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/@vue-01f76383.js","assets/DeleteModal-688a77cc.js","assets/PaginationComponent-e3cb759f.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])},{path:"articles",component:()=>o(()=>import("./AdminArticles-341c1058.js"),["assets/AdminArticles-341c1058.js","assets/bootstrap-1e9f360c.js","assets/@popperjs-9847b28c.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/@vue-01f76383.js","assets/UploadImages-4a0ae64a.js","assets/toast-6c8cb593.js","assets/sweetalert2-aca7abf3.js","assets/loadingStore-22cd12f0.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/DeleteModal-688a77cc.js","assets/PaginationComponent-e3cb759f.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])}]},{path:"/:pathMath(.*)*",component:()=>o(()=>import("./NotFound-1f4c192e.js"),["assets/NotFound-1f4c192e.js","assets/@vue-01f76383.js","assets/pinia-6b383ae9.js","assets/vue-demi-71ba0ef2.js","assets/vue-router-878122eb.js","assets/axios-bff3f665.js","assets/vue-axios-58a7c26f.js","assets/vue-loading-overlay-449b88b9.js","assets/@ckeditor-75295a52.js","assets/vue-00609181.js","assets/vue-loading-overlay-980189cf.css","assets/vee-validate-939181b4.js","assets/@vee-validate-533577de.js","assets/gsap-8fc7659c.js","assets/bootstrap-icons-ee933033.css"])}]});w.registerPlugin(x,F,M);Object.keys(l).forEach(n=>{A(n,l[n])});T({generateMessage:S({zh_TW:C}),validateOnInput:!0});b("zh_TW");const a=g(N);a.use($);a.use(v());a.use(K);a.use(y,O);a.component("VueLoading",V);a.component("VField",D);a.component("VForm",I);a.component("ErrorMessage",k);a.mount("#app");export{W as _};
