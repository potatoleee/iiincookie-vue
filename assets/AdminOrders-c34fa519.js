import{P as L,D as $}from"./PaginationComponent-69919fdc.js";import{M as C}from"./bootstrap-1e9f360c.js";import{aD as n,X as l,Y as e,a3 as D,a_ as s,bm as P,b9 as T,F as g,aL as M,aN as _,a4 as f}from"./@vue-9b9f1f8d.js";import{_ as v}from"./index-43ae0ebb.js";import{T as m}from"./toast-94376381.js";import"./@popperjs-9847b28c.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-fe912644.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-89c4fdf0.js";import"./@ckeditor-34cd5b3f.js";import"./vue-d45f05e8.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";import"./sweetalert2-761b07dd.js";const w={props:{innerTempOrder:{type:Object,default(){return{}}}},data(){return{orderModal:"",tempOrder:{}}},methods:{orderConfirm(){this.$emit("orderConfirm",this.tempOrder)},show(){this.orderModal.show()},hide(){this.orderModal.hide()}},watch:{innerTempOrder(){this.tempOrder=this.innerTempOrder}},mounted(){this.orderModal=new C(this.$refs.orderModal)}},x={id:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"orderModal"},V={class:"modal-dialog modal-xl"},I={class:"modal-content border-0"},A=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"orderModalLabel",class:"modal-title"},[e("span",null,"編輯訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},N=e("p",null,"訂單資訊",-1),U={class:"form-check"},B={class:"form-check-label",for:"is_paid"},R=e("h3",null,"客戶資訊",-1),S=e("h3",null,"訂單品項",-1),F={class:"table"},G=e("thead",null,[e("tr",null,[e("th",null,"品項"),e("th",null,"單價"),e("th",null,"數量"),e("th",null,"小計")])],-1),H={class:"text-end"},j={class:"modal-footer"};function q(i,o,a,y,r,d){var c,p,u,h;return n(),l("div",x,[e("div",V,[e("div",I,[A,e("div",E,[N,D(" "+s(r.tempOrder.id)+" ",1),e("div",U,[P(e("input",{id:"is_paid",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=t=>r.tempOrder.is_paid=t),"true-value":!0,"false-value":!1},null,512),[[T,r.tempOrder.is_paid]]),e("label",B,s(r.tempOrder.is_paid?"已付款":"未付款"),1)]),R,e("ul",null,[e("li",null,"客戶姓名："+s((c=r.tempOrder.user)==null?void 0:c.name),1),e("li",null,"聯絡電話："+s((p=r.tempOrder.user)==null?void 0:p.tel),1),e("li",null,"電子信箱："+s((u=r.tempOrder.user)==null?void 0:u.email),1),e("li",null,"寄送地址："+s((h=r.tempOrder.user)==null?void 0:h.address),1),e("li",null,"備註："+s(r.tempOrder.message),1)]),S,e("div",null,[e("table",F,[G,e("tbody",null,[(n(!0),l(g,null,M(r.tempOrder.products,t=>(n(),l("tr",{key:t.products},[e("td",null,s(t.product.title),1),e("td",null,"NT$ "+s(t.product.price),1),e("td",null,s(t.qty),1),e("td",null,"NT$ "+s(t.total),1)]))),128))])])]),e("div",H,[e("p",null,"總計：NT$ "+s(Math.round(r.tempOrder.total)),1)])]),e("div",j,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:o[1]||(o[1]=(...t)=>d.hide&&d.hide(...t))}," 取消 "),e("button",{type:"button",class:"btn btn-primary text-light",onClick:o[2]||(o[2]=(...t)=>d.orderConfirm&&d.orderConfirm(...t))}," 確認 ")])])])],512)}const X=v(w,[["render",q]]),{VITE_APP_URL:b,VITE_APP_PATH:O}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},Y={data(){return{pagination:{},orderData:[],tempOrder:{},isLoading:!1}},methods:{getOrderList(i=1){this.isLoading=!0,this.$http.get(`${b}/api/${O}/admin/orders/?page=${i}`).then(o=>{this.isLoading=!1,this.orderData=o.data.orders,this.pagination=o.data.pagination}).catch(o=>{m.fire({icon:"error",title:`${o.response.data.message}`})})},formatDate(i){return new Date(i*1e3).toLocaleString()},openModal(i,o){i==="edit"?(this.$refs.orderModal.show(),this.tempOrder={...o}):i==="delete"&&(this.$refs.deleteModal.show(),this.tempOrder={...o})},deleteOrder(){this.$http.delete(`${b}/api/${O}/admin/order/${this.tempOrder.id}`).then(i=>{m.fire({icon:"success",title:`${i.data.message}`}),this.$refs.deleteModal.hide(),this.getOrderList()}).catch(i=>{m.fire({icon:"error",title:`${i.response.data.message}`})})},editOrderModal(i){const o={is_paid:i.is_paid};this.$http.put(`${b}/api/${O}/admin/order/${i.id}`,{data:o}).then(a=>{m.fire({icon:"success",title:`${a.data.message}`}),this.$refs.orderModal.hide(),this.getOrderList()}).catch(a=>{m.fire({icon:"error",title:`${a.response.data.message}`})})}},mounted(){this.getOrderList()},components:{PaginationComponent:L,DeleteModal:$,OrderModal:X}},z=e("h1",{class:"fs-2xl border-bottom border-secondary pb-2"},"訂單管理",-1),J={class:"table mt-4"},K=e("thead",null,[e("tr",null,[e("th",{width:"120"},"訂單日期"),e("th",{width:"120"},"訂單編號"),e("th",{width:"120"},"聯絡人"),e("th",{width:"120"},"金額"),e("th",{width:"100"},"付款狀態"),e("th",{width:"120"},"編輯")])],-1),Q={key:0,class:"text-success"},W={key:1},Z={class:"btn-group"},ee=["onClick"],te=["onClick"];function oe(i,o,a,y,r,d){const c=_("VueLoading"),p=_("PaginationComponent"),u=_("OrderModal"),h=_("DeleteModal");return n(),l(g,null,[f(c,{active:r.isLoading,"onUpdate:active":o[0]||(o[0]=t=>r.isLoading=t)},null,8,["active"]),z,e("table",J,[K,e("tbody",null,[(n(!0),l(g,null,M(r.orderData,t=>(n(),l("tr",{key:t.id},[e("td",null,s(d.formatDate(t.create_at)),1),e("td",null,s(t.id),1),e("td",null,s(t.user.name)+" "+s(t.user.email),1),e("td",null,"NT$"+s(Math.round(t.total)),1),e("td",null,[t.is_paid?(n(),l("span",Q,"已付款")):(n(),l("span",W,"未付款"))]),e("td",null,[e("div",Z,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>d.openModal("edit",t)}," 編輯 ",8,ee),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>d.openModal("delete",t)}," 刪除 ",8,te)])])]))),128))])]),f(p,{"page-in":r.pagination,onGetPages:d.getOrderList},null,8,["page-in","onGetPages"]),f(u,{"inner-temp-order":r.tempOrder,onOrderConfirm:d.editOrderModal,ref:"orderModal"},null,8,["inner-temp-order","onOrderConfirm"]),f(h,{deleteItem:r.tempOrder,deleteModalTitle:"訂單",onDelItem:d.deleteOrder,ref:"deleteModal"},null,8,["deleteItem","onDelItem"])],64)}const ye=v(Y,[["render",oe]]);export{ye as default};