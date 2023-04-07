import{c as x}from"./cartStore-19166685.js";import{D as $}from"./DeleteAllModal-bd4303c5.js";import{g as _}from"./gsap-8fc7659c.js";import{S as g}from"./split-type-cdcb87fd.js";import{m as V,a as D}from"./pinia-a78a79b1.js";import{T as m}from"./toast-1797c5ef.js";import{aN as f,aD as i,X as l,a4 as r,Y as t,bk as b,W as C,F as v,aL as N,a3 as d,a_ as n,bm as k,bd as w,a2 as M,as as j}from"./@vue-9b9f1f8d.js";import{_ as P}from"./index-884024c5.js";import"./axios-bff3f665.js";import"./bootstrap-1e9f360c.js";import"./@popperjs-9847b28c.js";import"./vue-demi-71ba0ef2.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */_.registerPlugin(g);const{VITE_APP_URL:L,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},U={data(){return{productListData:[],productId:"",loadingItem:"",couponCode:"iiincookienew",isCouponUsed:!1,isLoading:!0}},components:{DeleteAllModal:$},methods:{...V(x,["getCartList","deleteCartItem","updateCartItem","addNum","decreaseNum"]),openDeleteAllModalCart(){this.$refs.deleteAllModalCart.show()},deleteAllCartItem(){this.$http.delete(`${L}/api/${A}/carts`).then(()=>{m.fire({icon:"success",title:"已刪除全部品項"}),this.$refs.deleteAllModalCart.hide(),this.getCartList()}).catch(e=>{m.fire({icon:"error",title:`${e.response.data.message}`})})},useCoupon(){const e={code:this.couponCode};this.$http.post(`${L}/api/${A}/coupon`,{data:e}).then(o=>{m.fire({icon:"success",title:`${o.data.message}`}),this.getCartList(),this.isCouponUsed=!0}).catch(o=>{m.fire({icon:"error",title:`${o.response.data.message}`})})}},computed:{...D(x,["cartList","totalQty"])},mounted(){const e=this.$refs.splitCart,o=this.$refs.splitCartCh;new g(e),new g(o),o.querySelectorAll(".line").forEach(c=>{c.style.textAlign="end"}),this.$nextTick(()=>{_.fromTo(o.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1,duration:.2}),_.fromTo(e.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1,duration:.2});const c=document.querySelectorAll(".mask-bg");_.to(c,{duration:1,width:"0%",ease:"power3.inOut"})}),this.getCartList(),this.isLoading=!1}},E={class:"title my-10 my-lg-15"},q={class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end",ref:"splitCart"},R={class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl",ref:"splitCartCh"},B={key:0,class:"container d-flex flex-column align-items-center gap-6 mt-12"},O=t("p",{class:"text-center fs-lg-xl"},"目前購物車是空的喔！",-1),Q=t("i",{class:"bi bi-arrow-up-right fs-xs ms-2"},null,-1),F={key:1},H=M('<div class="container"><ul class="d-flex justify-content-center align-items-center gap-lg-7 gap-1"><li class="text-center text-primary"><p class="fs-xs fs-lg-sm">Step.1</p><p class="fs-xs fs-lg-sm">購買項目</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.2</p><p class="fs-xs fs-lg-sm">填寫資料</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.3</p><p class="fs-xs fs-lg-sm">確認付款</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.4</p><p class="fs-xs fs-lg-sm">訂單完成</p></li></ul></div>',1),W={class:"container"},z={class:"row my-13"},I={class:"col-lg-7 mb-8 mb-lg-0"},X={class:"p-lg-7 rounded-2 shadow-lg-lg"},Y={class:"d-flex justify-content-between mb-5"},G=t("i",{class:"bi bi-chevron-left fs-xl"},null,-1),J={class:"d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"},K=t("p",{class:"fs-lg"},"購物車品項",-1),Z={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},tt=["src"],et={class:"w-100 d-flex flex-column justify-content-between"},st={class:"d-flex justify-content-between align-items-start"},ot=["onClick","disabled"],it={class:"d-flex justify-content-between align-items-end"},lt={class:"font-arimo"},nt={class:"count d-flex justify-content-between border border-dark border-opacity-40"},at=["onClick"],rt=t("i",{class:"bi bi-dash-lg"},null,-1),dt=[rt],ct=["onUpdate:modelValue"],pt=["onClick"],ut=t("i",{class:"bi bi-plus-lg"},null,-1),mt=[ut],_t={class:"col-lg-5"},ht={class:"p-lg-7 rounded-2 shadow-lg-lg"},ft=t("p",{class:"fs-lg pb-4 border-bottom border-dark border-opacity-10 mb-4"}," 訂單資訊 ",-1),bt={class:"pb-6 border-bottom border-dark border-opacity-10 mb-4"},gt={class:"mb-4 d-flex justify-content-between"},yt=t("p",null,"總數量",-1),xt={class:"font-arimo"},Ct={class:"mb-4 d-flex justify-content-between"},vt=t("p",null,"小計",-1),kt={class:"font-arimo"},wt={class:"d-flex justify-content-between"},Lt={class:"d-flex justify-content-between mb-6"},At=t("p",null,"總計",-1),Tt={class:"font-arimo"},St={key:0},$t={class:"d-flex justify-content-between mb-6"},Vt=t("p",null,"優惠券折抵",-1),Dt={class:"font-arimo text-primary"},Nt={class:"d-flex justify-content-between mb-6"},Mt=t("p",null,"折扣後金額",-1),jt={class:"font-arimo text-primary"};function Pt(e,o,c,Ut,a,p){var y;const T=f("VueLoading"),S=f("DeleteAllModal"),h=f("RouterLink");return i(),l(v,null,[r(T,{active:a.isLoading,"onUpdate:active":o[0]||(o[0]=s=>a.isLoading=s)},null,8,["active"]),r(S,{ref:"deleteAllModalCart",message:"請問你要刪除購物車中全部商品嗎？",onDeleteConfirm:p.deleteAllCartItem},null,8,["onDeleteConfirm"]),t("div",E,[t("span",q,"Shopping Cart ",512),t("h1",R," 購物車 ",512)]),e.totalQty===0?(i(),l("div",B,[O,r(h,{to:"/products",class:"py-2 px-17 rounded-pill d-md-inline-block btn bg-secondary-light btn-outline-dark hover-text-primary hover-border-primary font-english d-none"},{default:b(()=>[d(" 來去逛逛吧！ "),Q]),_:1})])):(i(),l("div",F,[H,t("div",W,[t("div",z,[t("div",I,[t("div",X,[t("div",Y,[r(h,{to:"/products",class:"d-flex align-items-center gap-2"},{default:b(()=>[G,d("還有想要購買的商品嗎？")]),_:1})]),t("div",J,[K,((y=e.cartList.carts)==null?void 0:y.length)>0?(i(),l("button",{key:0,class:"py-2 px-8 rounded-pill fs-sm bg-secondary-light py-2 px-6 rounded-pill d-inline-block btn btn-outline-dark hover-text-primary hover-border-primary",type:"button",onClick:o[1]||(o[1]=s=>p.openDeleteAllModalCart())}," 清空購物車 ")):C("",!0)]),t("ul",null,[(i(!0),l(v,null,N(e.cartList.carts,s=>(i(),l("li",{key:s.id},[t("div",Z,[t("img",{class:"w-20n",src:s.product.imageUrl,alt:""},null,8,tt),t("div",et,[t("div",st,[t("p",null,n(s.product.title),1),t("i",{class:"bi bi-x-lg",onClick:u=>e.deleteCartItem(s),disabled:s.id===a.loadingItem},null,8,ot)]),t("div",it,[t("p",lt,"NT$ "+n(s.product.price),1),t("div",nt,[t("button",{onClick:u=>e.decreaseNum(s),class:j(["btn rounded-0",{disabled:s.qty==1,"border-0":s.qty===1}])},dt,10,at),k(t("input",{class:"text-center bg-secondary-light border-0 w-8n w-lg-12n",type:"number","onUpdate:modelValue":u=>s.qty=u,readonly:""},null,8,ct),[[w,s.qty]]),t("button",{class:"btn rounded-0",onClick:u=>e.addNum(s)},mt,8,pt)])])])])]))),128))])])]),t("div",_t,[t("div",ht,[ft,t("div",bt,[t("div",gt,[yt,t("p",null,[d(" 共 "),t("span",xt,n(e.totalQty),1),d(" 個 ")])]),t("div",Ct,[vt,t("p",kt,"NT$ "+n(e.cartList.total),1)]),t("div",wt,[k(t("input",{type:"text",class:"form-control rounded-0 border-secondary w-70","onUpdate:modelValue":o[2]||(o[2]=s=>a.couponCode=s),placeholder:"請輸入優惠碼"},null,512),[[w,a.couponCode]]),t("button",{type:"button",class:"btn btn-primary w-30 rounded-0 text-light fs-sm border-0",onClick:o[3]||(o[3]=(...s)=>p.useCoupon&&p.useCoupon(...s))}," 使用優惠券 ")])]),t("div",Lt,[At,t("p",Tt,"NT$ "+n(Math.round(e.cartList.total)),1)]),a.isCouponUsed?(i(),l("div",St,[t("div",$t,[Vt,t("p",Dt," NT$ "+n(Math.round(e.cartList.total)-Math.round(e.cartList.final_total)),1)]),t("div",Nt,[Mt,t("p",jt," NT$ "+n(Math.round(e.cartList.final_total)),1)])])):C("",!0),r(h,{to:"/order",class:"btn btn-primary text-light w-100"},{default:b(()=>[d("去買單")]),_:1})])])])])]))],64)}const le=P(U,[["render",Pt]]);export{le as default};
