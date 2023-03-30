import{c as _}from"./cartStore-19166685.js";import{m as f,a as b}from"./pinia-a78a79b1.js";import{T as c}from"./toast-1797c5ef.js";import{_ as g}from"./index-c29abf88.js";import{aD as l,X as i,Y as s,a3 as m,W as u,a_ as o,F as h,aL as x,a2 as y}from"./@vue-9b9f1f8d.js";import"./axios-bff3f665.js";import"./vue-demi-71ba0ef2.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:a,VITE_APP_PATH:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{orderId:"",orderInfo:{},orderUser:{},orderProducts:[]}},methods:{...f(_,["getCartList"]),formatDate(t){return new Date(t*1e3).toLocaleString()},getAllOrder(){this.$http.get(`${a}/api/${p}/orders`).then(t=>{console.log(t)}).catch(t=>{c.fire({icon:"error",title:`${t.response.data.message}`})})},getOrder(){this.orderId=this.$route.params.id,this.$http.get(`${a}/api/${p}/order/${this.orderId}`).then(t=>{console.log(t),this.orderInfo=t.data.order,this.orderUser=t.data.order.user,this.orderProducts=t.data.order.products,console.log(this.orderInfo),console.log(this.orderProducts)}).catch(t=>{c.fire({icon:"error",title:`${t.response.data.message}`})})},pay(){this.orderId=this.$route.params.id,this.$http.post(`${a}/api/${p}/pay/${this.orderId}`).then(t=>{c.fire({icon:"success",title:`${t.data.message}`}),console.log(t),this.$router.push(`/complete/${this.orderId}`)}).catch(t=>{c.fire({icon:"error",title:`${t.response.data.message}`})})}},computed:{...b(_,["cartList","totalQty"])},mounted(){this.getAllOrder(),this.getCartList(),this.getOrder()}},w=y('<div class="title my-10 my-lg-15"><span class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end">Payment </span><h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">付款</h1></div><div class="container"><ul class="d-flex justify-content-center align-items-c gap-lg-7 gap-1"><li class="text-center"><p class="fs-xs fs-lg-sm">Step.1</p><p class="fs-xs fs-lg-sm">購買項目</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.2</p><p class="fs-xs fs-lg-sm">填寫資料</p></li><i class="bi bi-chevron-right"></i><li class="text-center text-primary"><p class="fs-xs fs-lg-sm">Step.3</p><p class="fs-xs fs-lg-sm">確認付款</p></li><i class="bi bi-chevron-right"></i><li class="text-center"><p class="fs-xs fs-lg-sm">Step.4</p><p class="fs-xs fs-lg-sm">訂單完成</p></li></ul></div>',2),I={class:"container"},v={class:"row my-13"},T={class:"col-lg-6 mb-8 mb-lg-0"},U={class:"p-lg-7 rounded-2 shadow-lg-lg"},P={class:"d-flex justify-content-between align-items-center pb-4 border-bottom border-dark border-opacity-10"},A={class:"fs-lg"},S={key:0,class:"text-danger"},V={class:"fs-lg"},D={class:"text-primary"},L={class:"font-arimo"},N={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},E=["src"],O={class:"w-100 d-flex flex-column justify-content-between"},j={class:"d-flex justify-content-between align-items-start"},$={class:"d-flex justify-content-between align-items-center"},B={class:"font-arimo"},C={class:"font-arimo"},R={class:"col-lg-6"},F={class:"p-lg-7 rounded-2 shadow-lg-lg"},H=s("p",{class:"fs-lg pb-4 border-bottom border-dark border-opacity-10"}," 訂單資訊 ",-1),q={class:"mb-6"},M={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},Q={class:"fw-regular d-md-none"},W=s("p",{class:"fw-regular d-none d-md-block col-4"},"訂單金額：",-1),X={class:"col d-none d-md-block col"},Y={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},z={class:"fw-regular d-md-none"},G=s("p",{class:"fw-regular d-none d-md-block col-4"},"訂單編號：",-1),J={class:"col d-none d-md-block col"},K={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},Z={class:"fw-regular d-md-none"},ss=s("p",{class:"fw-regular d-none d-md-block col-4"},"下單時間：",-1),os={class:"col d-none d-md-block col"},es={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},ts={class:"fw-regular d-md-none"},rs=s("p",{class:"fw-regular d-none d-md-block col-4"},"寄送地址：",-1),ds={class:"col d-none d-md-block col"},cs={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},ls={class:"fw-regular d-md-none"},is=s("p",{class:"fw-regular d-none d-md-block col-4"},"顧客姓名：",-1),ns={class:"col d-none d-md-block col"},as={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},ps={class:"fw-regular d-md-none"},_s=s("p",{class:"fw-regular d-none d-md-block col-4"},"聯絡電話：",-1),ms={class:"col d-none d-md-block col"},hs={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},fs={class:"fw-regular d-md-none"},bs=s("p",{class:"fw-regular d-none d-md-block col-4"},"電子信箱：",-1),gs={class:"col d-none d-md-block col"},us={class:"d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},xs={class:"fw-regular d-md-none"},ys=s("p",{class:"fw-regular d-none d-md-block col-4"},"客戶備註：",-1),ks={class:"col d-none d-md-block col"};function ws(t,n,Is,vs,e,d){return l(),i(h,null,[w,s("div",I,[s("div",v,[s("div",T,[s("div",U,[s("div",P,[s("p",A,[m(" 訂單品項 "),e.orderInfo.is_paid?u("",!0):(l(),i("span",S,"未付款"))]),s("p",V,[m(" 總金額： "),s("span",D,[s("span",L,"NT$ "+o(e.orderInfo.total),1)])])]),(l(!0),i(h,null,x(e.orderProducts,r=>(l(),i("ul",{key:r.id},[s("li",null,[s("div",N,[s("img",{class:"w-20n",src:r.product.imageUrl,alt:""},null,8,E),s("div",O,[s("div",j,[s("p",null,o(r.product.title),1)]),s("div",$,[s("p",B," NT$ "+o(r.product.price)+" x "+o(r.qty),1),s("p",C,"NT$ "+o(r.total),1)])])])])]))),128))])]),s("div",R,[s("div",F,[H,s("ul",q,[s("li",M,[s("p",Q," 訂單金額： NT$ "+o(e.orderInfo.total),1),W,s("p",X,"NT$ "+o(e.orderInfo.total),1)]),s("li",Y,[s("p",z,"訂單編號： "+o(e.orderInfo.id),1),G,s("p",J,o(e.orderInfo.id),1)]),s("li",K,[s("p",Z," 下單時間： "+o(d.formatDate(e.orderInfo.create_at)),1),ss,s("p",os,o(d.formatDate(e.orderInfo.create_at)),1)]),s("li",es,[s("p",ts," 寄送地址： "+o(e.orderUser.address),1),rs,s("p",ds,o(e.orderUser.address),1)]),s("li",cs,[s("p",ls," 顧客姓名： "+o(e.orderUser.name),1),is,s("p",ns,o(e.orderUser.name),1)]),s("li",as,[s("p",ps,"聯絡電話： "+o(e.orderUser.tel),1),_s,s("p",ms,o(e.orderUser.tel),1)]),s("li",hs,[s("p",fs," 電子信箱： "+o(e.orderUser.email),1),bs,s("p",gs,o(e.orderUser.email),1)]),s("li",us,[s("p",xs," 客戶備註： "+o(e.orderInfo.message),1),ys,s("p",ks,o(e.orderInfo.message),1)])]),s("button",{type:"button",class:"btn btn-primary text-light w-100",onClick:n[0]||(n[0]=(...r)=>d.pay&&d.pay(...r))}," 確認付款 ")])])])])],64)}const qs=g(k,[["render",ws]]);export{qs as default};
