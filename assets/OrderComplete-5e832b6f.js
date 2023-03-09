import{c as d}from"./cartStore-f6a7a879.js";import{l as g}from"./loadingStore-cfb944cc.js";import{m as u,a as n}from"./pinia-a2ec2acd.js";import{T as b}from"./toast-ba4829f6.js";import{_ as x}from"./index-db7f1776.js";import{aN as y,aD as i,X as l,Y as s,a4 as p,bk as _,a3 as a,a_ as t,F as h,aL as w,a2 as k}from"./@vue-9b9f1f8d.js";import"./axios-bff3f665.js";import"./vue-demi-71ba0ef2.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./vue-router-feb1a2d6.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:v,VITE_APP_PATH:I}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{orderId:"",orderInfo:{},orderUser:{},orderProducts:[]}},methods:{...u(d,["getCartList"]),formatDate(o){return new Date(o*1e3).toLocaleString()},getOrder(){this.orderId=this.$route.params.id,this.isLoading=!1,this.$http.get(`${v}/api/${I}/order/${this.orderId}`).then(o=>{this.isLoading=!0,console.log(o),this.orderInfo=o.data.order,this.orderUser=o.data.order.user,this.orderProducts=o.data.order.products,console.log(this.orderInfo),console.log(this.orderProducts)}).catch(o=>{b.fire({icon:"error",title:`${o.response.data.message}`})})}},computed:{...n(d,["cartList","totalQty"]),...n(g,["isLoading"])},mounted(){this.getCartList(),this.getOrder()}},T=k('<div class="title py-15"><span class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end">Complete </span><h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">訂單完成</h1></div><div class="container mb-8"><ul class="d-flex justify-content-center align-items-center gap-7"><li class="text-center"><p class="fs-xs fs-lg-sm">Step.1</p><p class="fs-xs fs-lg-sm">購買項目</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.2</p><p class="fs-xs fs-lg-sm">填寫資料</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.3</p><p class="fs-xs fs-lg-sm">確認付款</p></li><i class="bi bi-chevron-right"></i><li class="text-center text-primary"><p class="fs-xs fs-lg-sm">Step.4</p><p class="fs-xs fs-lg-sm">訂單完成</p></li></ul></div>',2),S={class:"container"},P={class:"text-center"},U=s("p",{class:"text-center fs-5xl mb-5"},"感謝你的支持！",-1),N=s("p",{class:"mb-1"}," 謝謝你對於本店的支持，我們會盡快將產品寄出讓你品嚐到的 ，希望你會喜歡～ ",-1),V=s("p",{class:"mb-6"},"如有任何問題，可以私訊 ig:iiincookie",-1),A={class:"d-flex flex-column flex-lg-row justify-content-center gap-5"},D={class:"container"},E={class:"row my-13"},j={class:"col-lg-7 mb-8 mb-lg-0"},C={class:"p-lg-7 rounded-2 shadow-lg-lg"},R={class:"d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"},O={class:"fs-lg"},B={key:0,class:"text-danger"},F={key:1,class:"text-primary"},H={class:"fs-lg"},$={class:"text-primary font-arimo"},q={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},M=["src"],Q={class:"w-100 d-flex flex-column justify-content-between"},X={class:"d-flex justify-content-between align-items-start"},Y={class:"d-flex justify-content-between align-items-center"},z={class:"font-arimo"},G={class:"font-arimo"},J={class:"col-lg-5"},K={class:"p-lg-7 rounded-2 shadow-lg-lg"},W=s("p",{class:"fs-lg pb-4 border-bottom border-dark border-opacity-10"}," 訂單資訊 ",-1),Z={class:"table mb-6"},ss={class:"border-dark border-opacity-10"},ts=s("th",{class:"fw-regular ps-0",width:"120"},"訂單金額：",-1),es={class:"font-arimo"},os={class:"border-dark border-opacity-10"},rs=s("th",{class:"fw-regular ps-0",width:"120"},"訂單編號：",-1),is={class:"border-dark border-opacity-10"},ls=s("th",{class:"fw-regular ps-0",width:"120"},"下單時間：",-1),as={class:"border-dark border-opacity-10"},cs=s("th",{class:"fw-regular ps-0",width:"120"},"寄送地址：",-1),ds={class:"border-dark border-opacity-10"},ns=s("th",{class:"fw-regular ps-0",width:"120"},"顧客姓名：",-1),ps={class:"border-dark border-opacity-10"},_s=s("th",{class:"fw-regular ps-0",width:"120"},"聯絡電話：",-1),hs={class:"border-dark border-opacity-10"},fs=s("th",{class:"fw-regular ps-0",width:"120"},"電子信箱：",-1),ms={class:"border-dark border-opacity-10"},gs=s("th",{class:"fw-regular ps-0",width:"120"},"備註：",-1);function us(o,f,bs,xs,e,m){const c=y("RouterLink");return i(),l(h,null,[T,s("div",S,[s("div",P,[U,N,V,s("div",A,[p(c,{to:"/",class:"bg-secondary-light border border-dark py-2 px-15 rounded-pill d-inline-block btn"},{default:_(()=>[a(" 回到首頁 ")]),_:1}),p(c,{to:"/products",class:"py-2 px-15 rounded-pill d-inline-block btn btn-primary text-light"},{default:_(()=>[a(" 繼續購物 ")]),_:1})])])]),s("div",D,[s("div",E,[s("div",j,[s("div",C,[s("div",R,[s("p",O,[a(" 訂單品項 "),e.orderInfo.is_paid?(i(),l("span",F,"已付款")):(i(),l("span",B,"未付款"))]),s("p",H,[a(" 總金額： "),s("span",$,"NT$ "+t(e.orderInfo.total),1)])]),(i(!0),l(h,null,w(e.orderProducts,r=>(i(),l("ul",{key:r.id},[s("li",null,[s("div",q,[s("img",{class:"w-20n",src:r.product.imageUrl,alt:""},null,8,M),s("div",Q,[s("div",X,[s("p",null,t(r.product.title),1)]),s("div",Y,[s("p",z," NT$ "+t(r.product.price)+" x "+t(r.qty),1),s("p",G,"NT$ "+t(r.total),1)])])])])]))),128))])]),s("div",J,[s("div",K,[W,s("table",Z,[s("tbody",null,[s("tr",ss,[ts,s("td",es,"NT$ "+t(e.orderInfo.total),1)]),s("tr",os,[rs,s("td",null,t(e.orderInfo.id),1)]),s("tr",is,[ls,s("td",null,t(m.formatDate(e.orderInfo.create_at)),1)]),s("tr",as,[cs,s("td",null,t(e.orderUser.address),1)]),s("tr",ds,[ns,s("td",null,t(e.orderUser.name),1)]),s("tr",ps,[_s,s("td",null,t(e.orderUser.tel),1)]),s("tr",hs,[fs,s("td",null,t(e.orderUser.email),1)]),s("tr",ms,[gs,s("td",null,t(e.orderInfo.message),1)])])])])])])])],64)}const Os=x(L,[["render",us]]);export{Os as default};