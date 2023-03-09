import{a as w}from"./gsap-8fc7659c.js";import{c as f}from"./cartStore-f6a7a879.js";import{f as h}from"./favoriteStore-955b9498.js";import{m as c,a as p}from"./pinia-a2ec2acd.js";import{_ as F}from"./logo-ec0194c9.js";import{_ as x}from"./index-db7f1776.js";import{aN as v,aD as l,X as a,Y as s,F as y,aL as k,W as u,as as M,a4 as r,bk as g,a3 as B,a_ as d}from"./@vue-9b9f1f8d.js";import"./axios-bff3f665.js";import"./toast-ba4829f6.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./loadingStore-cfb944cc.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-feb1a2d6.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */const C={props:{favoriteList:{type:Array,default(){return[]}}},data(){return{isOpen:!1,showFavorites:!1,myFavorite:JSON.parse(localStorage.getItem("myFavorite"))||[],tempFavorite:[]}},methods:{...c(f,["getCartList"]),...c(h,["removeFavorite"]),removeFromFavorites(i){this.myFavorite.splice(i,1),this.myFavoriteId.splice(i,1),localStorage.setItem("myFavorite",JSON.stringify(this.myFavorite)),console.log("移除產品")},toggleFavorites(){this.showFavorites=!this.showFavorites},toggleMenu(){this.isOpen=!this.isOpen,this.navMotion.reversed(!this.navMotion.reversed())},toggleCanvas(){this.showFavorites=!this.showFavorites},showBg1(){this.$refs.bg1.style.display="block",this.$refs.bg1.classList.add("show")},hideBg1(){this.$refs.bg1.style.display="none"},showBg2(){this.$refs.bg2.style.display="block",this.$refs.bg2.classList.add("show")},hideBg2(){this.$refs.bg2.style.display="none"},showBg3(){this.$refs.bg3.style.display="block",this.$refs.bg3.classList.add("show")},hideBg3(){this.$refs.bg3.style.display="none"},scrollToTop(){window.scrollTo({top:0,behavior:"smooth",block:"start",inline:"nearest",duration:2e3})}},computed:{...p(f,["cartList","totalQty"]),...p(h,["myFavoriteList"])},watch:{myFavoriteList:{handler(){localStorage.setItem("myFavoriteList",JSON.stringify(this.myFavoriteList))},deep:!0}},mounted(){this.getCartList(),console.log("myFavorite:",this.myFavorite),this.navMotion=w.timeline({paused:!0}),this.navMotion.to(".menu",{duration:1,width:"100%",ease:"expo.in"}),this.navMotion.from(".menu ul li",{duration:1,y:20,opacity:0,ease:"expo.inOut",stagger:.1,display:"none"}),this.navMotion.to(".images",{duration:1,width:"45%",ease:"expo.inOut",delay:-1},"-=1"),this.navMotion.reverse()}},L={key:0,class:"offCanvas-favorite"},T=["onClick"],S=["src"],O={class:"container-fluid d-flex w-100 justify-content-between align-items-center position-fixed top-0 left-0 z-3 py-7 px-7"},N=s("img",{class:"logo",src:F,alt:"餅乾生產餡"},null,-1),V={class:"d-flex align-items-center gap-5"},R={class:"position-relative"},I=s("i",{class:"bi bi-bag fs-xl fs-lg-2xl"},null,-1),A={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},D={class:"position-relative"},J={class:"images"},Q={ref:"bg1",class:"bg bg1 hide"},U={ref:"bg2",class:"bg bg2 hide"},W={ref:"bg3",class:"bg bg3 hide"},j={class:"menu"},z={class:"d-flex flex-column gap-14"},E=s("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"ABOUT",-1),P=s("p",{class:"fs-2xl font-serifTc fw-medium"},"關於我們",-1),X=[E,P],Y=s("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"NEWS",-1),q=s("p",{class:"fs-2xl font-serifTc fw-medium"},"最新消息",-1),G=[Y,q],H={class:"footer mt-auto bg-secondary-dark container-fluid py-10"},K={class:"d-flex justify-content-between align-items-center"},Z=s("div",{class:"d-flex gap-8"},[s("p",{class:"font-english"},"© 2023 iiincookie"),s("a",{class:"font-english",href:"https://www.instagram.com/iiin.cookies/",target:"_blank"}," instagram ")],-1);function $(i,e,tt,st,m,o){const n=v("RouterLink"),_=v("RouterView");return l(),a(y,null,[m.showFavorites?(l(),a("div",L,[s("ul",null,[(l(!0),a(y,null,k(i.myFavoriteList,(t,b)=>(l(),a("li",{key:t.id},[s("button",{class:"btn btn-primary",onClick:et=>i.removeFavorite(b)}," 移除 ",8,T),B(" "+d(t.title)+" "+d(t.id)+" NT$ "+d(t.price)+" ",1),s("img",{src:t.imageUrl,width:"300",alt:""},null,8,S)]))),128))])])):u("",!0),m.showFavorites?(l(),a("div",{key:1,class:"overlay",onClick:e[0]||(e[0]=(...t)=>o.toggleCanvas&&o.toggleCanvas(...t))})):u("",!0),s("div",{class:M(["menu-btn",{open:m.isOpen}]),onClick:e[1]||(e[1]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},null,2),s("div",O,[r(n,{to:"/",exact:"",native:""},{default:g(()=>[N]),_:1}),s("div",V,[s("i",{class:"bi bi-heart fs-xl fs-lg-2xl",onClick:e[2]||(e[2]=(...t)=>o.toggleFavorites&&o.toggleFavorites(...t))}),r(n,{to:"/cart"},{default:g(()=>[s("div",R,[I,i.totalQty>0?(l(),a("span",A,d(i.totalQty),1)):u("",!0)])]),_:1})])]),s("div",D,[s("div",J,[s("span",Q,null,512),s("span",U,null,512),s("span",W,null,512)]),s("div",j,[s("ul",z,[r(n,{to:"/about"},{default:g(()=>[s("li",{onMouseenter:e[3]||(e[3]=(...t)=>o.showBg1&&o.showBg1(...t)),onMouseleave:e[4]||(e[4]=(...t)=>o.hideBg1&&o.hideBg1(...t)),onClick:e[5]||(e[5]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},X,32)]),_:1}),r(n,{to:"/products",class:"menu-item-2"},{default:g(()=>[s("li",{onMouseenter:e[8]||(e[8]=(...t)=>o.showBg2&&o.showBg2(...t)),onMouseleave:e[9]||(e[9]=(...t)=>o.hideBg2&&o.hideBg2(...t))},[s("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm",onClick:e[6]||(e[6]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))}," PRODUCTS "),s("p",{class:"fs-2xl font-serifTc fw-medium",onClick:e[7]||(e[7]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))}," 產品ㄧ覽 ")],32)]),_:1}),r(n,{to:"/articles",class:"menu-item-3"},{default:g(()=>[s("li",{onMouseenter:e[10]||(e[10]=(...t)=>o.showBg3&&o.showBg3(...t)),onMouseleave:e[11]||(e[11]=(...t)=>o.hideBg3&&o.hideBg3(...t)),onClick:e[12]||(e[12]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},G,32)]),_:1})])])]),s("main",null,[r(_)]),s("footer",H,[s("div",K,[Z,s("p",{onClick:e[13]||(e[13]=(...t)=>o.scrollToTop&&o.scrollToTop(...t))},"To Top")])])],64)}const xt=x(C,[["render",$]]);export{xt as default};
