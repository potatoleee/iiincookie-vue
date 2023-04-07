import{M as w}from"./bootstrap-1e9f360c.js";import{_ as T}from"./index-a182a977.js";import{aD as n,X as d,Y as e,a_ as g,aN as v,a4 as i,W as c,bk as a,F as y,aL as C,as as f,bm as D,bd as P,a3 as _}from"./@vue-9b9f1f8d.js";import{a as R}from"./gsap-8fc7659c.js";import{c as k}from"./cartStore-19166685.js";import{f as M}from"./favoriteStore-27c85150.js";import{m as F,a as A}from"./pinia-a78a79b1.js";import{T as x}from"./toast-1797c5ef.js";import{_ as j}from"./logo-ec0194c9.js";import"./@popperjs-9847b28c.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./vue-demi-71ba0ef2.js";import"./sweetalert2-2726e422.js";const O={props:{message:String},data(){return{deleteAllModal:""}},methods:{deleteConfirm(){this.$emit("deleteConfirm")},show(){this.deleteAllModal.show()},hide(){this.deleteAllModal.hide()}},mounted(){this.deleteAllModal=new w(this.$refs.deleteAllModal)}},V={id:"deleteAllModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteAllModalLabel","aria-hidden":"true",ref:"deleteAllModal"},N={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content border-0 bg-secondary py-5"},E=e("div",{class:"modal-header justify-content-center border-0 pb-0"},[e("h5",{id:"deleteAllModalLabel",class:"modal-title"},[e("span",null,"刪除全部")])],-1),B={class:"modal-body text-center mb-7"},I={class:"border-0 d-flex flex-column flex-lg-row p-5 gap-6"};function U(l,s,b,p,u,o){return n(),d("div",V,[e("div",N,[e("div",H,[E,e("div",B,g(b.message),1),e("div",I,[e("button",{type:"button",class:"btn btn-primary text-secondary-light w-lg-50",onClick:s[0]||(s[0]=(...m)=>o.deleteConfirm&&o.deleteConfirm(...m))}," 確認刪除 "),e("button",{type:"button",class:"btn btn-outline-dark w-lg-50","data-bs-dismiss":"modal",onClick:s[1]||(s[1]=(...m)=>o.hide&&o.hide(...m))}," 不要刪除 ")])])])],512)}const W=T(O,[["render",U]]);const{VITE_APP_URL:Q,VITE_APP_PATH:q}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},Y={data(){return{isOpen:!1,showFavorites:!1,showCart:!1,deleteAllModalFavorites:null,deleteAllModalCart:null,paddingRight:0,loadingItem:"",splitIndexProductsOffsetTop:null}},components:{DeleteAllModal:W},methods:{...F(k,["getCartList","addToCart","deleteCartItem","addNum","decreaseNum"]),...F(M,["removeFavorite"]),onSplitIndexProducts(l){this.splitIndexProductsOffsetTop=l.offsetTop-this.getHeaderHeight(),this.checkHeaderBackground()},getHeaderHeight(){const l=this.$refs.header;return l?l.clientHeight:0},checkHeaderBackground(){const s=(window.pageYOffset||document.documentElement.scrollTop)>=this.splitIndexProductsOffsetTop;this.isHeaderBackgroundVisible=s},openDeleteAllModalFavorites(){this.$refs.deleteAllModalFavorites.show()},openDeleteAllModalCart(){this.$refs.deleteAllModalCart.show()},clearFavorites(){localStorage.clear("myFavoriteList"),this.myFavoriteList.value=[],this.myFavoriteList.splice(0,this.myFavoriteList.length),x.fire({icon:"success",title:"已刪除全部收藏品項"}),this.$refs.deleteAllModalFavorites.hide()},deleteAllCartItem(){this.$http.delete(`${Q}/api/${q}/carts`).then(()=>{x.fire({icon:"success",title:"已刪除全部品項"}),this.$refs.deleteAllModalCart.hide(),this.getCartList()}).catch(l=>{x.fire({icon:"error",title:`${l.response.data.message}`})})},toggleFavorites(){this.showFavorites=!this.showFavorites,this.showFavorites?(this.paddingRight=window.innerWidth-document.body.offsetWidth+"px",document.body.style.overflow="hidden",document.body.style.paddingRight=this.paddingRight):(document.body.style.overflow="",document.body.style.paddingRight="")},toggleCart(){this.showCart=!this.showCart,this.showCart?(this.paddingRight=window.innerWidth-document.body.offsetWidth+"px",document.body.style.overflow="hidden",document.body.style.paddingRight=this.paddingRight):(document.body.style.overflow="",document.body.style.paddingRight="")},toggleMenu(){this.isOpen=!this.isOpen,this.navMotion.reversed(!this.navMotion.reversed()),this.isOpen?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},toggleShow(l){this.$refs[l].classList.toggle("show")},scrollToTop(){window.scrollTo({top:0,behavior:"smooth",block:"start",inline:"nearest",duration:2e3})}},computed:{...A(k,["cartList","totalQty"]),...A(M,["myFavoriteList"]),shouldShowCartIcon(){return!this.$route.meta.hideCartIcon}},watch:{myFavoriteList:{handler(){localStorage.setItem("myFavoriteList",JSON.stringify(this.myFavoriteList))},deep:!0}},beforeUnmount(){window.removeEventListener("scroll",this.checkHeaderBackground)},mounted(){window.addEventListener("scroll",this.checkHeaderBackground),this.getCartList(),this.deleteAllModalFavorites=new w(this.$refs.deleteAllModalFavorites.$el),this.deleteAllModalCart=new w(this.$refs.deleteAllModalCart.$el),this.navMotion=R.timeline({paused:!0}),this.navMotion.to(".menu",{duration:.7,width:"100%",ease:"expo.in"}),this.navMotion.from(".menu ul li",{duration:.8,y:20,opacity:0,ease:"expo.inOut",stagger:.1,display:"none"}),this.navMotion.to(".images",{duration:.7,width:"45%",ease:"expo.inOut",delay:-.7},"-=1"),this.navMotion.reverse(),this.$router.beforeEach((l,s,b)=>{const p=document.querySelector(".header");l.name==="index"?p.classList.add("bg-transparent"):(p.classList.remove("bg-transparent"),p.classList.add("bg-secondary-light")),b()})}},z={class:"position-relative h-100 d-flex flex-column"},J={class:"pt-7 px-5 px-lg-7"},X={class:"d-flex justify-content-between align-items-center mb-6"},G=e("i",{class:"bi bi-chevron-left fs-xl"},null,-1),K=e("p",null,"返回",-1),Z=[G,K],$=e("h3",{class:"font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"}," 收藏品項 ",-1),ee={key:0,class:"d-flex justify-content-center align-items-center h-80 flex-column gap-5"},te=e("p",null,"目前尚無任何收藏項目",-1),se={class:"overflow-y-auto h-100 pb-17 px-5 px-lg-7"},oe={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-40"},le=["src","alt"],ie={class:"w-100 d-flex flex-column justify-content-between"},ne={class:"d-flex justify-content-between align-items-center"},de={class:"fs-md-lg font-serifTc"},re=["onClick"],ae={class:"d-flex justify-content-between align-items-end"},ce={class:"font-arimo"},ge=["onClick"],ue={key:1,class:"d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"},fe={class:"position-relative h-100 d-flex flex-column"},me={class:"pt-7 px-5 px-lg-7"},he={class:"d-flex justify-content-between align-items-center mb-6"},pe=e("i",{class:"bi bi-chevron-left fs-xl"},null,-1),be=e("p",null,"返回",-1),_e=[pe,be],ve=e("h3",{class:"font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"}," 購物車預覽 ",-1),ye={key:0,class:"d-flex justify-content-center align-items-center h-80 flex-column gap-5"},xe=e("p",null,"目前購物車上無產品",-1),we={class:"overflow-y-scroll h-100 pb-17 px-5 px-lg-7"},Ce={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},ke=["src","alt"],Me={class:"w-100 d-flex flex-column justify-content-between"},Fe={class:"d-flex justify-content-between align-items-start font-serifTc fs-md-lg"},Ae=["onClick","disabled"],Te={class:"d-flex justify-content-between align-items-end"},Le={class:"font-arimo"},Se={class:"count d-flex justify-content-between border border-dark border-opacity-40"},De=["onClick"],Pe=e("i",{class:"bi bi-dash-lg"},null,-1),Re=[Pe],je=["onUpdate:modelValue"],Oe=["onClick"],Ve=e("i",{class:"bi bi-plus-lg"},null,-1),Ne=[Ve],He={key:1,class:"d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"},Ee=e("p",null,"總金額",-1),Be=e("img",{class:"logo",src:j,alt:"餅乾生產餡"},null,-1),Ie={class:"d-flex align-items-center gap-5"},Ue=e("i",{class:"bi bi-heart fs-xl fs-md-2xl"},null,-1),We={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},Qe=e("i",{class:"bi bi-bag fs-xl fs-md-2xl"},null,-1),qe={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},Ye={class:"position-relative"},ze={class:"images"},Je={ref:"bg1",class:"bg bg1"},Xe={ref:"bg2",class:"bg bg2"},Ge={ref:"bg3",class:"bg bg3"},Ke={class:"menu"},Ze={class:"d-flex flex-column gap-14"},$e=e("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"ABOUT",-1),et=e("p",{class:"fs-2xl font-serifTc fw-medium"},"關於我們",-1),tt=[$e,et],st=e("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"}," PRODUCTS ",-1),ot=e("p",{class:"fs-2xl font-serifTc fw-medium"},"產品ㄧ覽",-1),lt=[st,ot],it=e("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"NEWS",-1),nt=e("p",{class:"fs-2xl font-serifTc fw-medium"},"最新消息",-1),dt=[it,nt],rt={class:"mb-16"},at={class:"footer mt-auto bg-secondary-dark container-fluid py-12 px-7 pt-lg-15 position-relative"},ct={class:"d-flex justify-content-between align-items-center flex-column flex-md-row gap-7"},gt={class:"d-flex gap-7"},ut={class:"d-flex gap-7 align-items-center flex-column flex-md-row"},ft={class:"d-flex gap-4"},mt=e("a",{class:"font-english fs-sm",href:"https://www.instagram.com/iiin.cookies/",target:"_blank"}," Instagram ",-1),ht=e("span",{class:"font-english fs-sm"},"|",-1),pt=e("p",{class:"font-english fs-sm"}," © 2023 iiincookie All Rights Reserved ",-1);function bt(l,s,b,p,u,o){const m=v("DeleteAllModal"),r=v("RouterLink"),L=v("RouterView");return n(),d(y,null,[i(m,{ref:"deleteAllModalFavorites",message:"請問你要刪除收藏列表中全部商品嗎？",onDeleteConfirm:o.clearFavorites},null,8,["onDeleteConfirm"]),i(m,{ref:"deleteAllModalCart",message:"請問你要刪除購物車中全部商品嗎？",onDeleteConfirm:o.deleteAllCartItem},null,8,["onDeleteConfirm"]),e("div",{class:f(["offCanvas-cart w-100 w-md-80 w-lg-50",{open:u.showFavorites}])},[e("div",z,[e("div",J,[e("div",X,[e("div",{class:"d-flex align-items-center gap-2 cursor-pointer",onClick:s[0]||(s[0]=(...t)=>o.toggleFavorites&&o.toggleFavorites(...t))},Z),l.myFavoriteList.length>0?(n(),d("button",{key:0,class:"btn btn-outline-dark py-1 px-2 text-opacity-50 border-opacity-50",onClick:s[1]||(s[1]=(...t)=>o.openDeleteAllModalFavorites&&o.openDeleteAllModalFavorites(...t))}," 清除全部 ")):c("",!0)]),$]),l.myFavoriteList.length===0?(n(),d("div",ee,[te,i(r,{to:"/products"},{default:a(()=>[e("button",{class:"btn btn-primary text-light",onClick:s[2]||(s[2]=(...t)=>o.toggleFavorites&&o.toggleFavorites(...t))}," 去看看好吃的！ ")]),_:1})])):c("",!0),e("ul",se,[(n(!0),d(y,null,C(l.myFavoriteList,(t,h)=>(n(),d("li",{key:t.id},[e("div",oe,[e("img",{class:"w-20n",src:t.imageUrl,alt:t.title},null,8,le),e("div",ie,[e("div",ne,[e("p",de,g(t.title),1),e("i",{class:"bi bi-x-lg fs-lg fs-md-xl cursor-pointer",onClick:S=>l.removeFavorite(h)},null,8,re)]),e("div",ae,[e("p",ce,"NT$ "+g(t.price),1),e("i",{class:"bi bi-bag fs-xl fs-md-xl cursor-pointer",onClick:S=>l.addToCart(t.id)},null,8,ge)])])])]))),128))]),l.myFavoriteList.length>0?(n(),d("div",ue,[e("div",null,[e("p",null,"收藏品項｜"+g(l.myFavoriteList.length)+"項",1)]),i(r,{to:"/cart"},{default:a(()=>[e("button",{class:"btn btn-primary text-light",onClick:s[3]||(s[3]=(...t)=>o.toggleFavorites&&o.toggleFavorites(...t))}," 購物車 ")]),_:1})])):c("",!0)])],2),e("div",{class:f(["overlay",{open:u.showFavorites}]),onClick:s[4]||(s[4]=(...t)=>o.toggleFavorites&&o.toggleFavorites(...t))},null,2),e("div",{class:f(["offCanvas-cart w-100 w-md-80 w-lg-50",{open:u.showCart}])},[e("div",fe,[e("div",me,[e("div",he,[e("div",{class:"d-flex align-items-center gap-2 cursor-pointer",onClick:s[5]||(s[5]=(...t)=>o.toggleCart&&o.toggleCart(...t))},_e),l.totalQty>0?(n(),d("button",{key:0,class:"btn btn-outline-dark py-1 px-2 text-opacity-50 border-opacity-50",onClick:s[6]||(s[6]=(...t)=>o.openDeleteAllModalCart&&o.openDeleteAllModalCart(...t))}," 清除全部 ")):c("",!0)]),ve]),l.totalQty===0?(n(),d("div",ye,[xe,i(r,{to:"/products"},{default:a(()=>[e("button",{class:"btn btn-primary text-light",onClick:s[7]||(s[7]=(...t)=>o.toggleCart&&o.toggleCart(...t))}," 去看看好吃的！ ")]),_:1})])):c("",!0),e("ul",we,[(n(!0),d(y,null,C(l.cartList.carts,t=>(n(),d("li",{key:t.id},[e("div",Ce,[e("img",{class:"w-20n",src:t.product.imageUrl,alt:t.product.title},null,8,ke),e("div",Me,[e("div",Fe,[e("p",null,g(t.product.title),1),e("i",{class:"bi bi-x-lg fs-lg fs-md-xl cursor-pointer",onClick:h=>l.deleteCartItem(t),disabled:t.id===u.loadingItem},null,8,Ae)]),e("div",Te,[e("p",Le,"NT$ "+g(t.product.price),1),e("div",Se,[e("button",{onClick:h=>l.decreaseNum(t),class:f(["btn rounded-0 py-1 px-2",{disabled:t.qty==1,"border-0":t.qty===1}])},Re,10,De),D(e("input",{class:"text-center bg-secondary border-0 w-8n w-lg-12n",type:"number","onUpdate:modelValue":h=>t.qty=h,readonly:""},null,8,je),[[P,t.qty]]),e("button",{class:"btn rounded-0 py-1 px-2",onClick:h=>l.addNum(t)},Ne,8,Oe)])])])])]))),128))]),l.totalQty>0?(n(),d("div",He,[e("div",null,[Ee,e("p",null,"NT$ "+g(l.cartList.total),1)]),i(r,{to:"/cart"},{default:a(()=>[e("button",{class:"btn btn-primary text-light",onClick:s[8]||(s[8]=(...t)=>o.toggleCart&&o.toggleCart(...t))}," 前往結帳 ")]),_:1})])):c("",!0)])],2),e("div",{class:f(["overlay",{open:u.showCart}]),onClick:s[9]||(s[9]=(...t)=>o.toggleCart&&o.toggleCart(...t))},null,2),e("header",null,[e("div",{class:f(["menu-btn",{open:u.isOpen}]),onClick:s[10]||(s[10]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},null,2),e("div",{class:f(["container-fluid d-flex w-100 justify-content-between align-items-center position-fixed top-0 left-0 z-3 py-7 px-7 header",{"bg-secondary-light":l.isHeaderBackgroundVisible}])},[i(r,{to:"/",exact:"",native:""},{default:a(()=>[Be]),_:1}),e("div",Ie,[e("div",{class:"position-relative cursor-pointer",onClick:s[11]||(s[11]=(...t)=>o.toggleFavorites&&o.toggleFavorites(...t))},[Ue,l.myFavoriteList.length>0?(n(),d("span",We,g(l.myFavoriteList.length),1)):c("",!0)]),l.$route.meta.hideCartIcon?c("",!0):(n(),d("div",{key:0,class:"position-relative cursor-pointer",onClick:s[12]||(s[12]=(...t)=>o.toggleCart&&o.toggleCart(...t))},[Qe,l.totalQty>0?(n(),d("span",qe,g(l.totalQty),1)):c("",!0)]))])],2),e("nav",Ye,[e("div",ze,[e("span",Je,null,512),e("span",Xe,null,512),e("span",Ge,null,512)]),e("div",Ke,[e("ul",Ze,[i(r,{to:"/about"},{default:a(()=>[e("li",{onMouseenter:s[13]||(s[13]=t=>o.toggleShow("bg1")),onMouseleave:s[14]||(s[14]=t=>o.toggleShow("bg1")),onClick:s[15]||(s[15]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},tt,32)]),_:1}),i(r,{to:"/products",class:"menu-item-2"},{default:a(()=>[e("li",{onMouseenter:s[16]||(s[16]=t=>o.toggleShow("bg2")),onMouseleave:s[17]||(s[17]=t=>o.toggleShow("bg2")),onClick:s[18]||(s[18]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},lt,32)]),_:1}),i(r,{to:"/articles",class:"menu-item-3"},{default:a(()=>[e("li",{onMouseenter:s[19]||(s[19]=t=>o.toggleShow("bg3")),onMouseleave:s[20]||(s[20]=t=>o.toggleShow("bg3")),onClick:s[21]||(s[21]=(...t)=>o.toggleMenu&&o.toggleMenu(...t))},dt,32)]),_:1})])])])]),e("main",rt,[i(L,{onSplitIndexProducts:o.onSplitIndexProducts},null,8,["onSplitIndexProducts"])]),e("footer",at,[e("div",null,[e("div",ct,[e("div",gt,[i(r,{class:"font-english fs-sm text-dark",to:"/products"},{default:a(()=>[_("Products")]),_:1}),i(r,{class:"font-english fs-sm text-dark",to:"/about"},{default:a(()=>[_("About")]),_:1}),i(r,{class:"font-english fs-sm text-dark",to:"/articles"},{default:a(()=>[_("News")]),_:1})]),e("div",ut,[e("div",ft,[mt,ht,i(r,{class:"font-english fs-sm",to:"/login"},{default:a(()=>[_("Admin")]),_:1})]),pt])]),e("p",{class:"vertical-lr scroll-top letter-spacing-4 font-english cursor-pointer",onClick:s[22]||(s[22]=(...t)=>o.scrollToTop&&o.scrollToTop(...t))}," To Top ")])])],64)}const Bt=T(Y,[["render",bt]]);export{Bt as default};
