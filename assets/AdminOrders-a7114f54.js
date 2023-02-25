import{D as y}from"./DeleteModal-f76c4a30.js";import{P as v}from"./PaginationComponent-f1eebe93.js";import{M as C}from"./bootstrap-1e9f360c.js";import{aD as l,U as a,W as e,a1 as D,a_ as r,bm as P,b9 as T,F as g,aL as M,aN as _,a2 as f}from"./@vue-01f76383.js";import{_ as $}from"./index-49abc74b.js";import{T as c}from"./toast-6c8cb593.js";import"./@popperjs-9847b28c.js";import"./pinia-6b383ae9.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-878122eb.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-449b88b9.js";import"./@ckeditor-75295a52.js";import"./vue-00609181.js";import"./vee-validate-939181b4.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";import"./sweetalert2-aca7abf3.js";const w={props:{innerTempOrder:{type:Object,default(){return{}}}},data(){return{orderModal:"",tempOrder:{}}},methods:{orderConfirm(){this.$emit("orderConfirm",this.tempOrder)},show(){this.orderModal.show()},hide(){this.orderModal.hide()}},watch:{innerTempOrder(){this.tempOrder=this.innerTempOrder}},mounted(){this.orderModal=new C(this.$refs.orderModal)}},x={id:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"orderModal"},L={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},I=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"orderModalLabel",class:"modal-title"},[e("span",null,"編輯訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},E=e("p",null,"訂單資訊",-1),N={class:"form-check"},U={class:"form-check-label",for:"is_paid"},B=e("h3",null,"客戶資訊",-1),R=e("h3",null,"訂單品項",-1),S={class:"table"},F=e("thead",null,[e("tr",null,[e("th",null,"品項"),e("th",null,"單價"),e("th",null,"數量"),e("th",null,"小計")])],-1),G={class:"text-end"},H={class:"modal-footer"};function j(o,t,m,k,s,i){var p,h,u,n;return l(),a("div",x,[e("div",L,[e("div",A,[I,e("div",V,[E,D(" "+r(s.tempOrder.id)+" ",1),e("div",N,[P(e("input",{id:"is_paid",class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=d=>s.tempOrder.is_paid=d),"true-value":!0,"false-value":!1},null,512),[[T,s.tempOrder.is_paid]]),e("label",U,r(s.tempOrder.is_paid?"已付款":"未付款"),1)]),B,e("ul",null,[e("li",null,"客戶姓名："+r((p=s.tempOrder.user)==null?void 0:p.name),1),e("li",null,"聯絡電話："+r((h=s.tempOrder.user)==null?void 0:h.tel),1),e("li",null,"電子信箱："+r((u=s.tempOrder.user)==null?void 0:u.email),1),e("li",null,"寄送地址："+r((n=s.tempOrder.user)==null?void 0:n.address),1),e("li",null,"備註："+r(s.tempOrder.message),1)]),R,e("div",null,[e("table",S,[F,e("tbody",null,[(l(!0),a(g,null,M(s.tempOrder.products,d=>(l(),a("tr",{key:d.products},[e("td",null,r(d.product.title),1),e("td",null,"NT$ "+r(d.product.price),1),e("td",null,r(d.qty),1),e("td",null,"NT$ "+r(d.total),1)]))),128))])])]),e("div",G,[e("p",null,"總計：NT$ "+r(s.tempOrder.total),1)])]),e("div",H,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=(...d)=>i.hide&&i.hide(...d))}," 取消 "),e("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...d)=>i.orderConfirm&&i.orderConfirm(...d))}," 確認 ")])])])],512)}const q=$(w,[["render",j]]),{VITE_APP_URL:b,VITE_APP_PATH:O}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},z={data(){return{pagination:{},orderData:[],tempOrder:{}}},methods:{getOrderList(o=1){this.$http.get(`${b}/api/${O}/admin/orders/?page=${o}`).then(t=>{this.orderData=t.data.orders,this.pagination=t.data.pagination}).catch(t=>{c.fire({icon:"error",title:`${t.response.data.message}`})})},formatDate(o){return new Date(o*1e3).toLocaleString()},openModal(o,t){o==="edit"?(this.$refs.orderModal.show(),this.tempOrder={...t}):o==="delete"&&(this.$refs.deleteModal.show(),this.tempOrder={...t})},deleteOrder(){this.$http.delete(`${b}/api/${O}/admin/order/${this.tempOrder.id}`).then(o=>{c.fire({icon:"success",title:`${o.data.message}`}),this.$refs.deleteModal.hide(),this.getOrderList()}).catch(o=>{c.fire({icon:"error",title:`${o.response.data.message}`})})},editOrderModal(o){const t={is_paid:o.is_paid};this.$http.put(`${b}/api/${O}/admin/order/${o.id}`,{data:t}).then(m=>{c.fire({icon:"success",title:`${m.data.message}`}),this.$refs.orderModal.hide(),this.getOrderList()}).catch(m=>{c.fire({icon:"error",title:`${m.response.data.message}`})})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o,this.getOrderList()},components:{PaginationComponent:v,DeleteModal:y,OrderModal:q}},W=e("h1",{class:"fs-2xl border-bottom border-secondary pb-2"},"訂單管理",-1),J={class:"table mt-4"},K=e("thead",null,[e("tr",null,[e("th",{width:"120"},"訂單日期"),e("th",{width:"120"},"訂單編號"),e("th",{width:"120"},"聯絡人"),e("th",{width:"120"},"金額"),e("th",{width:"100"},"付款狀態"),e("th",{width:"120"},"編輯")])],-1),Q={key:0,class:"text-success"},X={key:1},Y={class:"btn-group"},Z=["onClick"],ee=["onClick"];function te(o,t,m,k,s,i){const p=_("PaginationComponent"),h=_("OrderModal"),u=_("DeleteModal");return l(),a(g,null,[W,e("table",J,[K,e("tbody",null,[(l(!0),a(g,null,M(s.orderData,n=>(l(),a("tr",{key:n.id},[e("td",null,r(i.formatDate(n.create_at)),1),e("td",null,r(n.id),1),e("td",null,r(n.user.name)+" "+r(n.user.email),1),e("td",null,"NT$"+r(n.total),1),e("td",null,[n.is_paid?(l(),a("span",Q,"已付款")):(l(),a("span",X,"未付款"))]),e("td",null,[e("div",Y,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:d=>i.openModal("edit",n)}," 編輯 ",8,Z),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:d=>i.openModal("delete",n)}," 刪除 ",8,ee)])])]))),128))])]),f(p,{"page-in":s.pagination,onGetPages:i.getOrderList},null,8,["page-in","onGetPages"]),f(h,{"inner-temp-order":s.tempOrder,onOrderConfirm:i.editOrderModal,ref:"orderModal"},null,8,["inner-temp-order","onOrderConfirm"]),f(u,{deleteItem:s.tempOrder,onDelItem:i.deleteOrder,ref:"deleteModal"},null,8,["deleteItem","onDelItem"])],64)}const ke=$(z,[["render",te]]);export{ke as default};
