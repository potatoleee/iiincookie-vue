import{a as m}from"./gsap-8fc7659c.js";import{c as a}from"./cartStore-3dff3f42.js";import{m as h,a as f}from"./pinia-6b383ae9.js";import{_ as c}from"./logo-ec0194c9.js";import{_}from"./index-00af039d.js";import{aN as r,aD as p,U as b,W as s,aq as v,a2 as i,bk as l,F as y,a1 as B,a_ as x}from"./@vue-01f76383.js";import"./axios-bff3f665.js";import"./sweetalert2-aca7abf3.js";import"./@ckeditor-75295a52.js";import"./vue-00609181.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-878122eb.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-449b88b9.js";import"./vee-validate-939181b4.js";import"./@vee-validate-533577de.js";/* empty css                        */const M={data(){return{isOpen:!1}},methods:{...h(a,["getCartList"]),toggleMenu(){this.isOpen=!this.isOpen,this.navMotion.reversed(!this.navMotion.reversed())},showBg1(){this.$refs.bg1.style.display="block",this.$refs.bg1.classList.add("show")},hideBg1(){this.$refs.bg1.style.display="none"},showBg2(){this.$refs.bg2.style.display="block",this.$refs.bg2.classList.add("show")},hideBg2(){this.$refs.bg2.style.display="none"},showBg3(){this.$refs.bg3.style.display="block",this.$refs.bg3.classList.add("show")},hideBg3(){this.$refs.bg3.style.display="none"}},computed:{...f(a,["cartList"])},mounted(){this.getCartList(),this.navMotion=m.timeline({paused:!0}),this.navMotion.to(".menu",{duration:1,width:"55%",ease:"expo.in"}),this.navMotion.from(".menu ul li",{duration:1,y:20,opacity:0,ease:"expo.inOut",stagger:.1}),this.navMotion.to(".images",{duration:1,width:"45%",ease:"expo.inOut",delay:-1},"-=1"),this.navMotion.reverse()}},w={class:"container-fluid d-flex w-100 justify-content-between position-fixed z-8 py-7"},k=s("img",{src:c,alt:"餅乾生產餡"},null,-1),L={class:"d-flex align-items-cente gap-2"},C=s("i",{class:"bi bi-heart fs-2xl"},null,-1),O=s("i",{class:"bi bi-bag fs-2xl"},null,-1),S={class:"position-relative"},N={class:"images"},R={ref:"bg1",class:"bg bg1 hide"},V={ref:"bg2",class:"bg bg2 hide"},F={ref:"bg3",class:"bg bg3 hide"},D={class:"menu"},T={class:"d-flex flex-column gap-14"},U=s("p",{class:"menu-title fs-8xl font-english"},"ABOUT",-1),W=s("p",{class:"menu-title fs-2xl"},"關於我們",-1),z=[U,W],A=s("p",{class:"menu-title fs-8xl font-english"},"NEWS",-1),E=s("p",{class:"menu-title fs-2xl"},"最新消息",-1),j=[A,E],q=s("div",{class:"footer"},"這是底部",-1);function P(d,e,G,H,g,o){const n=r("RouterLink"),u=r("RouterView");return p(),b(y,null,[s("div",w,[s("div",{class:v(["menu-btn",{open:g.isOpen}]),onClick:e[0]||(e[0]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},null,2),i(n,{to:"/"},{default:l(()=>[k]),_:1}),s("div",L,[C,i(n,{to:"/cart"},{default:l(()=>{var t;return[O,B(" "+x((t=d.cartList.carts)==null?void 0:t.length),1)]}),_:1})])]),s("div",S,[s("div",N,[s("span",R,null,512),s("span",V,null,512),s("span",F,null,512)]),s("div",D,[s("ul",T,[i(n,{to:"/about"},{default:l(()=>[s("li",{onMouseenter:e[1]||(e[1]=(...t)=>o.showBg1&&o.showBg1(...t)),onMouseleave:e[2]||(e[2]=(...t)=>o.hideBg1&&o.hideBg1(...t))},z,32)]),_:1}),i(n,{to:"/products",class:"menu-item-2"},{default:l(()=>[s("li",{onMouseenter:e[5]||(e[5]=(...t)=>o.showBg2&&o.showBg2(...t)),onMouseleave:e[6]||(e[6]=(...t)=>o.hideBg2&&o.hideBg2(...t))},[s("p",{class:"menu-title fs-8xl font-english",onClick:e[3]||(e[3]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))}," PRODUCTS "),s("p",{class:"menu-title fs-2xl",onClick:e[4]||(e[4]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},"產品ㄧ覽")],32)]),_:1}),i(n,{to:"/articles",class:"menu-item-3"},{default:l(()=>[s("li",{onMouseenter:e[7]||(e[7]=(...t)=>o.showBg3&&o.showBg3(...t)),onMouseleave:e[8]||(e[8]=(...t)=>o.hideBg3&&o.hideBg3(...t))},j,32)]),_:1})])])]),s("main",null,[i(u)]),q],64)}const ds=_(M,[["render",P]]);export{ds as default};
