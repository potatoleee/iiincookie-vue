import{D as L}from"./DeleteAllModal-57c928df.js";import{a as A}from"./gsap-8fc7659c.js";import{M as y}from"./bootstrap-1e9f360c.js";import{c as x}from"./cartStore-19166685.js";import{f as w}from"./favoriteStore-8b93b047.js";import{m as C,a as k}from"./pinia-a78a79b1.js";import{T as p}from"./toast-1797c5ef.js";import{aN as b,aD as n,X as r,a4 as i,Y as t,W as c,bk as d,F as v,aL as F,a_ as g,as as f,bm as S,bd as D,a3 as h}from"./@vue-9b9f1f8d.js";import{_ as N}from"./logo-ec0194c9.js";import{_ as P}from"./index-45a503d2.js";import"./@popperjs-9847b28c.js";import"./axios-bff3f665.js";import"./vue-demi-71ba0ef2.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */const{VITE_APP_URL:R,VITE_APP_PATH:V}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},O={data(){return{isOpen:!1,showFavorites:!1,showCart:!1,deleteAllModalFavorites:null,deleteAllModalCart:null,paddingRight:0,loadingItem:"",splitIndexProductsOffsetTop:null,isHeaderBackgroundVisible:!1}},components:{DeleteAllModal:L},methods:{...C(x,["getCartList","addToCart","deleteCartItem","addNum","decreaseNum"]),...C(w,["removeFavorite"]),onSplitIndexProducts(l){this.splitIndexProductsOffsetTop=l.offsetTop-this.getHeaderHeight(),this.checkHeaderBackground()},getHeaderHeight(){const l=this.$refs.headerNav;return l?l.clientHeight:0},checkHeaderBackground(){const s=(window.pageYOffset||document.documentElement.scrollTop)>=this.splitIndexProductsOffsetTop;this.isHeaderBackgroundVisible=s},openDeleteAllModalFavorites(){this.$refs.deleteAllModalFavorites.show()},openDeleteAllModalCart(){this.$refs.deleteAllModalCart.show()},clearFavorites(){localStorage.clear("myFavoriteList"),this.myFavoriteList.value=[],this.myFavoriteList.splice(0,this.myFavoriteList.length),p.fire({icon:"success",title:"已刪除全部收藏品項"}),this.$refs.deleteAllModalFavorites.hide()},deleteAllCartItem(){this.$http.delete(`${R}/api/${V}/carts`).then(()=>{p.fire({icon:"success",title:"已刪除全部品項"}),this.$refs.deleteAllModalCart.hide(),this.getCartList()}).catch(l=>{p.fire({icon:"error",title:`${l.response.data.message}`})})},toggleFavorites(){this.showFavorites=!this.showFavorites,this.showFavorites?(this.paddingRight=window.innerWidth-document.body.offsetWidth+"px",document.body.style.overflow="hidden",document.body.style.paddingRight=this.paddingRight):(document.body.style.overflow="",document.body.style.paddingRight="")},toggleCart(){this.showCart=!this.showCart,this.showCart?(this.paddingRight=window.innerWidth-document.body.offsetWidth+"px",document.body.style.overflow="hidden",document.body.style.paddingRight=this.paddingRight):(document.body.style.overflow="",document.body.style.paddingRight="")},toggleMenu(){this.isOpen=!this.isOpen,this.navMotion.reversed(!this.navMotion.reversed()),this.isOpen?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},toggleShow(l){this.$refs[l].classList.toggle("show")},scrollToTop(){window.scrollTo({top:0,behavior:"smooth",block:"start",inline:"nearest",duration:2e3})}},computed:{...k(x,["cartList","totalQty"]),...k(w,["myFavoriteList"]),shouldShowCartIcon(){return!this.$route.meta.hideCartIcon}},watch:{$route:function(l){const s=this.$refs.headerNav;l.name==="index"?(console.log("現在首頁"),s.classList.remove("bg-secondary-light"),s.classList.add("bg-transparent")):(console.log("現在不是首頁"),s.classList.remove("bg-transparent"),s.classList.add("bg-secondary-light"))},myFavoriteList:{handler(){localStorage.setItem("myFavoriteList",JSON.stringify(this.myFavoriteList))},deep:!0}},beforeUnmount(){window.removeEventListener("scroll",this.checkHeaderBackground)},mounted(){window.addEventListener("scroll",this.checkHeaderBackground),this.getCartList(),this.deleteAllModalFavorites=new y(this.$refs.deleteAllModalFavorites.$el),this.deleteAllModalCart=new y(this.$refs.deleteAllModalCart.$el),this.navMotion=A.timeline({paused:!0}),this.navMotion.to(".menu",{duration:.7,width:"100%",ease:"expo.in"}),this.navMotion.from(".menu ul li",{duration:.8,y:20,opacity:0,ease:"expo.inOut",stagger:.1,display:"none"}),this.navMotion.to(".images",{duration:.7,width:"45%",ease:"expo.inOut",delay:-.7},"-=1"),this.navMotion.reverse()}},j={class:"position-relative h-100 d-flex flex-column"},H={class:"pt-7 px-5 px-lg-7"},B={class:"d-flex justify-content-between align-items-center mb-6"},E=t("i",{class:"bi bi-chevron-left fs-xl"},null,-1),I=t("p",null,"返回",-1),U=[E,I],W=t("h3",{class:"font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"}," 收藏品項 ",-1),Q={key:0,class:"d-flex justify-content-center align-items-center h-80 flex-column gap-5"},q=t("p",null,"目前尚無任何收藏項目",-1),Y={class:"overflow-y-auto h-100 pb-17 px-5 px-lg-7"},z={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-40"},J=["src","alt"],X={class:"w-100 d-flex flex-column justify-content-between"},G={class:"d-flex justify-content-between align-items-center"},K={class:"fs-md-lg font-serifTc"},Z=["onClick"],$={class:"d-flex justify-content-between align-items-end"},tt={class:"font-arimo"},et=["onClick"],st={key:1,class:"d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"},ot={class:"position-relative h-100 d-flex flex-column"},lt={class:"pt-7 px-5 px-lg-7"},it={class:"d-flex justify-content-between align-items-center mb-6"},nt=t("i",{class:"bi bi-chevron-left fs-xl"},null,-1),rt=t("p",null,"返回",-1),at=[nt,rt],dt=t("h3",{class:"font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"}," 購物車預覽 ",-1),ct={key:0,class:"d-flex justify-content-center align-items-center h-80 flex-column gap-5"},gt=t("p",null,"目前購物車上無產品",-1),ut={class:"overflow-y-scroll h-100 pb-17 px-5 px-lg-7"},ft={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},mt=["src","alt"],ht={class:"w-100 d-flex flex-column justify-content-between"},pt={class:"d-flex justify-content-between align-items-start font-serifTc fs-md-lg"},bt=["onClick","disabled"],vt={class:"d-flex justify-content-between align-items-end"},_t={class:"font-arimo"},yt={class:"count d-flex justify-content-between border border-dark border-opacity-40"},xt=["onClick"],wt=t("i",{class:"bi bi-dash-lg"},null,-1),Ct=[wt],kt=["onUpdate:modelValue"],Ft=["onClick"],Mt=t("i",{class:"bi bi-plus-lg"},null,-1),Tt=[Mt],Lt={key:1,class:"d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"},At=t("p",null,"總金額",-1),St=t("img",{class:"logo",src:N,alt:"餅乾生產餡"},null,-1),Dt={class:"d-flex align-items-center gap-5"},Nt=t("i",{class:"bi bi-heart fs-xl fs-md-2xl"},null,-1),Pt={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},Rt=t("i",{class:"bi bi-bag fs-xl fs-md-2xl"},null,-1),Vt={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},Ot={class:"position-relative"},jt={class:"images"},Ht={ref:"bg1",class:"bg bg1"},Bt={ref:"bg2",class:"bg bg2"},Et={ref:"bg3",class:"bg bg3"},It={class:"menu"},Ut={class:"d-flex flex-column gap-14"},Wt=t("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"ABOUT",-1),Qt=t("p",{class:"fs-2xl font-serifTc fw-medium"},"關於我們",-1),qt=[Wt,Qt],Yt=t("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"}," PRODUCTS ",-1),zt=t("p",{class:"fs-2xl font-serifTc fw-medium"},"產品ㄧ覽",-1),Jt=[Yt,zt],Xt=t("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"NEWS",-1),Gt=t("p",{class:"fs-2xl font-serifTc fw-medium"},"最新消息",-1),Kt=[Xt,Gt],Zt={class:"mb-16"},$t={class:"footer mt-auto bg-secondary-dark container-fluid py-12 px-7 pt-lg-15 position-relative"},te={class:"d-flex justify-content-between align-items-center flex-column flex-md-row gap-7"},ee={class:"d-flex gap-7"},se={class:"d-flex gap-7 align-items-center flex-column flex-md-row"},oe={class:"d-flex gap-4"},le=t("a",{class:"font-english fs-sm",href:"https://www.instagram.com/iiin.cookies/",target:"_blank"}," Instagram ",-1),ie=t("span",{class:"font-english fs-sm"},"|",-1),ne=t("p",{class:"font-english fs-sm"}," © 2023 iiincookie All Rights Reserved ",-1);function re(l,s,ae,de,u,o){const _=b("DeleteAllModal"),a=b("RouterLink"),M=b("RouterView");return n(),r(v,null,[i(_,{ref:"deleteAllModalFavorites",message:"請問你要刪除收藏列表中全部商品嗎？",onDeleteConfirm:o.clearFavorites},null,8,["onDeleteConfirm"]),i(_,{ref:"deleteAllModalCart",message:"請問你要刪除購物車中全部商品嗎？",onDeleteConfirm:o.deleteAllCartItem},null,8,["onDeleteConfirm"]),t("div",{class:f(["offCanvas-cart w-100 w-md-80 w-lg-50",{open:u.showFavorites}])},[t("div",j,[t("div",H,[t("div",B,[t("div",{class:"d-flex align-items-center gap-2 cursor-pointer",onClick:s[0]||(s[0]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))},U),l.myFavoriteList.length>0?(n(),r("button",{key:0,class:"btn btn-outline-dark py-1 px-2 text-opacity-50 border-opacity-50",onClick:s[1]||(s[1]=(...e)=>o.openDeleteAllModalFavorites&&o.openDeleteAllModalFavorites(...e))}," 清除全部 ")):c("",!0)]),W]),l.myFavoriteList.length===0?(n(),r("div",Q,[q,i(a,{to:"/products"},{default:d(()=>[t("button",{class:"btn btn-primary text-light",onClick:s[2]||(s[2]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))}," 去看看好吃的！ ")]),_:1})])):c("",!0),t("ul",Y,[(n(!0),r(v,null,F(l.myFavoriteList,(e,m)=>(n(),r("li",{key:e.id},[t("div",z,[t("img",{class:"w-20n",src:e.imageUrl,alt:e.title},null,8,J),t("div",X,[t("div",G,[t("p",K,g(e.title),1),t("i",{class:"bi bi-x-lg fs-lg fs-md-xl cursor-pointer",onClick:T=>l.removeFavorite(m)},null,8,Z)]),t("div",$,[t("p",tt,"NT$ "+g(e.price),1),t("i",{class:"bi bi-bag fs-xl fs-md-xl cursor-pointer",onClick:T=>l.addToCart(e.id)},null,8,et)])])])]))),128))]),l.myFavoriteList.length>0?(n(),r("div",st,[t("div",null,[t("p",null,"收藏品項｜"+g(l.myFavoriteList.length)+"項",1)]),i(a,{to:"/products"},{default:d(()=>[t("button",{class:"btn btn-primary text-light",onClick:s[3]||(s[3]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))}," 更多商品 ")]),_:1})])):c("",!0)])],2),t("div",{class:f(["overlay",{open:u.showFavorites}]),onClick:s[4]||(s[4]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))},null,2),t("div",{class:f(["offCanvas-cart w-100 w-md-80 w-lg-50",{open:u.showCart}])},[t("div",ot,[t("div",lt,[t("div",it,[t("div",{class:"d-flex align-items-center gap-2 cursor-pointer",onClick:s[5]||(s[5]=(...e)=>o.toggleCart&&o.toggleCart(...e))},at),l.totalQty>0?(n(),r("button",{key:0,class:"btn btn-outline-dark py-1 px-2 text-opacity-50 border-opacity-50",onClick:s[6]||(s[6]=(...e)=>o.openDeleteAllModalCart&&o.openDeleteAllModalCart(...e))}," 清除全部 ")):c("",!0)]),dt]),l.totalQty===0?(n(),r("div",ct,[gt,i(a,{to:"/products"},{default:d(()=>[t("button",{class:"btn btn-primary text-light",onClick:s[7]||(s[7]=(...e)=>o.toggleCart&&o.toggleCart(...e))}," 去看看好吃的！ ")]),_:1})])):c("",!0),t("ul",ut,[(n(!0),r(v,null,F(l.cartList.carts,e=>(n(),r("li",{key:e.id},[t("div",ft,[t("img",{class:"w-20n",src:e.product.imageUrl,alt:e.product.title},null,8,mt),t("div",ht,[t("div",pt,[t("p",null,g(e.product.title),1),t("i",{class:"bi bi-x-lg fs-lg fs-md-xl cursor-pointer",onClick:m=>l.deleteCartItem(e),disabled:e.id===u.loadingItem},null,8,bt)]),t("div",vt,[t("p",_t,"NT$ "+g(e.product.price),1),t("div",yt,[t("button",{onClick:m=>l.decreaseNum(e),class:f(["btn rounded-0 py-1 px-2",{disabled:e.qty==1,"border-0":e.qty===1}])},Ct,10,xt),S(t("input",{class:"text-center bg-secondary border-0 w-8n w-lg-12n",type:"number","onUpdate:modelValue":m=>e.qty=m,readonly:""},null,8,kt),[[D,e.qty]]),t("button",{class:"btn rounded-0 py-1 px-2",onClick:m=>l.addNum(e)},Tt,8,Ft)])])])])]))),128))]),l.totalQty>0?(n(),r("div",Lt,[t("div",null,[At,t("p",null,"NT$ "+g(l.cartList.total),1)]),i(a,{to:"/cart"},{default:d(()=>[t("button",{class:"btn btn-primary text-light",onClick:s[8]||(s[8]=(...e)=>o.toggleCart&&o.toggleCart(...e))}," 前往結帳 ")]),_:1})])):c("",!0)])],2),t("div",{class:f(["overlay",{open:u.showCart}]),onClick:s[9]||(s[9]=(...e)=>o.toggleCart&&o.toggleCart(...e))},null,2),t("header",null,[t("div",{class:f(["menu-btn",{open:u.isOpen}]),onClick:s[10]||(s[10]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},null,2),t("div",{ref:"headerNav",class:f(["container-fluid d-flex w-100 justify-content-between align-items-center position-fixed top-0 left-0 z-3 py-7 px-7",u.isHeaderBackgroundVisible?"bg-secondary-light":"bg-transparent"])},[i(a,{to:"/",exact:"",native:""},{default:d(()=>[St]),_:1}),t("div",Dt,[t("div",{class:"position-relative cursor-pointer",onClick:s[11]||(s[11]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))},[Nt,l.myFavoriteList.length>0?(n(),r("span",Pt,g(l.myFavoriteList.length),1)):c("",!0)]),l.$route.meta.hideCartIcon?c("",!0):(n(),r("div",{key:0,class:"position-relative cursor-pointer",onClick:s[12]||(s[12]=(...e)=>o.toggleCart&&o.toggleCart(...e))},[Rt,l.totalQty>0?(n(),r("span",Vt,g(l.totalQty),1)):c("",!0)]))])],2),t("nav",Ot,[t("div",jt,[t("span",Ht,null,512),t("span",Bt,null,512),t("span",Et,null,512)]),t("div",It,[t("ul",Ut,[i(a,{to:"/about"},{default:d(()=>[t("li",{onMouseenter:s[13]||(s[13]=e=>o.toggleShow("bg1")),onMouseleave:s[14]||(s[14]=e=>o.toggleShow("bg1")),onClick:s[15]||(s[15]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},qt,32)]),_:1}),i(a,{to:"/products",class:"menu-item-2"},{default:d(()=>[t("li",{onMouseenter:s[16]||(s[16]=e=>o.toggleShow("bg2")),onMouseleave:s[17]||(s[17]=e=>o.toggleShow("bg2")),onClick:s[18]||(s[18]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},Jt,32)]),_:1}),i(a,{to:"/articles",class:"menu-item-3"},{default:d(()=>[t("li",{onMouseenter:s[19]||(s[19]=e=>o.toggleShow("bg3")),onMouseleave:s[20]||(s[20]=e=>o.toggleShow("bg3")),onClick:s[21]||(s[21]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},Kt,32)]),_:1})])])])]),t("main",Zt,[i(M,{onSplitIndexProducts:o.onSplitIndexProducts},null,8,["onSplitIndexProducts"])]),t("footer",$t,[t("div",null,[t("div",te,[t("div",ee,[i(a,{class:"font-english fs-sm text-dark",to:"/products"},{default:d(()=>[h("Products")]),_:1}),i(a,{class:"font-english fs-sm text-dark",to:"/about"},{default:d(()=>[h("About")]),_:1}),i(a,{class:"font-english fs-sm text-dark",to:"/articles"},{default:d(()=>[h("News")]),_:1})]),t("div",se,[t("div",oe,[le,ie,i(a,{class:"font-english fs-sm",to:"/login"},{default:d(()=>[h("Admin")]),_:1})]),ne])]),t("p",{class:"vertical-lr scroll-top letter-spacing-4 font-english cursor-pointer",onClick:s[22]||(s[22]=(...e)=>o.scrollToTop&&o.scrollToTop(...e))}," To Top ")])])],64)}const Pe=P(O,[["render",re]]);export{Pe as default};
