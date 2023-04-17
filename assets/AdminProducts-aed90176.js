import{D as L,P as A}from"./PaginationComponent-69919fdc.js";import{U as I}from"./UploadImages-0a548229.js";import{M as E}from"./bootstrap-1e9f360c.js";import{T as b}from"./toast-94376381.js";import{aN as u,aD as n,X as d,Y as e,a4 as l,bk as C,as as p,F as D,aL as M,bm as P,bd as N,b9 as q,a_ as h}from"./@vue-9b9f1f8d.js";import{_ as w}from"./index-43ae0ebb.js";import"./@popperjs-9847b28c.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-fe912644.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:V,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},R={props:["isNew","innerTempData"],data(){return{tempData:JSON.parse(JSON.stringify(this.innerTempData)),editProductModal:""}},methods:{confirm(){let a="post",t=`${V}/api/${y}/admin/product`;this.isNew===!1&&(a="put",t=`${V}/api/${y}/admin/product/${this.tempData.id}`),this.$http[a](t,{data:this.tempData}).then(_=>{b.fire({icon:"success",title:`${_.data.message}`}),this.editProductModal.hide(),this.$emit("update")}).catch(_=>{b.fire({icon:"error",title:`${_.response.data.message}`})})},createImage(){this.tempData.imagesUrl=[],this.tempData.imagesUrl.push("")},show(){this.editProductModal.show()},hide(){this.editProductModal.hide()}},watch:{innerTempData(){this.tempData=this.innerTempData}},components:{UploadImages:I},mounted(){this.editProductModal=new E(this.$refs.editProductModal)}},S={id:"editProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"editProductModalLabel","aria-hidden":"true",ref:"editProductModal"},F={class:"modal-dialog modal-xl"},O={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},H={id:"editProductModalLabel",class:"modal-title"},G={key:0},J={key:1},z=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},$={class:"col-sm-4"},j={class:"mb-3"},K=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Q=["src","alt"],W=e("h3",{class:"mb-3"},"次要圖片",-1),Z={key:0},ee={class:"mb-3"},te=e("label",{for:"imageUrl"}," 圖片網址",-1),se=["onUpdate:modelValue"],oe=["src","alt"],le={key:0},ie={key:1},ae={key:1},ne={class:"col-sm-8"},de={class:"mb-3"},re=e("label",{for:"title",class:"form-label"},"產品名稱",-1),me={class:"row"},ce={class:"mb-3 col-md-6"},pe=e("label",{for:"category",class:"form-label"},"分類",-1),ue={class:"mb-3 col-md-6"},_e=e("label",{for:"price",class:"form-label"},"單位",-1),he={class:"row"},be={class:"mb-3 col-md-6"},fe=e("label",{for:"origin_price",class:"form-label"},"原價",-1),ge={class:"mb-3 col-md-6"},ve=e("label",{for:"price",class:"form-label"},"售價",-1),De={class:"row"},Pe={class:"mb-3 col-md-12"},Ve=e("label",{for:"flavor",class:"form-label"},"口味",-1),ye={class:"mb-3"},Ue=e("label",{for:"description",class:"form-label"},"產品描述",-1),ke={class:"mb-3"},Me=e("label",{for:"content",class:"form-label"},"說明內容",-1),we={class:"mb-3"},xe={class:"form-check"},Te={class:"form-check-label",for:"is_enabled"},Le={class:"modal-footer"},Ae=e("button",{type:"submit",class:"btn btn-primary text-light"}," 確認 ",-1);function Ie(a,t,_,x,s,r){const f=u("UploadImages"),m=u("VField"),c=u("ErrorMessage"),g=u("VForm");return n(),d("div",S,[e("div",F,[e("div",O,[e("div",B,[e("h5",H,[_.isNew?(n(),d("span",G,"新增產品")):(n(),d("span",J,"編輯產品"))]),z]),l(g,{ref:"form",onSubmit:r.confirm},{default:C(({errors:i})=>[e("div",X,[e("div",Y,[e("div",$,[l(f),e("div",j,[K,l(m,{modelValue:s.tempData.imageUrl,"onUpdate:modelValue":t[0]||(t[0]=o=>s.tempData.imageUrl=o),type:"text",name:"主要圖片",class:p(["form-control mb-2",{"is-invalid":i.主要圖片}]),rules:"required",placeholder:"請輸入圖片連結"},null,8,["modelValue","class"]),l(c,{name:"主要圖片",class:"invalid-feedback"}),e("img",{class:"img-fluid",src:s.tempData.imageUrl,alt:s.tempData.title},null,8,Q)]),W,Array.isArray(s.tempData.imagesUrl)?(n(),d("div",Z,[(n(!0),d(D,null,M(s.tempData.imagesUrl,(o,v)=>(n(),d("div",{class:"mb-1",key:v},[e("div",ee,[te,P(e("input",{type:"text","onUpdate:modelValue":T=>s.tempData.imagesUrl[v]=T,class:"form-control",placeholder:"請輸入圖片連結"},null,8,se),[[N,s.tempData.imagesUrl[v]]])]),e("img",{class:"img-fluid",src:o,alt:s.tempData.title},null,8,oe)]))),128)),s.tempData.imagesUrl.length==0||s.tempData.imagesUrl[s.tempData.imagesUrl.length-1]?(n(),d("div",le,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[1]||(t[1]=o=>s.tempData.imagesUrl.push(""))}," 新增圖片2 ")])):(n(),d("div",ie,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[2]||(t[2]=o=>s.tempData.imagesUrl.pop())}," 刪除圖片 ")]))])):(n(),d("div",ae,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=(...o)=>r.createImage&&r.createImage(...o))}," 新增圖片1 ")]))]),e("div",ne,[e("div",de,[re,l(m,{id:"title",type:"text",class:p(["form-control",{"is-invalid":i.產品名稱}]),name:"產品名稱",rules:"required",placeholder:"請輸入產品名稱",modelValue:s.tempData.title,"onUpdate:modelValue":t[4]||(t[4]=o=>s.tempData.title=o)},null,8,["class","modelValue"]),l(c,{name:"產品名稱",class:"invalid-feedback"})]),e("div",me,[e("div",ce,[pe,l(m,{id:"category",type:"text",class:p(["form-control",{"is-invalid":i.分類}]),name:"分類",rules:"required",placeholder:"請輸入分類",modelValue:s.tempData.category,"onUpdate:modelValue":t[5]||(t[5]=o=>s.tempData.category=o)},null,8,["class","modelValue"]),l(c,{name:"分類",class:"invalid-feedback"})]),e("div",ue,[_e,l(m,{id:"unit",type:"text",class:p(["form-control",{"is-invalid":i.單位}]),name:"單位",rules:"required",placeholder:"請輸入單位",modelValue:s.tempData.unit,"onUpdate:modelValue":t[6]||(t[6]=o=>s.tempData.unit=o)},null,8,["class","modelValue"]),l(c,{name:"單位",class:"invalid-feedback"})])]),e("div",he,[e("div",be,[fe,l(m,{id:"origin_price",type:"number",min:"0",class:p(["form-control",{"is-invalid":i.原價}]),name:"原價",rules:"required",placeholder:"請輸入原價",modelValue:s.tempData.origin_price,"onUpdate:modelValue":t[7]||(t[7]=o=>s.tempData.origin_price=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(c,{name:"原價",class:"invalid-feedback"})]),e("div",ge,[ve,l(m,{id:"price",type:"number",min:"0",class:p(["form-control",{"is-invalid":i.售價}]),name:"售價",rules:"required",placeholder:"請輸入售價",modelValue:s.tempData.price,"onUpdate:modelValue":t[8]||(t[8]=o=>s.tempData.price=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(c,{name:"售價",class:"invalid-feedback"})])]),e("div",De,[e("div",Pe,[Ve,l(m,{id:"flavor",type:"text",class:p(["form-control",{"is-invalid":i.口味}]),name:"口味",rules:"required",placeholder:"請輸入口味",modelValue:s.tempData.flavor,"onUpdate:modelValue":t[9]||(t[9]=o=>s.tempData.flavor=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),l(c,{name:"口味",class:"invalid-feedback"})])]),e("div",ye,[Ue,l(m,{id:"description",type:"text",class:p(["form-control",{"is-invalid":i.產品描述}]),name:"產品描述",rules:"required",as:"textarea",placeholder:"請輸入產品描述",modelValue:s.tempData.description,"onUpdate:modelValue":t[10]||(t[10]=o=>s.tempData.description=o)},null,8,["class","modelValue"]),l(c,{name:"產品描述",class:"invalid-feedback"})]),e("div",ke,[Me,l(m,{id:"content",type:"text",class:p(["form-control",{"is-invalid":i.說明內容}]),name:"說明內容",rules:"required",as:"textarea",placeholder:"請輸入說明內容",modelValue:s.tempData.content,"onUpdate:modelValue":t[11]||(t[11]=o=>s.tempData.content=o)},null,8,["class","modelValue"]),l(c,{name:"說明內容",class:"invalid-feedback"})]),e("div",we,[e("div",xe,[P(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=o=>s.tempData.is_enabled=o),"true-value":1,"false-value":0},null,512),[[q,s.tempData.is_enabled]]),e("label",Te,h(s.tempData.is_enabled?"啟用":"不啟用"),1)])])])])]),e("div",Le,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[13]||(t[13]=(...o)=>r.hide&&r.hide(...o))}," 取消 "),Ae])]),_:1},8,["onSubmit"])])])],512)}const Ee=w(R,[["render",Ie]]),{VITE_APP_URL:U,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},Ce={data(){return{products:[],pagination:{},isNew:!1,tempData:{imagesUrl:[],flavor:"",is_enabled:1},isLoading:!1}},methods:{getProductList(a=1){this.isLoading=!0,this.$http.get(`${U}/api/${k}/admin/products/?page=${a}`).then(t=>{this.isLoading=!1,this.pagination=t.data.pagination,this.products=t.data.products}).catch(t=>{b.fire({icon:"error",title:`${t.response.data.message}`})})},openModal(a,t){a==="new"?(this.tempData={imagesUrl:[],is_enabled:1},this.$refs.editProductModal.show(),this.isNew=!0):a==="edit"?(this.$refs.editProductModal.show(),this.tempData={...t},this.isNew=!1):a==="delete"&&(this.$refs.deleteModal.show(),this.tempData={...t},this.isNew=!1)},deleteProduct(){this.$http.delete(`${U}/api/${k}/admin/product/${this.tempData.id}`).then(a=>{b.fire({icon:"success",title:`${a.data.message}`}),this.$refs.deleteModal.hide(),this.getProductList()}).catch(a=>{b.fire({icon:"error",title:`${a.response.data.message}`})})}},components:{ProductModal:Ee,DeleteModal:L,PaginationComponent:A},mounted(){this.getProductList()}},Ne=e("h1",{class:"fs-2xl border-bottom border-secondary pb-2"},"產品管理",-1),qe={class:"text-end mt-4"},Re={class:"table mt-4"},Se=e("thead",null,[e("tr",null,[e("th",{width:"120"},"分類"),e("th",null,"產品名稱"),e("th",{width:"120"},"原價"),e("th",{width:"120"},"售價"),e("th",{width:"100"},"是否啟用"),e("th",{width:"120"},"編輯")])],-1),Fe={key:0,class:"text-success"},Oe={key:1},Be={class:"btn-group"},He=["onClick"],Ge=["onClick"];function Je(a,t,_,x,s,r){const f=u("VueLoading"),m=u("PaginationComponent"),c=u("ProductModal"),g=u("DeleteModal");return n(),d(D,null,[l(f,{active:s.isLoading,"onUpdate:active":t[0]||(t[0]=i=>s.isLoading=i)},null,8,["active"]),Ne,e("div",null,[e("div",qe,[e("button",{type:"button",class:"btn btn-primary text-light",onClick:t[1]||(t[1]=i=>r.openModal("new",a.product))}," 建立新產品 ")]),e("table",Re,[Se,e("tbody",null,[(n(!0),d(D,null,M(s.products,i=>(n(),d("tr",{key:i.id},[e("td",null,h(i.category),1),e("td",null,h(i.title),1),e("td",null,"NT$"+h(i.origin_price),1),e("td",null,"NT$"+h(i.price),1),e("td",null,[i.is_enabled?(n(),d("span",Fe,"啟用")):(n(),d("span",Oe,"未啟用"))]),e("td",null,[e("div",Be,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:o=>r.openModal("edit",i)}," 編輯 ",8,He),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>r.openModal("delete",i)}," 刪除 ",8,Ge)])])]))),128))])]),l(m,{"page-in":s.pagination,onGetPages:r.getProductList},null,8,["page-in","onGetPages"])]),l(c,{"inner-temp-data":s.tempData,onUpdate:r.getProductList,"is-new":s.isNew,ref:"editProductModal"},null,8,["inner-temp-data","onUpdate","is-new"]),l(g,{deleteItem:s.tempData,deleteModalTitle:"產品",onDelItem:r.deleteProduct,ref:"deleteModal"},null,8,["deleteItem","onDelItem"])],64)}const ct=w(Ce,[["render",Je]]);export{ct as default};