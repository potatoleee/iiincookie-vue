import{M as y}from"./bootstrap-1e9f360c.js";import{_ as A}from"./index-13dcb442.js";import{aD as n,X as d,Y as t,a_ as c,aN as b,a4 as i,W as g,bk as r,F as _,aL as w,as as h,bm as R,bd as S,a3 as p}from"./@vue-9b9f1f8d.js";import{a as j}from"./gsap-8fc7659c.js";import{c as C}from"./cartStore-f3f7e945.js";import{f as k}from"./favoriteStore-61913d83.js";import{m as M,a as F}from"./pinia-a2ec2acd.js";import{T as v}from"./toast-ba4829f6.js";import{_ as N}from"./logo-ec0194c9.js";import"./@popperjs-9847b28c.js";import"./vue-router-feb1a2d6.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./vue-demi-71ba0ef2.js";import"./loadingStore-76618adb.js";import"./sweetalert2-761b07dd.js";const P={props:{message:String},data(){return{deleteAllModal:""}},methods:{deleteConfirm(){this.$emit("deleteConfirm")},show(){this.deleteAllModal.show()},hide(){this.deleteAllModal.hide()}},mounted(){this.deleteAllModal=new y(this.$refs.deleteAllModal)}},V={id:"deleteAllModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteAllModalLabel","aria-hidden":"true",ref:"deleteAllModal"},O={class:"modal-dialog modal-dialog-centered"},E={class:"modal-content border-0 bg-secondary py-5"},U=t("div",{class:"modal-header justify-content-center border-0 pb-0"},[t("h5",{id:"deleteAllModalLabel",class:"modal-title"},[t("span",null,"刪除全部")])],-1),W={class:"modal-body text-center mb-7"},Q={class:"border-0 d-flex flex-column flex-lg-row p-5 gap-6"};function B(l,s,x,L,u,o){return n(),d("div",V,[t("div",O,[t("div",E,[U,t("div",W,c(x.message),1),t("div",Q,[t("button",{type:"button",class:"btn btn-primary text-secondary-light w-lg-50",onClick:s[0]||(s[0]=(...m)=>o.deleteConfirm&&o.deleteConfirm(...m))}," 確認刪除 "),t("button",{type:"button",class:"btn btn-outline-dark w-lg-50","data-bs-dismiss":"modal",onClick:s[1]||(s[1]=(...m)=>o.hide&&o.hide(...m))}," 不要刪除 ")])])])],512)}const q=A(P,[["render",B]]);const{VITE_APP_URL:z,VITE_APP_PATH:H}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},J={data(){return{isOpen:!1,showFavorites:!1,showCart:!1,deleteAllModalFavorites:null,deleteAllModalCart:null,paddingRight:0}},components:{DeleteAllModal:q},methods:{...M(C,["getCartList","addToCart","deleteCartItem","addNum","decreaseNum"]),...M(k,["removeFavorite"]),openDeleteAllModalFavorites(){this.$refs.deleteAllModalFavorites.show()},openDeleteAllModalCart(){this.$refs.deleteAllModalCart.show()},clearFavorites(){localStorage.clear("myFavoriteList"),this.myFavoriteList.value=[],this.myFavoriteList.splice(0,this.myFavoriteList.length),v.fire({icon:"success",title:"已刪除全部收藏品項"}),this.$refs.deleteAllModalFavorites.hide()},deleteAllCartItem(){this.$http.delete(`${z}/api/${H}/carts`).then(()=>{v.fire({icon:"success",title:"已刪除全部品項"}),this.$refs.deleteAllModalCart.hide(),this.getCartList()}).catch(l=>{v.fire({icon:"error",title:`${l.response.data.message}`})})},toggleFavorites(){this.showFavorites=!this.showFavorites,this.showFavorites?(this.paddingRight=window.innerWidth-document.body.offsetWidth+"px",document.body.style.overflow="hidden",document.body.style.paddingRight=this.paddingRight):(document.body.style.overflow="",document.body.style.paddingRight="")},toggleCart(){this.showCart=!this.showCart,this.showCart?(this.paddingRight=window.innerWidth-document.body.offsetWidth+"px",document.body.style.overflow="hidden",document.body.style.paddingRight=this.paddingRight):(document.body.style.overflow="",document.body.style.paddingRight="")},toggleMenu(){this.isOpen=!this.isOpen,this.navMotion.reversed(!this.navMotion.reversed())},toggleShow(l){this.$refs[l].classList.toggle("show")},scrollToTop(){window.scrollTo({top:0,behavior:"smooth",block:"start",inline:"nearest",duration:2e3})}},computed:{...F(C,["cartList","totalQty"]),...F(k,["myFavoriteList"])},watch:{myFavoriteList:{handler(){localStorage.setItem("myFavoriteList",JSON.stringify(this.myFavoriteList))},deep:!0}},mounted(){this.getCartList(),this.deleteAllModalFavorites=new y(this.$refs.deleteAllModalFavorites.$el),this.deleteAllModalCart=new y(this.$refs.deleteAllModalCart.$el),this.navMotion=j.timeline({paused:!0}),this.navMotion.to(".menu",{duration:1,width:"100%",ease:"expo.in"}),this.navMotion.from(".menu ul li",{duration:1,y:20,opacity:0,ease:"expo.inOut",stagger:.1,display:"none"}),this.navMotion.to(".images",{duration:1,width:"45%",ease:"expo.inOut",delay:-1},"-=1"),this.navMotion.reverse()}},X={class:"position-relative h-100 d-flex flex-column"},Y={class:"pt-7 px-5 px-lg-7"},G={class:"d-flex justify-content-between align-items-center mb-6"},I=t("i",{class:"bi bi-chevron-left fs-xl"},null,-1),K=t("p",null,"返回",-1),Z=[I,K],$=t("h3",{class:"font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"}," 收藏品項 ",-1),tt={key:0,class:"d-flex justify-content-center align-items-center h-80 flex-column gap-5"},et=t("p",null,"目前尚無任何收藏項目",-1),st={class:"overflow-y-auto h-100 pb-17 px-5 px-lg-7"},ot={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-40"},lt=["src"],it={class:"w-100 d-flex flex-column justify-content-between"},nt={class:"d-flex justify-content-between align-items-center"},dt={class:"fs-md-lg font-serifTc"},at=["onClick"],rt={class:"d-flex justify-content-between align-items-end"},ct={class:"font-arimo"},gt=["onClick"],ut={key:1,class:"d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"},mt={class:"position-relative h-100 d-flex flex-column"},ft={class:"pt-7 px-5 px-lg-7"},ht={class:"d-flex justify-content-between align-items-center mb-6"},pt=t("i",{class:"bi bi-chevron-left fs-xl"},null,-1),bt=t("p",null,"返回",-1),_t=[pt,bt],vt=t("h3",{class:"font-serifTc fs-2xl pb-6 border-bottom border-dark border-opacity-40"}," 購物車預覽 ",-1),yt={key:0,class:"d-flex justify-content-center align-items-center h-80 flex-column gap-5"},xt=t("p",null,"目前購物車上無產品",-1),wt={class:"overflow-y-scroll h-100 pb-17 px-5 px-lg-7"},Ct={class:"d-flex py-7 gap-3 border-bottom border-dark border-opacity-10"},kt=["src"],Mt={class:"w-100 d-flex flex-column justify-content-between"},Ft={class:"d-flex justify-content-between align-items-start font-serifTc fs-md-lg"},At=["onClick","disabled"],Lt={class:"d-flex justify-content-between align-items-end"},Tt={class:"font-arimo"},Dt={class:"count d-flex justify-content-between border border-dark border-opacity-40"},Rt=["onClick"],St=t("i",{class:"bi bi-dash-lg"},null,-1),jt=[St],Nt=["onUpdate:modelValue"],Pt=["onClick"],Vt=t("i",{class:"bi bi-plus-lg"},null,-1),Ot=[Vt],Et={key:1,class:"d-flex justify-content-between align-items-center position-absolute w-100 bg-secondary bottom-0 start-0 p-5 py-7 p-lg-7 border-top border-dark border-opacity-40"},Ut=t("p",null,"總金額",-1),Wt={class:"container-fluid d-flex w-100 justify-content-between align-items-center position-fixed top-0 left-0 z-3 py-7 px-7"},Qt=t("img",{class:"logo",src:N,alt:"餅乾生產餡"},null,-1),Bt={class:"d-flex align-items-center gap-5"},qt={class:"position-relative"},zt={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},Ht=t("i",{class:"bi bi-bag fs-xl fs-md-2xl"},null,-1),Jt={key:0,class:"badge bg-primary text-light position-absolute top-0 start-100 translate-middle"},Xt={class:"position-relative"},Yt={class:"images"},Gt={ref:"bg1",class:"bg bg1"},It={ref:"bg2",class:"bg bg2"},Kt={ref:"bg3",class:"bg bg3"},Zt={class:"menu"},$t={class:"d-flex flex-column gap-14"},te=t("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"ABOUT",-1),ee=t("p",{class:"fs-2xl font-serifTc fw-medium"},"關於我們",-1),se=[te,ee],oe=t("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"}," PRODUCTS ",-1),le=t("p",{class:"fs-2xl font-serifTc fw-medium"},"產品ㄧ覽",-1),ie=[oe,le],ne=t("p",{class:"fs-6xl fs-md-7xl fs-lg-8xl font-english lh-sm"},"NEWS",-1),de=t("p",{class:"fs-2xl font-serifTc fw-medium"},"最新消息",-1),ae=[ne,de],re={class:"mb-16"},ce={class:"footer mt-auto bg-secondary-dark container-fluid py-12 px-7 pt-lg-15 position-relative"},ge={class:"d-flex justify-content-between align-items-center flex-column flex-md-row gap-7"},ue={class:"d-flex gap-7"},me={class:"d-flex gap-7 align-items-center flex-column flex-md-row"},fe={class:"d-flex gap-4"},he=t("a",{class:"font-english fs-sm",href:"https://www.instagram.com/iiin.cookies/",target:"_blank"}," Instagram ",-1),pe=t("span",{class:"font-english fs-sm"},"|",-1),be=t("p",{class:"font-english fs-sm"}," © 2023 iiincookie All Rights Reserved ",-1);function _e(l,s,x,L,u,o){const m=b("DeleteAllModal"),a=b("RouterLink"),T=b("RouterView");return n(),d(_,null,[i(m,{ref:"deleteAllModalFavorites",message:"請問你要刪除收藏列表中全部商品嗎？",onDeleteConfirm:o.clearFavorites},null,8,["onDeleteConfirm"]),i(m,{ref:"deleteAllModalCart",message:"請問你要刪除購物車中全部商品嗎？",onDeleteConfirm:o.deleteAllCartItem},null,8,["onDeleteConfirm"]),t("div",{class:h(["offCanvas-cart w-100 w-md-80 w-lg-50",{open:u.showFavorites}])},[t("div",X,[t("div",Y,[t("div",G,[t("div",{class:"d-flex align-items-center gap-2 cursor-pointer",onClick:s[0]||(s[0]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))},Z),l.myFavoriteList.length>0?(n(),d("button",{key:0,class:"btn btn-outline-dark rounded-0 py-1 px-2 text-opacity-50 border-opacity-50 rounded-0",onClick:s[1]||(s[1]=(...e)=>o.openDeleteAllModalFavorites&&o.openDeleteAllModalFavorites(...e))}," 清除全部 ")):g("",!0)]),$]),l.myFavoriteList.length===0?(n(),d("div",tt,[et,i(a,{to:"/products"},{default:r(()=>[t("button",{class:"btn btn-primary text-light",onClick:s[2]||(s[2]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))}," 去看看好吃的！ ")]),_:1})])):g("",!0),t("ul",st,[(n(!0),d(_,null,w(l.myFavoriteList,(e,f)=>(n(),d("li",{key:e.id},[t("div",ot,[t("img",{class:"w-20n",src:e.imageUrl,alt:""},null,8,lt),t("div",it,[t("div",nt,[t("p",dt,c(e.title),1),t("i",{class:"bi bi-x-lg fs-lg fs-md-xl cursor-pointer",onClick:D=>l.removeFavorite(f)},null,8,at)]),t("div",rt,[t("p",ct,"NT$ "+c(e.price),1),t("i",{class:"bi bi-bag fs-xl fs-md-xl cursor-pointer",onClick:D=>l.addToCart(e.id)},null,8,gt)])])])]))),128))]),l.myFavoriteList.length>0?(n(),d("div",ut,[t("div",null,[t("p",null,"收藏品項｜"+c(l.myFavoriteList.length)+"項",1)]),i(a,{to:"/cart"},{default:r(()=>[t("button",{class:"btn btn-primary text-light rounded-0",onClick:s[3]||(s[3]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))}," 購物車 ")]),_:1})])):g("",!0)])],2),t("div",{class:h(["overlay",{open:u.showFavorites}]),onClick:s[4]||(s[4]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))},null,2),t("div",{class:h(["offCanvas-cart w-100 w-md-80 w-lg-50",{open:u.showCart}])},[t("div",mt,[t("div",ft,[t("div",ht,[t("div",{class:"d-flex align-items-center gap-2 cursor-pointer",onClick:s[5]||(s[5]=(...e)=>o.toggleCart&&o.toggleCart(...e))},_t),l.totalQty>0?(n(),d("button",{key:0,class:"btn btn-outline-dark rounded-0 py-1 px-2 text-opacity-50 border-opacity-50",onClick:s[6]||(s[6]=(...e)=>o.openDeleteAllModalCart&&o.openDeleteAllModalCart(...e))}," 清除全部 ")):g("",!0)]),vt]),l.totalQty===0?(n(),d("div",yt,[xt,i(a,{to:"/products"},{default:r(()=>[t("button",{class:"btn btn-primary text-light",onClick:s[7]||(s[7]=(...e)=>o.toggleCart&&o.toggleCart(...e))}," 去看看好吃的！ ")]),_:1})])):g("",!0),t("ul",wt,[(n(!0),d(_,null,w(l.cartList.carts,e=>(n(),d("li",{key:e.id},[t("div",Ct,[t("img",{class:"w-20n",src:e.product.imageUrl,alt:""},null,8,kt),t("div",Mt,[t("div",Ft,[t("p",null,c(e.product.title),1),t("i",{class:"bi bi-x-lg fs-lg fs-md-xl cursor-pointer",onClick:f=>l.deleteCartItem(e),disabled:e.id===l.loadingItem},null,8,At)]),t("div",Lt,[t("p",Tt,"NT$ "+c(e.product.price),1),t("div",Dt,[t("button",{onClick:f=>l.decreaseNum(e),class:h(["btn rounded-0 py-1 px-2",{disabled:e.qty==1,"border-0":e.qty===1}])},jt,10,Rt),R(t("input",{class:"text-center bg-secondary border-0 w-8n w-lg-12n",type:"number","onUpdate:modelValue":f=>e.qty=f,readonly:""},null,8,Nt),[[S,e.qty]]),t("button",{class:"btn rounded-0 py-1 px-2",onClick:f=>l.addNum(e)},Ot,8,Pt)])])])])]))),128))]),l.totalQty>0?(n(),d("div",Et,[t("div",null,[Ut,t("p",null,"NT$ "+c(l.cartList.total),1)]),i(a,{to:"/cart"},{default:r(()=>[t("button",{class:"btn btn-primary text-light rounded-0",onClick:s[8]||(s[8]=(...e)=>o.toggleCart&&o.toggleCart(...e))}," 前往結帳 ")]),_:1})])):g("",!0)])],2),t("div",{class:h(["overlay",{open:u.showCart}]),onClick:s[9]||(s[9]=(...e)=>o.toggleCart&&o.toggleCart(...e))},null,2),t("div",{class:h(["menu-btn",{open:u.isOpen}]),onClick:s[10]||(s[10]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},null,2),t("div",Wt,[i(a,{to:"/",exact:"",native:""},{default:r(()=>[Qt]),_:1}),t("div",Bt,[t("div",qt,[t("i",{class:"bi bi-heart fs-xl fs-md-2xl",onClick:s[11]||(s[11]=(...e)=>o.toggleFavorites&&o.toggleFavorites(...e))}),l.myFavoriteList.length>0?(n(),d("span",zt,c(l.myFavoriteList.length),1)):g("",!0)]),t("div",{class:"position-relative",onClick:s[12]||(s[12]=(...e)=>o.toggleCart&&o.toggleCart(...e))},[Ht,l.totalQty>0?(n(),d("span",Jt,c(l.totalQty),1)):g("",!0)])])]),t("div",Xt,[t("div",Yt,[t("span",Gt,null,512),t("span",It,null,512),t("span",Kt,null,512)]),t("div",Zt,[t("ul",$t,[i(a,{to:"/about"},{default:r(()=>[t("li",{onMouseenter:s[13]||(s[13]=e=>o.toggleShow("bg1")),onMouseleave:s[14]||(s[14]=e=>o.toggleShow("bg1")),onClick:s[15]||(s[15]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},se,32)]),_:1}),i(a,{to:"/products",class:"menu-item-2"},{default:r(()=>[t("li",{onMouseenter:s[16]||(s[16]=e=>o.toggleShow("bg2")),onMouseleave:s[17]||(s[17]=e=>o.toggleShow("bg2")),onClick:s[18]||(s[18]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},ie,32)]),_:1}),i(a,{to:"/articles",class:"menu-item-3"},{default:r(()=>[t("li",{onMouseenter:s[19]||(s[19]=e=>o.toggleShow("bg3")),onMouseleave:s[20]||(s[20]=e=>o.toggleShow("bg3")),onClick:s[21]||(s[21]=(...e)=>o.toggleMenu&&o.toggleMenu(...e))},ae,32)]),_:1})])])]),t("main",re,[i(T)]),t("footer",ce,[t("div",null,[t("div",ge,[t("div",ue,[i(a,{class:"font-english fs-sm text-dark",to:"/products"},{default:r(()=>[p("Products")]),_:1}),i(a,{class:"font-english fs-sm text-dark",to:"/about"},{default:r(()=>[p("About")]),_:1}),i(a,{class:"font-english fs-sm text-dark",to:"/articles"},{default:r(()=>[p("News")]),_:1})]),t("div",me,[t("div",fe,[he,pe,i(a,{class:"font-english fs-sm",to:"/login"},{default:r(()=>[p("Admin")]),_:1})]),be])]),t("p",{class:"vertical-lr scroll-top letter-spacing-4 font-english cursor-pointer",onClick:s[22]||(s[22]=(...e)=>o.scrollToTop&&o.scrollToTop(...e))}," To Top ")])])],64)}const Qe=A(J,[["render",_e]]);export{Qe as default};
