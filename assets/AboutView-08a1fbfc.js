import{c as g}from"./cartStore-062fedc0.js";import{f as p}from"./favoriteStore-8d4f6693.js";import{g as s,S as d}from"./gsap-8fc7659c.js";import{S as c}from"./split-type-cdcb87fd.js";import{m as n,a as h}from"./pinia-a2ec2acd.js";import{_ as m}from"./index-93eedd4e.js";import{aD as u,X as f,Y as a,F as y,a2 as v}from"./@vue-9b9f1f8d.js";import"./axios-bff3f665.js";import"./toast-1797c5ef.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./loadingStore-76618adb.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-feb1a2d6.js";import"./aos-dcf01651.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */s.registerPlugin(c);const{VITE_APP_URL:r,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{productList:[],page:{},selectCategoryList:[],selectCategory:"",nowCategory:"",allProducts:[]}},methods:{getProductList(t=1){this.isLoading=!0,this.$http.get(`${r}/api/${l}/products/?page=${t}`).then(e=>{this.productList=e.data.products,this.page=e.data.pagination,console.log(this.page),console.log(e.data)}).catch(e=>{alert(e.data.message)}).finally(()=>{this.isLoading=!1})},getAllProducts(){this.isLoading=!0,this.$http.get(`${r}/api/${l}/products/all`).then(t=>{console.log(t.data.products),this.allProducts=t.data.products}).catch(t=>{alert(t.data.message)}).finally(()=>{this.isLoading=!1})},getCategory(t,e=1){this.isLoading=!0,this.$http.get(`${r}/api/${l}/products?page=${e}&category=${t}`).then(o=>{console.log("相似類別全部",o.data.products),this.selectCategoryList=o.data.products,this.page=o.data.pagination,this.nowCategory=this.page.category,console.log(this.nowCategory),console.log(this.page),console.log(this.page.category),console.log(o),this.$router.push(`./products?page=${e}&category=${t}`)}).catch(o=>{alert(o.data.message)}).finally(()=>{this.isLoading=!1})},...n(g,["addToCart"]),...n(p,["removeFavorite","toggleFavorite","isFavorite"])},computed:{...h(p,["myFavoriteList"]),filterProduct(){return this.productList.filter(t=>t.title.match(this.search))},categoryProducts(){return this.allProducts.filter(t=>t.category.match(this.selectCategory))}},mounted(){const t=this.$refs.splitAbout,e=this.$refs.splitAboutCh;new c(t),new c(e),e.querySelectorAll(".line").forEach(o=>{o.style.textAlign="end"}),this.$nextTick(()=>{s.fromTo(e.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1.5,duration:.2}),s.fromTo(t.querySelectorAll(".char"),{y:0,opacity:0},{y:0,x:0,opacity:1,stagger:.05,delay:1.5,duration:.2}),document.querySelectorAll(".mask-bg").forEach(i=>{s.to(i,{scrollTrigger:{trigger:i,start:"top bottom",refreshPositions:!0},duration:1,width:"0%",ease:"power3.inOut"})}),s.to(".mask-bg",{duration:1,width:"0%",ease:"power3.inOut",delay:2})})},updated(){d.refresh()}},L={class:"title my-10 my-lg-15"},b={class:"title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end",ref:"splitAbout"},A={class:"title-main font-serifTc fw-black fs-xl fs-lg-3xl",ref:"splitAboutCh"},_=v('<div class="container mb-17"><div class="row justify-content-end mb-12 mb-md-0"><div class="col-12 col-lg-5 d-flex flex-row gap-10 mb-10"><p class="vertical-rl lines letter-spacing-4">品牌由來</p><div><h3 class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7"> 品牌的小故事 </h3><p> 製造夾餡餅乾的過程一個步驟接著一個步驟，很像製造的生產線，藉此取了諧音＿餅乾生產餡。並在Logo右下角放上招牌栗子造型～ 品牌英文名稱iiicookie的小巧思：iiin跟男友兩位名字都有穎，以英文諧音in為發想，覺得三個i有拉長音可愛的感覺，所以唸法為「穎～穎～cookie 」。 </p></div></div><div class="col-11 col-lg-7 ps-11"><div class="mask"><div class="mask-bg"></div><img src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678806137926.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=bLNjkCW8gCTf9YLVS2b3S6pLJwRhGw4DdjtnKZwSqApzsghT%2Bl3kj%2BVIN6LELfhqOSGh3GV3birPpVGVA5EF5%2BeqORIPt2LPhAXYZvtDFzLWYr%2BLefglqk1k%2F%2FRn64TNXbcV4PWr%2BF%2Bk7LW%2BFWXK2Vhb6XPZw0SrlJZSUNwbkZjuBc7%2FgmOMeFlW0i6lgNT2hagkJ7DuN2ZUttn5h3%2B%2BEh16r6SSKOl8VVfuPKgrNVQvE2euuCEymIVLqaRWs2T7oGk1uWl1%2FW5Zqvy%2FOGed7QJVlmEHwD7gTiUmDK7sF4E%2FeGMOX126VJc1mpBWUkX%2FczDH2fHtXRGLBX%2FhJU%2B8IA%3D%3D" alt=""></div></div></div></div><div class="container py-17"><p class="font-english fs-3xl fs-lg-5xl text-center">Contact</p><a class="fs-xl fs-lg-5xl text-center font-serifTc" href="https://www.instagram.com/iiin.cookies/" target="_blank"> 聯絡我們請往 instagram </a></div>',2);function P(t,e,o,i,w,x){return u(),f(y,null,[a("div",L,[a("span",b,"About iiin ",512),a("h1",A," 關於我們 ",512)]),_],64)}const z=m(k,[["render",P]]);export{z as default};
