import{m as C,a as S}from"./pinia-a78a79b1.js";import{L as F}from"./LoadingComponent-bb96b76a.js";import{c as T}from"./cartStore-19166685.js";import{g as s,S as P}from"./gsap-8fc7659c.js";import{A as I,S as B,a as D}from"./swiper-fce122d8.js";import{T as N}from"./toast-1797c5ef.js";import{S as a}from"./split-type-cdcb87fd.js";import{_ as j}from"./index-4d47e7fc.js";import{aN as v,aD as _,X as x,a4 as r,Y as t,bk as l,F as w,aL as k,a2 as q,a3 as b,U as E,a_ as g}from"./@vue-9b9f1f8d.js";import"./vue-demi-71ba0ef2.js";import"./logo-ec0194c9.js";import"./axios-bff3f665.js";import"./ssr-window-c9202916.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */const Z="/iiincookie-vue/assets/indexVideo-82206865.mp4";const{VITE_APP_URL:A,VITE_APP_PATH:L}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0};s.registerPlugin(a,P);const H={data(){return{isOpen:!1,modules:[I],productList:[],articlesList:[],isLoading:!0}},methods:{...C(T,["getCartList"]),videoLoading(){console.log("影片載入中"),this.isLoading=!0},videoLoaded(){console.log("影片載入完畢"),this.isLoading=!1},formatDate(o){return new Date(o*1e3).toLocaleDateString()},getProductList(){this.isLoading=!0,this.$http.get(`${A}/api/${L}/products/all`).then(o=>{this.productList=o.data.products.reverse(),this.isLoading=!1}).catch(o=>{alert(o.data.message)})},getArticleList(){this.isLoading=!0,this.$http.get(`${A}/api/${L}/articles`).then(o=>{this.articlesList=o.data.articles,this.isLoading=!1}).catch(o=>{N.fire({icon:"error",title:`${o.response.data.message}`})})}},components:{Swiper:B,SwiperSlide:D,LoadingComponent:F},mounted(){const o=this.$refs.splitIndexAbout,n=this.$refs.splitIndexProducts,m=this.$refs.splitIndexProductsCh,d=this.$refs.myText1,c=this.$refs.myText2,p=this.$refs.myText3,h=this.$refs.splitIndexMoreProducts,i=this.$refs.splitIndexMoreProductsCh,u=this.$refs.splitIndexNews,f=this.$refs.splitIndexNewsCh;new a(o),new a(n),new a(m),new a(d),new a(c),new a(p),new a(h),new a(i),new a(u),new a(f),this.$nextTick(()=>{document.querySelectorAll(".mask-bg").forEach(y=>{s.to(y,{scrollTrigger:{trigger:y,start:"center bottom",refreshPositions:!0},duration:1,width:"0%",ease:"power3.inOut"})}),s.to(o.querySelectorAll(".char"),{scrollTrigger:{trigger:o,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(d.querySelectorAll(".char"),{scrollTrigger:{trigger:d,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(c.querySelectorAll(".char"),{scrollTrigger:{trigger:c,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(p.querySelectorAll(".char"),{scrollTrigger:{trigger:p,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(h.querySelectorAll(".char"),{scrollTrigger:{trigger:h,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(i.querySelectorAll(".char"),{scrollTrigger:{trigger:i,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(n.querySelectorAll(".char"),{scrollTrigger:{trigger:n,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(m.querySelectorAll(".char"),{scrollTrigger:{trigger:m,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(u.querySelectorAll(".char"),{scrollTrigger:{trigger:u,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1}),s.to(f.querySelectorAll(".char"),{scrollTrigger:{trigger:f,start:"bottom bottom"},y:0,stagger:.05,delay:.2,duration:.1})}),s.to(".video-subTitle",{scrollTrigger:{trigger:".videoCanvas",start:"top top",end:"bottom top",scrub:!0},opacity:0,height:0,duration:.1}),this.scrollDown=s.timeline({scrollTrigger:{trigger:".video-wrap",start:"bottom-=500 bottom",scrub:!0}}),this.scrollDown.to(".scroll-down",{opacity:0,x:100}),this.scrollDown=s.timeline({scrollTrigger:{trigger:".video-wrap",start:"bottom-=500 bottom",scrub:!0}}),this.scrollDown.to(".scroll-down-phone",{opacity:0,x:100}),this.videoMotion=s.timeline({scrollTrigger:{trigger:".video-wrap",start:"top top",end:"bottom bottom",scrub:!0}});const e=window.matchMedia("(max-width: 767px)");this.videoMotion.to(".videoCanvas",{width:e.matches?"100vw":"90vw",height:"75vh",duration:2,ease:"cubic-bezier(.5, .1, .2, 1)"}).to(".videoCanvas",{width:e.matches?"100vw":"90vw",height:"75vh",duration:40,ease:"none"}).to(".videoCanvas",{width:"100vw",height:"100vh",duration:5,ease:"ease"}).to(".videoCanvas",{width:"100vw",height:"100vh",duration:20,ease:"ease"}).to(".videoCanvas",{width:"45vmin",height:"50vmin",duration:10,ease:"ease"}),this.logoTop=s.timeline({scrollTrigger:{trigger:".videoCanvas",start:"top top",end:"bottom top",scrub:!0}}),this.logoTop.fromTo(".logo",{width:"80%",xPercent:"-50",y:"75vh",yPercent:"-50",duration:2,opacity:.8,ease:"ease"},{width:"140",y:"0vh",opacity:1,yPercent:"-50"}),this.getCartList(),this.getProductList(),this.getArticleList()},updated(){P.refresh()},beforeRouteLeave(o,n,m){const d=s.timeline();d.to(".logo",{width:"auto",y:"0vh",opacity:1,yPercent:"-50",duration:1,onComplete:()=>{this.logoTop.pause(),this.logoTop.kill(),m()}}),d.play()},computed:{...S(T,["cartList"])}},z={class:"video-wrap"},M=t("p",{class:"d-none d-md-block vertical-lr scroll-down letter-spacing-4 font-english"}," Scroll Down ",-1),V=t("p",{class:"d-md-none scroll-down-phone letter-spacing-4 font-english"}," Scroll Down ",-1),O={class:"video-content d-flex justify-content-center align-items-center"},R={class:"position-relative"},J=t("p",{class:"position-absolute video-subTitle fs-sm fs-lg-xl font-serifTc"}," 人生很難了，來一塊甜的吧！ ",-1),U=t("source",{src:Z,type:"video/mp4"},null,-1),Y=[U],K=q('<p class="font-serifTc position-absolute start-50 translate-middle-x top-20 fw-medium letter-spacing-4 text-white fs-base fs-md-2xl lh-lg w-100 d-flex justify-content-center"> 你好，我們是餅乾生產餡，<br> 致力於製作美味的甜點，<br> 使每一個味蕾都獲得滿足。 </p><p class="font-serifTc position-absolute start-50 translate-middle-x top-30 fw-medium letter-spacing-4 text-white fs-base fs-md-2xl lh-lg w-100 d-flex justify-content-center"> 因緣受到朋友委託製作餅乾，<br> 因此挑戰了很想嘗試的鐵盒餅乾，<br> 雖是第一次嘗試，但朋友一吃驚艷，<br> 鼓勵我讓更多人也能品嚐得到。<br></p><p class="font-serifTc position-absolute start-50 translate-middle-x top-40 fw-medium letter-spacing-4 text-white fs-base fs-md-2xl lh-lg w-100 d-flex justify-content-center"> 便誤打誤撞開始生產餡這個品牌 <br> 從沒想過餅乾會成為另一份事業<br> 人生就是這麼奇妙吧！ </p><p class="font-serifTc position-absolute start-50 translate-middle-x top-60 fw-medium letter-spacing-4 text-white fs-xl fs-md-7xl lh-lg text-secondary-light w-100 d-flex justify-content-center"> 餅乾生產餡 <br> 製造最驚豔的味！<br></p>',4),X={class:"container mb-17 index-About"},G={class:"fs-6xl fs-md-7xl font-english fw-light lh-sm text-center mb-17 clip-path",ref:"splitIndexAbout"},Q=t("p",{class:"fs-2xl font-serifTc text-center mb-9"},"更多有關於我們的故事",-1),$={class:"d-flex justify-content-center"},W=t("i",{class:"bi bi-arrow-up-right fs-xs ms-2"},null,-1),tt={class:"my-17"},et={class:"container"},st={class:"mb-13"},ot={class:"fs-6xl fs-md-7xl font-english fw-light lh-sm clip-path",ref:"splitIndexProducts"},it={class:"font-serifTc fs-lg fs-md-xl fw-medium clip-path",ref:"splitIndexProductsCh"},rt={class:"row flex-column flex-md-row align-items-end align-items-md-start mb-md-0 pb-17"},lt={class:"col-12 col-md-5 d-flex gap-10 mb-10"},at=t("p",{class:"vertical-rl lines letter-spacing-4"},"招牌商品",-1),nt={class:"fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 letter-spacing-2 clip-path",ref:"myText1"},ct=t("p",{class:"mb-2"}," 餅乾生產餡的logo，你有發現裡頭藏了一個栗子嗎？ 手工一個個按壓栗子造型的巧克力栗子餅乾，夾入深色的伯爵茶甘納許內餡，除了濃郁巧克力外，增添一些佛手柑香氣，新朋友這款絕對不要錯過！ ",-1),dt=t("p",null," 另一款為小山園抹茶夾餡餅乾，綠葉造型的抹茶壓模餅乾，夾入小山園抹茶甘納許夾餡，一口咬下抹茶香味於口中跳起日本舞踊，喜歡抹茶的朋友來一塊吧！ ",-1),pt={class:"col-9 col-md-6 offset-md-1"},mt=t("div",{class:"mask-bg"},null,-1),gt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678759838512.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Wj3ExWAXlZp4063bH3EYYO4qi2a7xP9gayJTFwNkoTv1XLJEJh%2FChHMkjyIA1T0Cv%2Fc0yxun67LEZFSYzM7btpuZ2LVfw%2BgsvLqb2JrC6nPngeFZwx90coEqKE%2FvaqL3%2Bo25dPtVp1lBc9NJMwpPud1NjaZXRgpC5HlWvrHQ6zYYE%2FiRB5AQklVQltBDPzTZHdTSH7cyBHYnsu5%2FGwj6J47ThZ%2Fh%2Bm25q4y6vC%2FMFjNkUH%2BGYzMFOR5qK0flc8%2FDtUHhZYJwo7YhdCSC%2FrRy1jDLkKtcvWerl0hC0K%2FcvnhnTo1kVLyuALzxO67ghpM70RRsGkdaZL9moP3TPTZ1wA%3D%3D",alt:"伯爵巧克力夾餡餅乾"},null,-1),ht={class:"container-fluid p-0 mb-17"},ut={class:"w-80 w-md-40 mt-md-m10 mt-0"},ft=t("div",{class:"mask-bg"},null,-1),_t=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678760260375.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J0xfHnX%2FcMxXd8z3Nubhmjq6jbDnO%2FUTQ%2F%2FtMYXT1RU789510uwQVMoqt0NP1UziDDKS3YiKOlgeFDIzk0vZLJljN%2B0CwU6hdjz4kafrdwzBZ%2BYrqPkIsE4NhNOpZ5zSpC3chwgKgxz%2FhXaGCf%2BoZFCBr7X%2FO2vMIGM7%2FxLJ2XGCuZVejyDfLumZLMK4IahFWh54MuPkNK5niKN0eIwAjN6uctA1Jz01yTyb4KmtAgmj%2Bp2ImF09qSKfLErXEncv8tBXgxpVRuGJ7LyDh9DBol6RrvZSeF72XofLvEngPOltJdTVCvT3ZFNpgPd8SEvaP5rlPSog4XBSAA2E6wHQaA%3D%3D",alt:"小山園抹茶夾餡餅乾"},null,-1),vt={class:"container mb-17"},xt={class:"row flex-column flex-md-row align-items-end align-items-md-start mb-12 mb-md-0"},bt={class:"col-12 col-md-5 d-flex gap-10 mb-10"},wt=t("p",{class:"vertical-rl lines letter-spacing-4"},"季節商品",-1),yt={class:"fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 clip-path",ref:"myText2"},Tt=t("p",null," 綜合鐵盒餅乾，作為創業的起點，裝載了我們滿滿的用心，每一個時節會推出不一樣的口味，有鹹有甜，讓你的味蕾都得到滿足，因為很喜歡禮物收到花，包材也會去花市挑選適合的花材，希望妳收到餅乾時也能很開心！ ",-1),kt={class:"col-11 col-md-7 ps-12 pe-0 pe-md-3"},At=t("div",{class:"mask-bg"},null,-1),Lt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678760490256.JPG?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CHLnOCv8b0K71K1rAL%2FZAYdMZM6BafwIlky6AE6ICD%2BNWXFSZIyis8pZJdubTt%2BgbFVjpvfSo8pNRYulZbrIC3%2BahlnjmIOrBFANo%2FJXDNLZwPQ5506kxEhKQnHLNX3wmBk4U9HDaXwT9lV5a%2Bndwm5U9GgRFv6o%2FXIHsUG9UCIV%2F8TJoF1qFGimbxMa4x8HRJtlqUxSwyY1TlbagEJeGAJCpmfCg31bjmqZ9ZfMut1UTKsCyF%2Ftqnf%2B3SgEKusmjwoFp3ACTo3ImGemyv%2Bj7SZLPAr%2FRg2Hsjqt3Z9h3%2Bt%2B93lASSuhhgDwWJPZPqtcA%2FIgGmD65hbiJWa89gqHqg%3D%3D",alt:"綜合鐵盒餅乾"},null,-1),Pt={class:"container"},Ct={class:"row flex-column flex-md-row-reverse align-items-start mb-12 mb-md-0"},St={class:"col-12 col-md-5 d-flex flex-row-reverse gap-10 mb-10"},Ft=t("p",{class:"vertical-rl lines letter-spacing-4"},"特色商品",-1),It={class:"fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7 clip-path",ref:"myText3"},Bt=t("p",null," 雖然主要販售的商品餅乾，不過布丁也是我們很喜歡的品項，後來研發後也開始販售，我們的焦糖熬煮的稍苦，綜合奶香的甜味，並加入萊姆酒增添酒香，如果你也對於綿密絲滑的布丁有興趣的話，歡迎來吃看看喔！ ",-1),Dt={class:"col-11 col-md-7 pe-12"},Nt=t("div",{class:"mask-bg"},null,-1),jt=t("img",{class:"d-none d-lg-block",src:"https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678761911221.JPG?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cfU4iq0JgtoN6QYivwb7LoDaqX4n9Dk9QOEPTCJTsuotezm%2BOMxzeqwWDaupAa3PsVCR1p39VJdqM1hAp8YifA7orW4NDFqUiZGidZuu8UrxKs5Eml8QbWqjMRwoJAmhFzCw8wQzrDW%2F2k8SCVt%2BTnDz%2BZotIB5UIQhlnPuY1Q%2BkAKRdoHYCOwkvkx8AGqs6WZMuGwdajHg6jjwTj9JzSPSgVSQxeLgrqCTQBrpzOmDUGT56fOWu%2Fzlz4VPRdGHUCukBYcN2TEHwKE3mDIeUp5Fa0%2BdwLu0OnQDD9vOUaAVGRjkbMN2dxjKcvCuiXEI3Hrr0VjYZ59%2Fa4GM0sxAI4Q%3D%3D",alt:"大人味焦糖布丁"},null,-1),qt=t("div",{class:"mask-bg"},null,-1),Et=t("img",{class:"d-lg-none",src:"https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678762743183.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Kz9JxZKYDBZ%2BjNFRCxPYV8UeIskjVO9g6qn16CJZ7wxTCw8v1CSAVZb3%2F4Kta4%2B8UEY9tRX%2BFQx21MfooWlYgwCOSG24i%2FI12K5uyYXTtdPzAxnXwBba3CgQtf%2B%2FU54jCXqtYTgRutKZlNpiibLMUv7jNTIolD92UOR57Yw5I%2Fw8FamxRgCu7HoPOBDI0XcE6RXAYOSXOnLhwcXZQ94m2DZITAnpP0rMVfNBhND8d33X%2BHPrT46mUGe3Xv0QyH6C7zaPlkVlREY%2FSk0m1ecyyvD5ziuSwK8iqCuiB%2FgHEZPsAUltOTO168pD2hY%2FpxokLxAwh8S9Cq8OAprOkB8wKw%3D%3D",alt:"大人味焦糖布丁"},null,-1),Zt={class:"bg-secondary py-17"},Ht={class:"container-fluid p-0"},zt={class:"text-center pt-12 pb-10"},Mt={class:"font-english fs-5xl fs-md-7xl clip-path",ref:"splitIndexMoreProducts"},Vt={class:"font-serifTc fs-lg fs-md-xl fw-medium clip-path",ref:"splitIndexMoreProductsCh"},Ot={class:"mb-16"},Rt=["src","alt"],Jt={class:"fw-medium mb-2 font-serifTc"},Ut={class:"fs-sm fw-medium mb-2 font-serifTc text-dark text-opacity-80"},Yt={class:"font-serifTc"},Kt={class:"d-flex justify-content-center"},Xt=t("i",{class:"bi bi-arrow-up-right fs-xs ms-2"},null,-1),Gt={class:"container mb-10"},Qt={class:"d-flex justify-content-between align-items-center my-10"},$t={class:"fs-6xl fs-md-7xl font-english lh-sm clip-path",ref:"splitIndexNews"},Wt={class:"fs-lg fs-md-xl font-serifTc clip-path",ref:"splitIndexNewsCh"},te=t("i",{class:"bi bi-arrow-up-right fs-xs ms-2"},null,-1),ee={class:"mb-10"},se={class:"d-flex flex-column gap-7"},oe={class:"d-flex justify-content-between border-bottom border-dark border-opacity-50"},ie={class:"d-flex flex-column flex-md-row"},re={class:"py-7"},le={class:"fs-sm bg-secondary-dark py-2 px-3 d-inline-block mb-5 text-dark font-serifTc"},ae={class:"fs-lg fs-lg-xl fw-medium mb-3 font-serifTc"},ne={class:"text-dark text-opacity-70"},ce=t("div",{class:"d-flex align-items-end"},[t("i",{class:"bi bi-arrow-up-right fs-lg pb-2 text-dark text-opacity-70"})],-1),de={class:"d-flex justify-content-center d-md-none"},pe=t("i",{class:"bi bi-arrow-up-right fs-xs ms-2"},null,-1);function me(o,n,m,d,c,p){const h=v("LoadingComponent"),i=v("RouterLink"),u=v("swiper-slide"),f=v("swiper");return _(),x(w,null,[r(h,{isLoading:c.isLoading},null,8,["isLoading"]),t("div",z,[M,V,t("div",O,[t("div",R,[J,t("video",{onLoadedmetadata:n[0]||(n[0]=(...e)=>p.videoLoaded&&p.videoLoaded(...e)),id:"videoBg",class:"videoCanvas",poster:"",playsinline:"",autoplay:"",loop:"",muted:""},Y,32)])]),K]),t("div",X,[t("p",G," About iiin ",512),Q,t("div",$,[r(i,{to:"/about",class:"bg-secondary-light py-2 px-17 rounded-pill d-inline-block btn btn-outline-dark hover-text-primary hover-border-primary font-english"},{default:l(()=>[b(" See More "),W]),_:1})])]),t("div",tt,[t("div",et,[t("div",st,[t("p",ot," Products ",512),t("p",it," 商品一覽 ",512)]),t("div",rt,[t("div",lt,[at,t("div",null,[t("h3",nt," 夾餡系列餅乾 ",512),ct,dt])]),t("div",pt,[r(i,{to:"/product/-NP0AnAL2jwTR1ULnW_V",class:"imgHover mask"},{default:l(()=>[mt,gt]),_:1})])])]),t("div",ht,[t("div",ut,[r(i,{to:"/product/-NOhssrBueALw3krYCOv",class:"imgHover mask"},{default:l(()=>[ft,_t]),_:1})])]),t("div",null,[t("div",vt,[t("div",xt,[t("div",bt,[wt,t("div",null,[t("h3",yt," 綜合鐵盒餅乾 ",512),Tt])]),t("div",kt,[r(i,{to:"/product/-NNoPpESEU2t5wqzeHr3",class:"imgHover mask"},{default:l(()=>[At,Lt]),_:1})])])])]),t("div",Pt,[t("div",Ct,[t("div",St,[Ft,t("div",null,[t("h3",It," 大人味焦糖布丁 ",512),Bt])]),t("div",Dt,[r(i,{to:"/product/-NOcKHRyaTxdK1_ZJJHq",class:"imgHover mask"},{default:l(()=>[Nt,jt]),_:1}),r(i,{to:"/product/-NOcKHRyaTxdK1_ZJJHq",class:"imgHover mask"},{default:l(()=>[qt,Et]),_:1})])])])]),t("div",Zt,[t("div",Ht,[t("div",zt,[t("p",Mt," More Products ",512),t("p",Vt," 更多商品 ",512)]),t("div",Ot,[r(f,{"slides-per-view":2,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},"space-between":24,modules:c.modules,breakpoints:{768:{slidesPerView:2,spaceBetween:24},992:{slidesPerView:3,spaceBetween:24}},class:"swiper-index"},{default:l(()=>[(_(!0),x(w,null,k(c.productList,e=>(_(),E(u,{key:e.id},{default:l(()=>[r(i,{to:`/product/${e.id}`,class:"mb-7 imgHover"},{default:l(()=>[t("img",{src:e.imageUrl,alt:e.title},null,8,Rt)]),_:2},1032,["to"]),t("p",Jt,g(e.title),1),t("p",Ut,g(e.flavor),1),t("p",Yt,"NT$ "+g(e.price),1)]),_:2},1024))),128))]),_:1},8,["modules"])]),t("div",Kt,[r(i,{to:"/products",class:"py-2 px-17 rounded-pill d-inline-block bg-secondary btn btn-outline-dark hover-text-primary hover-border-primary font-english"},{default:l(()=>[b(" All Products "),Xt]),_:1})])])]),t("div",Gt,[t("div",Qt,[t("div",null,[t("p",$t," News ",512),t("p",Wt," 最新消息 ",512)]),r(i,{to:"/articles",class:"py-2 px-17 rounded-pill d-md-inline-block btn bg-secondary-light btn-outline-dark hover-text-primary hover-border-primary font-english d-none"},{default:l(()=>[b(" All News "),te]),_:1})]),t("div",ee,[t("ul",se,[(_(!0),x(w,null,k(c.articlesList.slice(0,3),e=>(_(),x("li",{key:e.id},[r(i,{to:`/article/${e.id}`,class:"hover-text-primary"},{default:l(()=>[t("div",oe,[t("div",ie,[t("div",re,[t("p",le,g(e.tag),1),t("p",ae,g(e.title),1),t("div",null,[t("p",ne,g(p.formatDate(e.create_at)),1)])])]),ce])]),_:2},1032,["to"])]))),128))])]),t("div",de,[r(i,{to:"/articles",class:"border border-dark py-2 px-17 rounded-pill d-inline-block btn font-english"},{default:l(()=>[b(" All News "),pe]),_:1})])])],64)}const Ee=j(H,[["render",me]]);export{Ee as default};
