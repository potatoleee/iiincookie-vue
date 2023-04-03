import{D as A,P as I}from"./PaginationComponent-3bf4f934.js";import{U as E}from"./UploadImages-02ea1607.js";import{M as C}from"./bootstrap-1e9f360c.js";import{T as f}from"./toast-1797c5ef.js";import{aN as _,aD as i,X as n,Y as e,a4 as l,bk as L,as as u,F as D,aL as M,bm as P,bd as N,b9 as q,a_ as b}from"./@vue-9b9f1f8d.js";import{_ as w}from"./index-e5d1f047.js";import"./loadingStore-e394031f.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./@popperjs-9847b28c.js";import"./sweetalert2-2726e422.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:V,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},R={props:["isNew","innerTempData"],data(){return{tempData:JSON.parse(JSON.stringify(this.innerTempData)),editProductModal:""}},methods:{confirm(){let a="post",t=`${V}/api/${y}/admin/product`;this.isNew===!1&&(a="put",t=`${V}/api/${y}/admin/product/${this.tempData.id}`),this.$http[a](t,{data:this.tempData}).then(h=>{f.fire({icon:"success",title:`${h.data.message}`}),this.editProductModal.hide(),this.$emit("update")}).catch(h=>{f.fire({icon:"error",title:`${h.response.data.message}`})})},createImage(){this.tempData.imagesUrl=[],this.tempData.imagesUrl.push("")},show(){this.editProductModal.show()},hide(){this.editProductModal.hide()}},watch:{innerTempData(){this.tempData=this.innerTempData}},components:{UploadImages:E},mounted(){this.editProductModal=new C(this.$refs.editProductModal)}},S={id:"editProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"editProductModalLabel","aria-hidden":"true",ref:"editProductModal"},F={class:"modal-dialog modal-xl"},O={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},H={id:"editProductModalLabel",class:"modal-title"},$={key:0},G={key:1},J=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),z={class:"modal-body"},X={class:"row"},Y={class:"col-sm-4"},j={class:"mb-3"},K=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Q=["src"],W=e("h3",{class:"mb-3"},"次要圖片",-1),Z={key:0},ee={class:"mb-3"},te=e("label",{for:"imageUrl"}," 圖片網址",-1),se=["onUpdate:modelValue"],oe=["src"],le={key:0},ae={key:1},ie={key:1},ne={class:"col-sm-8"},de={class:"mb-3"},re=e("label",{for:"title",class:"form-label"},"產品名稱",-1),me={class:"row"},ce={class:"mb-3 col-md-6"},pe=e("label",{for:"category",class:"form-label"},"分類",-1),ue={class:"mb-3 col-md-6"},_e=e("label",{for:"price",class:"form-label"},"單位",-1),he={class:"row"},be={class:"mb-3 col-md-6"},fe=e("label",{for:"origin_price",class:"form-label"},"原價",-1),ge={class:"mb-3 col-md-6"},ve=e("label",{for:"price",class:"form-label"},"售價",-1),De={class:"row"},Pe={class:"mb-3 col-md-12"},Ve=e("label",{for:"flavor",class:"form-label"},"口味",-1),ye={class:"mb-3"},Ue=e("label",{for:"description",class:"form-label"},"產品描述",-1),ke={class:"mb-3"},Me=e("label",{for:"content",class:"form-label"},"說明內容",-1),we={class:"mb-3"},xe={class:"form-check"},Te={class:"form-check-label",for:"is_enabled"},Ae={class:"modal-footer"},Ie=e("button",{type:"submit",class:"btn btn-primary text-light"}," 確認 ",-1);function Ee(a,t,h,x,s,d){const g=_("UploadImages"),r=_("VField"),m=_("ErrorMessage"),c=_("VForm");return i(),n("div",S,[e("div",F,[e("div",O,[e("div",B,[e("h5",H,[h.isNew?(i(),n("span",$,"新增產品")):(i(),n("span",G,"編輯產品"))]),J]),l(c,{ref:"form",onSubmit:d.confirm},{default:L(({errors:p})=>[e("div",z,[e("div",X,[e("div",Y,[l(g),e("div",j,[K,l(r,{modelValue:s.tempData.imageUrl,"onUpdate:modelValue":t[0]||(t[0]=o=>s.tempData.imageUrl=o),type:"text",name:"主要圖片",class:u(["form-control mb-2",{"is-invalid":p.主要圖片}]),rules:"required",placeholder:"請輸入圖片連結"},null,8,["modelValue","class"]),l(m,{name:"主要圖片",class:"invalid-feedback"}),e("img",{class:"img-fluid",src:s.tempData.imageUrl},null,8,Q)]),W,Array.isArray(s.tempData.imagesUrl)?(i(),n("div",Z,[(i(!0),n(D,null,M(s.tempData.imagesUrl,(o,v)=>(i(),n("div",{class:"mb-1",key:v},[e("div",ee,[te,P(e("input",{type:"text","onUpdate:modelValue":T=>s.tempData.imagesUrl[v]=T,class:"form-control",placeholder:"請輸入圖片連結"},null,8,se),[[N,s.tempData.imagesUrl[v]]])]),e("img",{class:"img-fluid",src:o,alt:""},null,8,oe)]))),128)),s.tempData.imagesUrl.length==0||s.tempData.imagesUrl[s.tempData.imagesUrl.length-1]?(i(),n("div",le,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[1]||(t[1]=o=>s.tempData.imagesUrl.push(""))}," 新增圖片2 ")])):(i(),n("div",ae,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[2]||(t[2]=o=>s.tempData.imagesUrl.pop())}," 刪除圖片 ")]))])):(i(),n("div",ie,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=(...o)=>d.createImage&&d.createImage(...o))}," 新增圖片1 ")]))]),e("div",ne,[e("div",de,[re,l(r,{id:"title",type:"text",class:u(["form-control",{"is-invalid":p.產品名稱}]),name:"產品名稱",rules:"required",placeholder:"請輸入產品名稱",modelValue:s.tempData.title,"onUpdate:modelValue":t[4]||(t[4]=o=>s.tempData.title=o)},null,8,["class","modelValue"]),l(m,{name:"產品名稱",class:"invalid-feedback"})]),e("div",me,[e("div",ce,[pe,l(r,{id:"category",type:"text",class:u(["form-control",{"is-invalid":p.分類}]),name:"分類",rules:"required",placeholder:"請輸入分類",modelValue:s.tempData.category,"onUpdate:modelValue":t[5]||(t[5]=o=>s.tempData.category=o)},null,8,["class","modelValue"]),l(m,{name:"分類",class:"invalid-feedback"})]),e("div",ue,[_e,l(r,{id:"unit",type:"text",class:u(["form-control",{"is-invalid":p.單位}]),name:"單位",rules:"required",placeholder:"請輸入單位",modelValue:s.tempData.unit,"onUpdate:modelValue":t[6]||(t[6]=o=>s.tempData.unit=o)},null,8,["class","modelValue"]),l(m,{name:"單位",class:"invalid-feedback"})])]),e("div",he,[e("div",be,[fe,l(r,{id:"origin_price",type:"number",min:"0",class:u(["form-control",{"is-invalid":p.原價}]),name:"原價",rules:"required",placeholder:"請輸入原價",modelValue:s.tempData.origin_price,"onUpdate:modelValue":t[7]||(t[7]=o=>s.tempData.origin_price=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(m,{name:"原價",class:"invalid-feedback"})]),e("div",ge,[ve,l(r,{id:"price",type:"number",min:"0",class:u(["form-control",{"is-invalid":p.售價}]),name:"售價",rules:"required",placeholder:"請輸入售價",modelValue:s.tempData.price,"onUpdate:modelValue":t[8]||(t[8]=o=>s.tempData.price=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(m,{name:"售價",class:"invalid-feedback"})])]),e("div",De,[e("div",Pe,[Ve,l(r,{id:"flavor",type:"text",class:u(["form-control",{"is-invalid":p.口味}]),name:"口味",rules:"required",placeholder:"請輸入口味",modelValue:s.tempData.flavor,"onUpdate:modelValue":t[9]||(t[9]=o=>s.tempData.flavor=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(m,{name:"口味",class:"invalid-feedback"})])]),e("div",ye,[Ue,l(r,{id:"description",type:"text",class:u(["form-control",{"is-invalid":p.產品描述}]),name:"產品描述",rules:"required",as:"textarea",placeholder:"請輸入產品描述",modelValue:s.tempData.description,"onUpdate:modelValue":t[10]||(t[10]=o=>s.tempData.description=o)},null,8,["class","modelValue"]),l(m,{name:"產品描述",class:"invalid-feedback"})]),e("div",ke,[Me,l(r,{id:"content",type:"text",class:u(["form-control",{"is-invalid":p.說明內容}]),name:"說明內容",rules:"required",as:"textarea",placeholder:"請輸入說明內容",modelValue:s.tempData.content,"onUpdate:modelValue":t[11]||(t[11]=o=>s.tempData.content=o)},null,8,["class","modelValue"]),l(m,{name:"說明內容",class:"invalid-feedback"})]),e("div",we,[e("div",xe,[P(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=o=>s.tempData.is_enabled=o),"true-value":1,"false-value":0},null,512),[[q,s.tempData.is_enabled]]),e("label",Te,b(s.tempData.is_enabled?"啟用":"不啟用"),1)])])])])]),e("div",Ae,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[13]||(t[13]=(...o)=>d.hide&&d.hide(...o))}," 取消 "),Ie])]),_:1},8,["onSubmit"])])])],512)}const Ce=w(R,[["render",Ee]]),{VITE_APP_URL:U,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},Le={data(){return{products:[],pagination:{},isNew:!1,tempData:{imagesUrl:[],flavor:"",is_enabled:1}}},methods:{getProductList(a=1){this.$http.get(`${U}/api/${k}/admin/products/?page=${a}`).then(t=>{this.pagination=t.data.pagination,this.products=t.data.products}).catch(t=>{f.fire({icon:"error",title:`${t.response.data.message}`})})},openModal(a,t){a==="new"?(this.tempData={imagesUrl:[],is_enabled:1},this.$refs.editProductModal.show(),this.isNew=!0):a==="edit"?(this.$refs.editProductModal.show(),this.tempData={...t},this.isNew=!1):a==="delete"&&(this.$refs.deleteModal.show(),this.tempData={...t},this.isNew=!1)},deleteProduct(){this.$http.delete(`${U}/api/${k}/admin/product/${this.tempData.id}`).then(a=>{f.fire({icon:"success",title:`${a.data.message}`}),this.$refs.deleteModal.hide(),this.getProductList()}).catch(a=>{f.fire({icon:"error",title:`${a.response.data.message}`})})}},components:{ProductModal:Ce,DeleteModal:A,PaginationComponent:I},mounted(){this.getProductList()}},Ne=e("h1",{class:"fs-2xl border-bottom border-secondary pb-2"},"產品管理",-1),qe={class:"text-end mt-4"},Re={class:"table mt-4"},Se=e("thead",null,[e("tr",null,[e("th",{width:"120"},"分類"),e("th",null,"產品名稱"),e("th",{width:"120"},"原價"),e("th",{width:"120"},"售價"),e("th",{width:"100"},"是否啟用"),e("th",{width:"120"},"編輯")])],-1),Fe={key:0,class:"text-success"},Oe={key:1},Be={class:"btn-group"},He=["onClick"],$e=["onClick"];function Ge(a,t,h,x,s,d){const g=_("PaginationComponent"),r=_("ProductModal"),m=_("DeleteModal");return i(),n(D,null,[Ne,e("div",null,[e("div",qe,[e("button",{type:"button",class:"btn btn-primary text-light",onClick:t[0]||(t[0]=c=>d.openModal("new",a.product))}," 建立新產品 ")]),e("table",Re,[Se,e("tbody",null,[(i(!0),n(D,null,M(s.products,c=>(i(),n("tr",{key:c.id},[e("td",null,b(c.category),1),e("td",null,b(c.title),1),e("td",null,"NT$"+b(c.origin_price),1),e("td",null,"NT$"+b(c.price),1),e("td",null,[c.is_enabled?(i(),n("span",Fe,"啟用")):(i(),n("span",Oe,"未啟用"))]),e("td",null,[e("div",Be,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:p=>d.openModal("edit",c)}," 編輯 ",8,He),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p=>d.openModal("delete",c)}," 刪除 ",8,$e)])])]))),128))])]),l(g,{"page-in":s.pagination,onGetPages:d.getProductList},null,8,["page-in","onGetPages"])]),l(r,{"inner-temp-data":s.tempData,onUpdate:d.getProductList,"is-new":s.isNew,ref:"editProductModal"},null,8,["inner-temp-data","onUpdate","is-new"]),l(m,{deleteItem:s.tempData,deleteModalTitle:"產品",onDelItem:d.deleteProduct,ref:"deleteModal"},null,8,["deleteItem","onDelItem"])],64)}const ut=w(Le,[["render",Ge]]);export{ut as default};
