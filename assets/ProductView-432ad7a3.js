import{c as p}from"./cartStore-af7d758c.js";import{m}from"./pinia-6b383ae9.js";import{aD as d,U as r,W as t,F as n,aL as _,a_ as l,bm as h,bd as u,a0 as b,aq as f}from"./@vue-01f76383.js";import{_ as g}from"./index-49abc74b.js";import"./axios-bff3f665.js";import"./toast-6c8cb593.js";import"./sweetalert2-aca7abf3.js";import"./@ckeditor-75295a52.js";import"./vue-00609181.js";import"./loadingStore-22cd12f0.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-878122eb.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-449b88b9.js";import"./vee-validate-939181b4.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:v,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{product:{},activeIndex:0,images:[],qty:1}},methods:{getProduct(){const{id:i}=this.$route.params;this.$http.get(`${v}/api/${y}/product/${i}`).then(e=>{this.product=e.data.product,this.images=this.product.imagesUrl,console.log(this.product)})},switchImage(i){this.activeIndex=i},addQty(){this.qty++},decreaseQty(){this.qty>1&&this.qty--},...m(p,["addToCart","addNum","decreaseNum"])},computed:{},mounted(){this.getProduct()}},k=t("div",{class:"title py-lg-15"},[t("span",{class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"},"Product Detail "),t("h1",{class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl"},"產品細節")],-1),w={class:"container my-md-13 my-10"},P={class:"row justify-content-center"},S={class:"col-12 mb-14"},T=t("div",{class:"d-flex gap-2 mb-8"},[t("a",{class:"fw-light letterSpace-2",href:"index.html"},"首頁"),t("span",null,"/"),t("a",{class:"fw-light letterSpace-2",href:"product.html"},"商品"),t("span",null,"/"),t("a",{class:"fw-light letterSpace-2",href:"product-content.html"},"鐵盒餅乾")],-1),I={class:"row"},V={class:"col-1"},q={class:"d-flex flex-column gap-6"},A=["onClick"],C=["src"],D={class:"col-lg-6 mb-7 mb-lg-0"},E={class:"product__img"},Q=["src"],U={class:"col-lg-5"},L={class:"fs-2xl font-serifTc fw-4 letterSpace-4 mb-4"},N={class:"fs-xl fw-light fw-4 mb-4 letterSpace-2"},B={class:"text-black-90 mb-4 letterSpace-2"},R={class:"d-flex gap-7 mb-8"},j={class:"count border border-secondary-dark d-flex"},F=["disabled"],H=t("i",{class:"bi bi-dash-lg"},null,-1),M=[H],O=t("i",{class:"bi bi-plus-lg"},null,-1),z=[O],W=t("div",{class:"d-flex align-items-center gap-2 px-8 border border-secondary-dark"},[t("i",{class:"bi bi-heart"}),t("p",{class:"fs-sm"},"加入收藏")],-1),G=t("div",{class:"w-100 h-1 bg-black-30 mb-7"},null,-1),J=t("p",null,"詳細資訊",-1),K=t("p",{class:"text-black-90 mb-4 letterSpace-2"},"重量:250+-5g",-1),X={class:"text-black-90 mb-6 letterSpace-2"},Y=t("p",{class:"mb-4 letterSpace-2"},"配送方式：宅配、自取",-1),Z=t("p",{class:"mb-4 letterSpace-2"}," 賞味期限：開封後請冰冰箱，一個月內食用完畢。 ",-1),$=t("p",{class:"letterSpace-2"}," 原料成分：雞蛋，麵粉，奶油，抹茶粉，伯爵茶粉 ，南瓜粉，紅麴粉，起司粉，凱晏辣椒粉。 ",-1),tt=b('<div class="row justify-content-center justify-content-lg-start"><a class="text-center d-flex flex-column align-items-center col-2 offset-lg-6 transition-5s w-auto" href="product.html"><div class="d-flex gap-2 mb-2"><div class="w-2n h-2n bg-dark"></div><div class="w-2n h-2n bg-dark"></div><div class="w-2n h-2n bg-dark"></div></div><p>back to list</p></a></div>',1);function st(i,e,et,ot,s,c){return d(),r(n,null,[k,t("div",w,[t("div",P,[t("div",S,[T,t("div",I,[t("div",V,[t("ul",q,[(d(!0),r(n,null,_(s.images,(o,a)=>(d(),r("li",{key:a,onClick:it=>c.switchImage(a),class:f(["opacity-75",{"opacity-100":a===s.activeIndex}])},[t("img",{src:o,alt:""},null,8,C)],10,A))),128))])]),t("div",D,[t("div",E,[t("img",{class:"mb-4",src:s.images[s.activeIndex],alt:""},null,8,Q)])]),t("div",U,[t("h1",L,l(s.product.title),1),t("p",N," NT$ "+l(s.product.price),1),t("p",B,l(s.product.description),1),t("div",R,[t("div",j,[t("button",{class:"btn rounded-0",onClick:e[0]||(e[0]=(...o)=>c.decreaseQty&&c.decreaseQty(...o)),disabled:i.isDisabled},M,8,F),h(t("input",{class:"text-center bg-secondary-light border-0",type:"number",min:"1","onUpdate:modelValue":e[1]||(e[1]=o=>s.qty=o),readonly:""},null,512),[[u,s.qty]]),t("button",{class:"btn rounded-0",onClick:e[2]||(e[2]=(...o)=>c.addQty&&c.addQty(...o))},z)]),W]),t("div",null,[t("button",{type:"button",class:"btn btn-primary text-secondary-light w-100 py-4",onClick:e[3]||(e[3]=o=>i.addToCart(s.product.id,s.qty))}," 加入購物車 ")]),G,J,K,t("p",X," 口味："+l(s.product.flavor),1),Y,Z,$])])]),tt])])],64)}const wt=g(x,[["render",st]]);export{wt as default};
