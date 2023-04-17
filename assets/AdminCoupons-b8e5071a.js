import{M as y}from"./bootstrap-1e9f360c.js";import{T as h}from"./toast-94376381.js";import{aN as p,aD as a,X as d,Y as e,a4 as l,bk as T,as as f,bm as C,bd as L,b9 as x,a_ as r,F as g,aL as E}from"./@vue-9b9f1f8d.js";import{_ as V}from"./index-43ae0ebb.js";import{D as $,P as A}from"./PaginationComponent-69919fdc.js";import"./@popperjs-9847b28c.js";import"./sweetalert2-761b07dd.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-fe912644.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:v,VITE_APP_PATH:w}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},I={props:["isNew","innerTempCoupon"],data(){return{tempCoupon:{},couponsModal:"",due_date:""}},methods:{confirm(){let s="post",o=`${v}/api/${w}/admin/coupon`;this.isNew===!1&&(s="put",o=`${v}/api/${w}/admin/coupon/${this.tempCoupon.id}`),this.$http[s](o,{data:this.tempCoupon}).then(c=>{h.fire({icon:"success",title:`${c.data.message}`}),this.couponsModal.hide(),this.$emit("update")}).catch(c=>{h.fire({icon:"error",title:`${c.response.data.message}`})})},show(){this.couponsModal.show()},hide(){this.couponsModal.hide()}},computed:{minDate(){return new Date().toISOString().substr(0,10)}},watch:{innerTempCoupon(){this.tempCoupon=this.innerTempCoupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");this.due_date=s[0]},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mounted(){this.couponsModal=new y(this.$refs.couponsModal)}},U={id:"couponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponsModalLabel","aria-hidden":"true",ref:"couponsModal"},N={class:"modal-dialog"},S={class:"modal-content border-0"},R={class:"modal-header bg-dark text-white"},F={id:"couponsModalLabel",class:"modal-title"},O={key:0},B={key:1},H=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},G={class:"row"},z={class:"mb-3 col-12"},X=e("label",{for:"coupon_title",class:"form-label"},"優惠券名稱",-1),Y={class:"row"},j={class:"mb-3 col-12"},J=e("label",{for:"coupon_code",class:"form-label"},"優惠券代碼",-1),K={class:"row"},Q={class:"mb-3 col-12"},W=e("label",{for:"coupon_percent",class:"form-label"},"優惠折扣",-1),Z={class:"row"},ee={class:"mb-3 col-12"},oe=e("label",{for:"coupon_endDate",class:"form-label"},"優惠券到期日",-1),te=["min"],se={class:"form-check"},ne={class:"form-check-label",for:"is_enabled"},ie={class:"modal-footer"},le={type:"submit",class:"btn btn-primary text-light"};function ae(s,o,c,D,n,i){const u=p("VField"),m=p("ErrorMessage"),b=p("VForm");return a(),d("div",U,[e("div",N,[e("div",S,[e("div",R,[e("h5",F,[c.isNew?(a(),d("span",O,"新增優惠券")):(a(),d("span",B,"編輯優惠券"))]),H]),l(b,{ref:"form",onSubmit:i.confirm},{default:T(({errors:_})=>[e("div",q,[e("div",G,[e("div",z,[X,l(u,{id:"coupon_title",name:"優惠券名稱",type:"text",class:f(["form-control",{"is-invalid":_.優惠券名稱}]),placeholder:"請輸入優惠券名稱",modelValue:n.tempCoupon.title,"onUpdate:modelValue":o[0]||(o[0]=t=>n.tempCoupon.title=t),rules:"required"},null,8,["class","modelValue"]),l(m,{name:"優惠券名稱",class:"invalid-feedback"})])]),e("div",Y,[e("div",j,[J,l(u,{id:"coupon_code",name:"優惠券代碼",type:"text",class:f(["form-control",{"is-invalid":_.優惠券代碼}]),rules:"required",placeholder:"請輸入優惠券代碼",modelValue:n.tempCoupon.code,"onUpdate:modelValue":o[1]||(o[1]=t=>n.tempCoupon.code=t)},null,8,["class","modelValue"]),l(m,{name:"優惠券代碼",class:"invalid-feedback"})])]),e("div",K,[e("div",Q,[W,l(u,{id:"coupon_percent",name:"優惠折扣",type:"number",class:f(["form-control",{"is-invalid":_.優惠折扣}]),rules:"required|between:1,100",placeholder:"請輸入優惠百分比 (60 = 6折)",modelValue:n.tempCoupon.percent,"onUpdate:modelValue":o[2]||(o[2]=t=>n.tempCoupon.percent=t),modelModifiers:{number:!0},min:"1",max:"100"},null,8,["class","modelValue"]),l(m,{name:"優惠折扣",class:"invalid-feedback"})])]),e("div",Z,[e("div",ee,[oe,C(e("input",{id:"coupon_endDate",type:"date",class:"form-control",placeholder:"請選擇優惠券到期日","onUpdate:modelValue":o[3]||(o[3]=t=>n.due_date=t),min:i.minDate},null,8,te),[[L,n.due_date]])])]),e("div",se,[C(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[4]||(o[4]=t=>n.tempCoupon.is_enabled=t),"true-value":1,"false-value":0},null,512),[[x,n.tempCoupon.is_enabled]]),e("label",ne,r(n.tempCoupon.is_enabled?"啟用":"不啟用"),1)])]),e("div",ie,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[5]||(o[5]=(...t)=>i.hide&&i.hide(...t))}," 取消 "),e("button",le,r(this.isNew?"新增優惠券":"更新優惠券"),1)])]),_:1},8,["onSubmit"])])])],512)}const de=V(I,[["render",ae]]),{VITE_APP_URL:M,VITE_APP_PATH:P}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},pe={data(){return{coupons:[],pagination:{},isNew:!1,tempCoupon:{title:"",is_enabled:1,percent:100,code:""},isLoading:!1}},methods:{openModal(s,o){s==="new"?(this.tempCoupon={due_date:new Date().getTime()/1e3,is_enabled:1},this.$refs.couponsModal.show(),this.isNew=!0):s==="edit"?(this.$refs.couponsModal.show(),this.tempCoupon={...o},this.isNew=!1):s==="delete"&&(this.$refs.deleteModal.show(),this.tempCoupon={...o},this.isNew=!1)},getCouponList(s=1){this.isLoading=!0,this.$http.get(`${M}/api/${P}/admin/coupons/?page=${s}`).then(o=>{this.isLoading=!1,this.pagination=o.data.pagination,this.coupons=o.data.coupons}).catch(o=>{h.fire({icon:"error",title:`${o.response.data.message}`})})},formatDate(s){return new Date(s*1e3).toLocaleDateString()},deleteCoupon(){this.$http.delete(`${M}/api/${P}/admin/coupon/${this.tempCoupon.id}`).then(s=>{h.fire({icon:"success",title:`${s.data.message}`}),this.$refs.deleteModal.hide(),this.getCouponList()}).catch(s=>{h.fire({icon:"error",title:`${s.response.data.message}`})})}},mounted(){this.getCouponList()},components:{CouponsModal:de,DeleteModal:$,PaginationComponent:A}},ce=e("h1",{class:"fs-2xl border-bottom border-secondary pb-2"},"優惠券管理",-1),re={class:"text-end mt-4"},ue={class:"table mt-4"},me=e("thead",null,[e("tr",null,[e("th",{width:"120"},"優惠券標題"),e("th",{width:"120"},"優惠碼"),e("th",{width:"120"},"折扣百分比"),e("th",{width:"120"},"到期日"),e("th",{width:"100"},"啟用狀態"),e("th",{width:"120"},"編輯")])],-1),_e={key:0,class:"text-success"},he={key:1},be={class:"btn-group"},fe=["onClick"],Ce=["onClick"];function ge(s,o,c,D,n,i){const u=p("VueLoading"),m=p("PaginationComponent"),b=p("CouponsModal"),_=p("DeleteModal");return a(),d(g,null,[l(u,{active:n.isLoading,"onUpdate:active":o[0]||(o[0]=t=>n.isLoading=t)},null,8,["active"]),ce,e("div",re,[e("button",{type:"button",class:"btn btn-primary text-light",onClick:o[1]||(o[1]=t=>i.openModal("new",s.coupon))}," 建立新優惠券 ")]),e("table",ue,[me,e("tbody",null,[(a(!0),d(g,null,E(n.coupons,t=>(a(),d("tr",{key:t.id},[e("td",null,r(t.title),1),e("td",null,r(t.code),1),e("td",null,r(t.percent),1),e("td",null,r(i.formatDate(t.due_date)),1),e("td",null,[t.is_enabled?(a(),d("span",_e,"已啟用")):(a(),d("span",he,"未啟用"))]),e("td",null,[e("div",be,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>i.openModal("edit",t)}," 編輯 ",8,fe),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>i.openModal("delete",t)}," 刪除 ",8,Ce)])])]))),128))])]),l(m,{"page-in":n.pagination,onGetPages:i.getCouponList},null,8,["page-in","onGetPages"]),l(b,{ref:"couponsModal",innerTempCoupon:n.tempCoupon,isNew:n.isNew,onUpdate:i.getCouponList},null,8,["innerTempCoupon","isNew","onUpdate"]),l(_,{deleteItem:n.tempCoupon,deleteModalTitle:"優惠券",onDelItem:i.deleteCoupon,ref:"deleteModal"},null,8,["deleteItem","onDelItem"])],64)}const Fe=V(pe,[["render",ge]]);export{Fe as default};