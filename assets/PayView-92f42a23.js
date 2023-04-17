import{c as a}from"./cartStore-3b641483.js";import{m as h,a as b}from"./pinia-a78a79b1.js";import{T as n}from"./toast-94376381.js";import{_ as g}from"./index-d4e1b512.js";import{aD as c,X as l,Y as s,a3 as p,W as u,a_ as o,F as _,aL as x,a2 as y}from"./@vue-9b9f1f8d.js";import"./axios-bff3f665.js";import"./vue-demi-71ba0ef2.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./vue-router-fe912644.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:m,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},k={emits:["split-index-products"],data(){return{orderId:"",orderInfo:{},orderUser:{},orderProducts:[]}},methods:{...h(a,["getCartList"]),formatDate(t){return new Date(t*1e3).toLocaleString()},getOrder(){this.orderId=this.$route.params.id,this.$http.get(`${m}/api/${f}/order/${this.orderId}`).then(t=>{this.orderInfo=t.data.order,this.orderUser=t.data.order.user,this.orderProducts=t.data.order.products}).catch(t=>{n.fire({icon:"error",title:`${t.response.data.message}`})})},pay(){this.orderId=this.$route.params.id,this.$http.post(`${m}/api/${f}/pay/${this.orderId}`).then(t=>{n.fire({icon:"success",title:`${t.data.message}`}),this.$router.push(`/complete/${this.orderId}`)}).catch(t=>{n.fire({icon:"error",title:`${t.response.data.message}`})})}},computed:{...b(a,["cartList","totalQty"])},mounted(){this.getCartList(),this.getOrder()}},w=y('<div class="title my-10 my-lg-15"><span class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end">Payment </span><h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">付款</h1></div><div class="container"><ul class="d-flex justify-content-center align-items-c gap-lg-7 gap-1"><li class="text-center"><p class="fs-xs fs-lg-sm">Step.1</p><p class="fs-xs fs-lg-sm">購買項目</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.2</p><p class="fs-xs fs-lg-sm">填寫資料</p></li><i class="bi bi-chevron-right"></i><li class="text-center text-primary"><p class="fs-xs fs-lg-sm">Step.3</p><p class="fs-xs fs-lg-sm">確認付款</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.4</p><p class="fs-xs fs-lg-sm">訂單完成</p></li></ul></div>',2),I={class:"container"},v={class:"row my-13"},T={class:"col-lg-6 mb-8 mb-lg-0"},U={class:"p-lg-7 rounded-2 shadow-lg-lg"},P={class:"d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"},S={class:"fs-lg"},V={key:0,class:"text-danger"},D={class:"fs-lg"},L={class:"text-primary font-arimo"},N={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},A=["src","alt"],E={class:"w-100 d-flex flex-column justify-content-between"},j={class:"d-flex justify-content-between align-items-start"},B={class:"d-flex justify-content-between align-items-center"},C={class:"font-arimo"},M={class:"font-arimo"},O={class:"col-lg-6"},R={class:"p-lg-7 rounded-2 shadow-lg-lg"},F=s("p",{class:"fs-lg pb-4 border-bottom border-dark border-opacity-10"}," 訂單資訊 ",-1),H={class:"mb-6"},q={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},Q={class:"fw-regular d-md-none"},W=s("p",{class:"fw-regular d-none d-md-block col-4"},"訂單金額：",-1),X={class:"col d-none d-md-block col"},Y={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},$={class:"fw-regular d-md-none"},z=s("p",{class:"fw-regular d-none d-md-block col-4"},"訂單編號：",-1),G={class:"col d-none d-md-block col"},J={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},K={class:"fw-regular d-md-none"},Z=s("p",{class:"fw-regular d-none d-md-block col-4"},"下單時間：",-1),ss={class:"col d-none d-md-block col"},os={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},es={class:"fw-regular d-md-none"},ts=s("p",{class:"fw-regular d-none d-md-block col-4"},"寄送地址：",-1),rs={class:"col d-none d-md-block col"},ds={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},cs={class:"fw-regular d-md-none"},ls=s("p",{class:"fw-regular d-none d-md-block col-4"},"顧客姓名：",-1),is={class:"col d-none d-md-block col"},ns={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},as={class:"fw-regular d-md-none"},ps=s("p",{class:"fw-regular d-none d-md-block col-4"},"聯絡電話：",-1),_s={class:"col d-none d-md-block col"},ms={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},fs={class:"fw-regular d-md-none"},hs=s("p",{class:"fw-regular d-none d-md-block col-4"},"電子信箱：",-1),bs={class:"col d-none d-md-block col"},gs={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},us={class:"fw-regular d-md-none"},xs=s("p",{class:"fw-regular d-none d-md-block col-4"},"客戶備註：",-1),ys={class:"col d-none d-md-block col"};function ks(t,i,ws,Is,e,d){return c(),l(_,null,[w,s("div",I,[s("div",v,[s("div",T,[s("div",U,[s("div",P,[s("p",S,[p(" 訂單品項 "),e.orderInfo.is_paid?u("",!0):(c(),l("span",V,"未付款"))]),s("p",D,[p(" 總金額： "),s("span",L,"NT$ "+o(Math.round(e.orderInfo.total)),1)])]),(c(!0),l(_,null,x(e.orderProducts,r=>(c(),l("ul",{key:r.id},[s("li",null,[s("div",N,[s("img",{class:"w-20n",src:r.product.imageUrl,alt:r.product.title},null,8,A),s("div",E,[s("div",j,[s("p",null,o(r.product.title),1)]),s("div",B,[s("p",C," NT$ "+o(r.product.price)+" x "+o(r.qty),1),s("p",M,"NT$ "+o(r.total),1)])])])])]))),128))])]),s("div",O,[s("div",R,[F,s("ul",H,[s("li",q,[s("p",Q," 訂單金額： NT$ "+o(Math.round(e.orderInfo.total)),1),W,s("p",X," NT$ "+o(Math.round(e.orderInfo.total)),1)]),s("li",Y,[s("p",$,"訂單編號： "+o(e.orderInfo.id),1),z,s("p",G,o(e.orderInfo.id),1)]),s("li",J,[s("p",K," 下單時間： "+o(d.formatDate(e.orderInfo.create_at)),1),Z,s("p",ss,o(d.formatDate(e.orderInfo.create_at)),1)]),s("li",os,[s("p",es," 寄送地址： "+o(e.orderUser.address),1),ts,s("p",rs,o(e.orderUser.address),1)]),s("li",ds,[s("p",cs," 顧客姓名： "+o(e.orderUser.name),1),ls,s("p",is,o(e.orderUser.name),1)]),s("li",ns,[s("p",as,"聯絡電話： "+o(e.orderUser.tel),1),ps,s("p",_s,o(e.orderUser.tel),1)]),s("li",ms,[s("p",fs," 電子信箱： "+o(e.orderUser.email),1),hs,s("p",bs,o(e.orderUser.email),1)]),s("li",gs,[s("p",us," 客戶備註： "+o(e.orderInfo.message),1),xs,s("p",ys,o(e.orderInfo.message),1)])]),s("button",{type:"button",class:"btn btn-primary text-light w-100",onClick:i[0]||(i[0]=(...r)=>d.pay&&d.pay(...r))}," 確認付款 ")])])])])],64)}const Fs=g(k,[["render",ks]]);export{Fs as default};
