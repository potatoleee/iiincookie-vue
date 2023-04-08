import{M as u}from"./bootstrap-1e9f360c.js";import{_}from"./index-3e1f827c.js";import{aD as d,X as n,Y as e,a_ as i,a3 as m,W as b,as as r,bp as c,F as f,aL as p}from"./@vue-9b9f1f8d.js";const v={props:["deleteItem","deleteModalTitle"],data(){return{deleteModal:""}},methods:{deleteConfirm(){this.$emit("del-item")},show(){this.deleteModal.show()},hide(){this.deleteModal.hide()}},mounted(){this.deleteModal=new u(this.$refs.deleteModal)}},x={id:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true",ref:"deleteModal"},y={class:"modal-dialog modal-dialog-centered"},M={class:"modal-content border-0 bg-secondary py-5"},k={class:"modal-header justify-content-center border-0 pb-0"},C={id:"deleteAllModalLabel",class:"modal-title"},I={class:"modal-body text-center mb-7"},P={class:"text-primary"},w={key:0,class:"text-primary"},$={class:"border-0 d-flex flex-column flex-lg-row p-5 gap-6"};function D(o,s,t,g,h,l){return d(),n("div",x,[e("div",y,[e("div",M,[e("div",k,[e("h5",C,[e("span",null,"刪除"+i(t.deleteModalTitle),1)])]),e("div",I,[m(" 是否刪除 "),e("strong",P,i(t.deleteItem.title),1),t.deleteItem.title?b("",!0):(d(),n("strong",w,i(t.deleteItem.id),1)),m(" (刪除後將無法恢復)。 ")]),e("div",$,[e("button",{type:"button",class:"btn btn-primary text-secondary-light w-lg-50",onClick:s[0]||(s[0]=(...a)=>l.deleteConfirm&&l.deleteConfirm(...a))}," 確認刪除 "),e("button",{type:"button",class:"btn btn-outline-dark w-lg-50","data-bs-dismiss":"modal",onClick:s[1]||(s[1]=(...a)=>l.hide&&l.hide(...a))}," 不要刪除 ")])])])],512)}const X=_(v,[["render",D]]),L={props:["pageIn"],methods:{getPages(o){this.$emit("getPages",o)}}},N={class:"pagination justify-content-center"},B=e("span",{"aria-hidden":"true"},"«",-1),T=[B],V=["onClick"],j=e("span",{"aria-hidden":"true"},"»",-1),F=[j];function z(o,s,t,g,h,l){return d(),n("div",null,[e("ul",N,[e("li",{class:r(["page-item",{disabled:t.pageIn.has_pre===!1}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=c(a=>l.getPages(t.pageIn.current_page-1),["prevent"]))},T)],2),(d(!0),n(f,null,p(t.pageIn.total_pages,a=>(d(),n("li",{class:r(["page-item",{active:a===t.pageIn.current_page}]),key:a+"pages"},[e("a",{class:"page-link",href:"#",onClick:c(A=>l.getPages(a),["prevent"])},i(a),9,V)],2))),128)),e("li",{class:r(["page-item",{disabled:!t.pageIn.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[1]||(s[1]=c(a=>l.getPages(t.pageIn.current_page+1),["prevent"]))},F)],2)])])}const Y=_(L,[["render",z]]);export{X as D,Y as P};