import{c as p}from"./cartStore-f3f7e945.js";import{f as r}from"./favoriteStore-61913d83.js";import{l as d}from"./loadingStore-76618adb.js";import{g as s,S as m}from"./gsap-8fc7659c.js";import{m as l,a as c}from"./pinia-a2ec2acd.js";import{_ as h}from"./index-13dcb442.js";import{aN as u,aD as f,X as v,a4 as L,F as y,a2 as P}from"./@vue-9b9f1f8d.js";import"./axios-bff3f665.js";import"./toast-ba4829f6.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-feb1a2d6.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */s.registerPlugin(s,m);const{VITE_APP_URL:e,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{productList:[],page:{},selectCategoryList:[],selectCategory:"",nowCategory:"",allProducts:[]}},methods:{getProductList(t=1){this.isLoading=!0,this.$http.get(`${e}/api/${i}/products/?page=${t}`).then(o=>{this.productList=o.data.products,this.page=o.data.pagination,console.log(this.page),console.log(o.data)}).catch(o=>{alert(o.data.message)}).finally(()=>{this.isLoading=!1})},getAllProducts(){this.isLoading=!0,this.$http.get(`${e}/api/${i}/products/all`).then(t=>{console.log(t.data.products),this.allProducts=t.data.products}).catch(t=>{alert(t.data.message)}).finally(()=>{this.isLoading=!1})},getCategory(t,o=1){this.isLoading=!0,this.$http.get(`${e}/api/${i}/products?page=${o}&category=${t}`).then(a=>{console.log("相似類別全部",a.data.products),this.selectCategoryList=a.data.products,this.page=a.data.pagination,this.nowCategory=this.page.category,console.log(this.nowCategory),console.log(this.page),console.log(this.page.category),console.log(a),this.$router.push(`./products?page=${o}&category=${t}`)}).catch(a=>{alert(a.data.message)}).finally(()=>{this.isLoading=!1})},...l(p,["addToCart"]),...l(r,["removeFavorite","toggleFavorite","isFavorite"])},computed:{...c(d,["isLoading","loadingItem"]),...c(r,["myFavoriteList"]),filterProduct(){return this.productList.filter(t=>t.title.match(this.search))},categoryProducts(){return this.allProducts.filter(t=>t.category.match(this.selectCategory))}},mounted(){s.from(".mask-bg",{duration:1,width:"100%",ease:"power3.inOut",delay:3})}},V=P('<div class="title my-10 my-lg-15"><span class="title-sub fs-10xl fw-light font-english text-secondary text-opacity-50 d-block text-end">About iiin </span><h1 class="title-main font-serifTc fw-black fs-xl fs-lg-3xl">關於我們</h1></div><div class="container mb-17"><div class="row justify-content-end mb-12 mb-md-0"><div class="col-12 col-lg-5 d-flex flex-row gap-10 mb-10"><p class="vertical-rl line letter-spacing-4">品牌由來</p><div><h3 class="fs-2xl fs-lg-3xl font-serifTc py-5 py-lg-7"> 品牌的小故事 </h3><p> 製造夾餡餅乾的過程一個步驟接著一個步驟，很像製造的生產線，藉此取了諧音＿餅乾生產餡。並在Logo右下角放上招牌栗子造型～ 品牌英文名稱iiicookie的小巧思：iiin跟男友兩位名字都有穎，以英文諧音in為發想，覺得三個i有拉長音可愛的感覺，所以唸法為「穎～穎～cookie 」。 </p></div></div><div class="col-11 col-lg-7 ps-11"><div class="mask"><div class="mask-bg"></div><img src="https://storage.googleapis.com/vue-course-api.appspot.com/week3dean/1678806137926.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=bLNjkCW8gCTf9YLVS2b3S6pLJwRhGw4DdjtnKZwSqApzsghT%2Bl3kj%2BVIN6LELfhqOSGh3GV3birPpVGVA5EF5%2BeqORIPt2LPhAXYZvtDFzLWYr%2BLefglqk1k%2F%2FRn64TNXbcV4PWr%2BF%2Bk7LW%2BFWXK2Vhb6XPZw0SrlJZSUNwbkZjuBc7%2FgmOMeFlW0i6lgNT2hagkJ7DuN2ZUttn5h3%2B%2BEh16r6SSKOl8VVfuPKgrNVQvE2euuCEymIVLqaRWs2T7oGk1uWl1%2FW5Zqvy%2FOGed7QJVlmEHwD7gTiUmDK7sF4E%2FeGMOX126VJc1mpBWUkX%2FczDH2fHtXRGLBX%2FhJU%2B8IA%3D%3D" alt=""></div></div></div></div><div class="container py-17"><p class="font-english fs-3xl fs-lg-5xl text-center">Contact</p><a class="fs-xl fs-lg-5xl text-center font-serifTc" href="https://www.instagram.com/iiin.cookies/" target="_blank"> 聯絡我們請往 instagram </a></div>',3);function w(t,o,a,F,b,x){const n=u("VueLoading");return f(),v(y,null,[L(n,{active:t.isLoading,"onUpdate:active":o[0]||(o[0]=g=>t.isLoading=g)},null,8,["active"]),V],64)}const q=h(k,[["render",w]]);export{q as default};