import{c as b}from"./cartStore-f3f7e945.js";import{L as C}from"./LoadingComponent-2d95a2de.js";import{m as k,a as w}from"./pinia-a2ec2acd.js";import{T as f}from"./toast-ba4829f6.js";import{aN as h,aD as i,X as n,a4 as c,bk as u,Y as t,W as L,F as g,aL as T,a3 as l,a_ as a,bm as y,bd as x,a2 as V,as as N}from"./@vue-9b9f1f8d.js";import{_ as j}from"./index-13dcb442.js";import"./axios-bff3f665.js";import"./loadingStore-76618adb.js";import"./logo-ec0194c9.js";import"./vue-demi-71ba0ef2.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./vue-router-feb1a2d6.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:P,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},S={data(){return{productListData:[],productId:"",loadingItem:"",couponCode:"iiincookienew",isLoading:!0}},components:{LoadingComponent:C},methods:{...k(b,["getCartList","deleteCartItem","updateCartItem","deleteAllCartItem","addNum","decreaseNum"]),useCoupon(){const e={code:this.couponCode};this.$http.post(`${P}/api/${A}/coupon`,{data:e}).then(o=>{console.log(o),f.fire({icon:"success",title:`${o.data.message}`}),this.getCartList()}).catch(o=>{f.fire({icon:"error",title:`${o.response.data.message}`})})}},computed:{...w(b,["cartList","totalQty"])},mounted(){this.getCartList(),this.isLoading=!1}},$=t("div",{class:"title my-10 my-lg-15"},[t("span",{class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end"},"Shopping Cart "),t("h1",{class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl"},"購物車")],-1),E={key:0,class:"container d-flex flex-column align-items-center gap-6 mt-12"},D=t("p",{class:"text-center fs-lg-xl"},"目前購物車是空的喔！",-1),U=t("i",{class:"bi bi-arrow-up-right fs-xs ms-2"},null,-1),R={key:1},q=V('<div class="container"><ul class="d-flex justify-content-center align-items-center gap-lg-7 gap-1"><li class="text-center text-primary"><p class="fs-xs fs-lg-sm">Step.1</p><p class="fs-xs fs-lg-sm">購買項目</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.2</p><p class="fs-xs fs-lg-sm">填寫資料</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.3</p><p class="fs-xs fs-lg-sm">確認付款</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.4</p><p class="fs-xs fs-lg-sm">訂單完成</p></li></ul></div>',1),B={class:"container"},Q={class:"row my-13"},F={class:"col-lg-7 mb-8 mb-lg-0"},H={class:"p-lg-7 rounded-2 shadow-lg-lg"},M={class:"d-flex justify-content-between mb-5"},O=t("i",{class:"bi bi-chevron-left fs-xl"},null,-1),z={class:"d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"},I=t("p",{class:"fs-lg"},"購物車品項",-1),W={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},X=["src"],Y={class:"w-100 d-flex flex-column justify-content-between"},G={class:"d-flex justify-content-between align-items-start"},J=["onClick","disabled"],K={class:"d-flex justify-content-between align-items-end"},Z={class:"font-arimo"},tt={class:"count d-flex justify-content-between border border-dark border-opacity-40"},st=["onClick"],et=t("i",{class:"bi bi-dash-lg"},null,-1),ot=[et],it=["onUpdate:modelValue"],nt=["onClick"],lt=t("i",{class:"bi bi-plus-lg"},null,-1),at=[lt],dt={class:"col-lg-5"},rt={class:"p-lg-7 rounded-2 shadow-lg-lg"},ct=t("p",{class:"fs-lg pb-4 border-bottom border-dark border-opacity-10 mb-4"}," 訂單資訊 ",-1),pt={class:"pb-6 border-bottom border-dark border-opacity-10 mb-4"},ut={class:"mb-4 d-flex justify-content-between"},mt=t("p",null,"總數量",-1),_t={class:"font-arimo"},bt={class:"mb-4 d-flex justify-content-between"},ft=t("p",null,"小計",-1),ht={class:"font-arimo"},gt={class:"d-flex justify-content-between"},yt={class:"d-flex justify-content-between mb-6"},xt=t("p",null,"總計",-1),vt={class:"font-arimo"};function Ct(e,o,kt,wt,d,m){var _;const v=h("LoadingComponent"),p=h("RouterLink");return i(),n(g,null,[c(v,{isLoading:d.isLoading},null,8,["isLoading"]),$,e.totalQty===0?(i(),n("div",E,[D,c(p,{to:"/products",class:"py-2 px-17 rounded-pill d-md-inline-block btn bg-secondary-light btn-outline-dark hover-text-primary hover-border-primary font-english d-none"},{default:u(()=>[l(" 來去逛逛吧！ "),U]),_:1})])):(i(),n("div",R,[q,t("div",B,[t("div",Q,[t("div",F,[t("div",H,[t("div",M,[c(p,{to:"/products",class:"d-flex align-items-center gap-2 gap-lg-6"},{default:u(()=>[O,l("還有想要購買的商品嗎？")]),_:1})]),t("div",z,[I,((_=e.cartList.carts)==null?void 0:_.length)>0?(i(),n("button",{key:0,class:"btn border border-dark border-opacity-40 py-2 px-8 rounded-pill fs-sm",type:"button",onClick:o[0]||(o[0]=s=>e.deleteAllCartItem())}," 清空購物車 ")):L("",!0)]),t("ul",null,[(i(!0),n(g,null,T(e.cartList.carts,s=>(i(),n("li",{key:s.id},[t("div",W,[t("img",{class:"w-20n",src:s.product.imageUrl,alt:""},null,8,X),t("div",Y,[t("div",G,[t("p",null,a(s.product.title),1),t("i",{class:"bi bi-x-lg",onClick:r=>e.deleteCartItem(s),disabled:s.id===d.loadingItem},null,8,J)]),t("div",K,[t("p",Z,"NT$ "+a(s.product.price),1),t("div",tt,[t("button",{onClick:r=>e.decreaseNum(s),class:N(["btn rounded-0",{disabled:s.qty==1,"border-0":s.qty===1}])},ot,10,st),y(t("input",{class:"text-center bg-secondary-light border-0 w-8n w-lg-12n",type:"number","onUpdate:modelValue":r=>s.qty=r,readonly:""},null,8,it),[[x,s.qty]]),t("button",{class:"btn rounded-0",onClick:r=>e.addNum(s)},at,8,nt)])])])])]))),128))])])]),t("div",dt,[t("div",rt,[ct,t("div",pt,[t("div",ut,[mt,t("p",null,[l(" 共 "),t("span",_t,a(e.totalQty),1),l(" 個 ")])]),t("div",bt,[ft,t("p",ht,"NT$ "+a(e.cartList.total),1)]),t("div",gt,[y(t("input",{type:"text",class:"form-control rounded-0 border-secondary w-70","onUpdate:modelValue":o[1]||(o[1]=s=>d.couponCode=s),placeholder:"請輸入優惠碼"},null,512),[[x,d.couponCode]]),t("button",{type:"button",class:"btn btn-primary w-30 rounded-0 text-light fs-sm border-0",onClick:o[2]||(o[2]=(...s)=>m.useCoupon&&m.useCoupon(...s))}," 使用優惠券 ")])]),t("div",yt,[xt,t("p",vt,"NT$ "+a(e.cartList.final_total),1)]),c(p,{to:"/order",class:"btn btn-primary text-light w-100"},{default:u(()=>[l("去買單")]),_:1})])])])])]))],64)}const zt=j(S,[["render",Ct]]);export{zt as default};