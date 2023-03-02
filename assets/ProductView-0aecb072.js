import{A as x,S as k,a as P}from"./swiper-fce122d8.js";import{aN as _,aD as c,X as n,Y as s,F as a,aL as m,a_ as r,bm as I,bd as T,a4 as p,bk as u,as as f,U as L}from"./@vue-9b9f1f8d.js";import{b as C}from"./vue-router-feb1a2d6.js";import{c as D}from"./cartStore-1098eebc.js";import{m as V}from"./pinia-a2ec2acd.js";import{_ as A}from"./index-26d9a145.js";import"./ssr-window-c9202916.js";import"./axios-bff3f665.js";import"./toast-ba4829f6.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./loadingStore-cfb944cc.js";import"./vue-demi-71ba0ef2.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:b,VITE_APP_PATH:g}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},S={data(){return{product:{},activeIndex:0,images:[],qty:1,productList:[],modules:[x],routeID:""}},components:{Swiper:k,SwiperSlide:P,RouterLink:C},methods:{getProduct(o){this.$http.get(`${b}/api/${g}/product/${o}`).then(i=>{console.log(this.product),this.product=i.data.product,this.images=this.product.imagesUrl,console.log(this.product)})},getProductList(){this.isLoading=!0,this.$http.get(`${b}/api/${g}/products/all`).then(o=>{this.productList=o.data.products,console.log(this.productList)}).catch(o=>{alert(o.data.message)}).finally(()=>{this.isLoading=!1})},switchImage(o){this.activeIndex=o},addQty(){this.qty++},decreaseQty(){this.qty>1&&this.qty--},...V(D,["addToCart","addNum","decreaseNum"])},computed:{id(){return this.$route.params.id}},watch:{id(o){this.routeID=o,this.$route.name==="product"&&this.getProduct(this.routeID)}},mounted(){this.routeID=this.$route.params.id,this.getProduct(this.routeID),this.getProductList()}},B=s("div",{class:"title py-lg-15"},[s("span",{class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"},"Product Detail "),s("h1",{class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl"},"產品細節")],-1),E={class:"container my-md-13 my-10"},q={class:"row justify-content-center"},N={class:"col-12 mb-10"},R={class:"row"},U={class:"col-1 d-none d-lg-block"},Q={class:"d-flex flex-column gap-6"},j=["onClick"],O=["src"],F={class:"col-lg-6 mb-7 mb-lg-0"},H={class:"product__img"},M=["src"],z={class:"d-lg-none"},X={class:"d-flex gap-6"},Y=["onClick"],G=["src"],J={class:"col-lg-5 d-flex flex-column justify-content-between"},K={class:"fs-2xl font-serifTc fw-4 letterSpace-4 mb-2"},W={class:"fs-sm font-serifTc text-dark text-opacity-70 mb-6"},Z={class:"fs-xl mb-10 letterSpace-2 text-dark font-arimo"},$={class:"mb-4 letterSpace-2 fw-light"},ss={class:"d-flex gap-6 mb-8"},ts={class:"count border border-secondary-dark d-flex justify-content-between w-100"},es=s("i",{class:"bi bi-dash-lg"},null,-1),os=[es],is=s("i",{class:"bi bi-plus-lg"},null,-1),rs=[is],ls=s("div",{class:"d-flex align-items-center border border-secondary-dark px-3"},[s("i",{class:"bi bi-heart"})],-1),cs={class:"row justify-content-lg-end"},ds={class:"col-12 col-lg-5"},ns=s("div",{class:"w-100 h-1 bg-secondary-dark mb-6"},null,-1),as=s("p",{class:"fw-medium mb-6"},"詳細資訊",-1),us={class:"table mb-6"},_s=s("tr",null,[s("th",{class:"border-0 fw-regular ps-0 fs-sm",width:"120"},"重量"),s("td",{class:"border-0 fs-sm"},"250+-5g")],-1),ms=s("th",{class:"border-0 fw-regular ps-0 fs-sm",width:"120"},"內容物",-1),ps={class:"border-0 fs-sm"},hs=s("th",{class:"border-0 fw-regular ps-0 fs-sm",width:"120"},"口味",-1),fs={class:"border-0 fs-sm"},bs=s("tr",null,[s("th",{class:"border-0 fw-regular ps-0 fs-sm",width:"120"}," 配送方式 "),s("td",{class:"border-0 fs-sm"},"宅配、自取")],-1),gs=s("tr",null,[s("th",{class:"border-0 fw-regular ps-0 fs-sm",width:"120"}," 賞味期限 "),s("td",{class:"border-0 fs-sm"},"30天")],-1),ws=s("tr",null,[s("th",{class:"border-0 fw-regular ps-0 fs-sm",width:"120"}," 保存方式 "),s("td",{class:"border-0 fs-sm"},"天氣高溫時放於冰箱")],-1),ys=s("div",{class:"text-center mb-8"},[s("div",{class:"w-100 h-1 bg-secondary-dark mb-8"}),s("p",{class:"font-english fs-3xl"},"Other products"),s("p",{class:"fw-medium fs-xl"},"其他商品")],-1),vs={class:"mb-16"},xs=["src"],ks={class:"fw-medium mb-2 font-serifTc"},Ps={class:"fs-sm fw-medium mb-2 font-serifTc text-dark text-opacity-80"},Is={class:"font-serifTc"},Ts=s("div",{class:"d-flex gap-1"},[s("div",null,[s("div",{class:"w-2n h-2n bg-secondary-light border-dark border mb-1"}),s("div",{class:"w-2n h-2n bg-secondary-light border-dark border"})]),s("div",null,[s("div",{class:"w-2n h-2n bg-secondary-light border-dark border mb-1"}),s("div",{class:"w-2n h-2n bg-secondary-light border-dark border"})])],-1),Ls=s("p",{class:"fs-2xl font-english"},"Back To List",-1);function Cs(o,i,Ds,Vs,t,d){const h=_("RouterLink"),w=_("swiper-slide"),y=_("swiper");return c(),n(a,null,[B,s("div",E,[s("div",q,[s("div",N,[s("div",R,[s("div",U,[s("ul",Q,[(c(!0),n(a,null,m(t.images,(e,l)=>(c(),n("li",{key:l,onClick:v=>d.switchImage(l),class:f(["opacity-75",{"opacity-100":l===t.activeIndex}])},[s("img",{src:e,alt:""},null,8,O)],10,j))),128))])]),s("div",F,[s("div",H,[s("img",{src:t.images[t.activeIndex],alt:""},null,8,M)])]),s("div",z,[s("ul",X,[(c(!0),n(a,null,m(t.images,(e,l)=>(c(),n("li",{key:l,onClick:v=>d.switchImage(l),class:f(["opacity-75 w-20",{"opacity-100":l===t.activeIndex}])},[s("img",{src:e,alt:""},null,8,G)],10,Y))),128))])]),s("div",J,[s("div",null,[s("h1",K,r(t.product.title),1),s("p",W,r(t.product.flavor),1),s("p",Z," NT$ "+r(t.product.price),1),s("p",$,r(t.product.description),1)]),s("div",null,[s("div",ss,[s("div",ts,[s("button",{class:"btn rounded-0",onClick:i[0]||(i[0]=(...e)=>d.decreaseQty&&d.decreaseQty(...e))},os),I(s("input",{class:"text-center bg-secondary-light border-0",type:"number",min:"1","onUpdate:modelValue":i[1]||(i[1]=e=>t.qty=e),readonly:""},null,512),[[T,t.qty]]),s("button",{class:"btn rounded-0",onClick:i[2]||(i[2]=(...e)=>d.addQty&&d.addQty(...e))},rs)]),ls]),s("div",null,[s("button",{type:"button",class:"btn btn-primary text-secondary-light w-100 py-4 rounded-0",onClick:i[3]||(i[3]=e=>o.addToCart(t.product.id,t.qty))}," 加入購物車 ")])])])])])]),s("div",cs,[s("div",ds,[ns,as,s("table",us,[s("tbody",null,[_s,s("tr",null,[ms,s("td",ps,r(t.product.content),1)]),s("tr",null,[hs,s("td",fs,r(t.product.flavor),1)]),bs,gs,ws])])])]),ys,s("div",vs,[p(y,{"slides-per-view":1,autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,"space-between":50,modules:t.modules,breakpoints:{768:{slidesPerView:2,spaceBetween:24},992:{slidesPerView:3,spaceBetween:24}}},{default:u(()=>[(c(!0),n(a,null,m(t.productList,e=>(c(),L(w,{key:e.id},{default:u(()=>[p(h,{to:`/product/${e.id}`,class:"mb-7"},{default:u(()=>[s("img",{src:e.imageUrl,alt:""},null,8,xs)]),_:2},1032,["to"]),s("p",ks,r(e.title),1),s("p",Ps,r(e.flavor),1),s("p",Is,"NT$ "+r(e.price),1)]),_:2},1024))),128))]),_:1},8,["modules"])]),s("div",null,[p(h,{to:"/products",class:"d-flex flex-row-reverse align-items-center gap-5"},{default:u(()=>[Ts,Ls]),_:1})])])],64)}const Ws=A(S,[["render",Cs]]);export{Ws as default};
