import{S as u}from"./sweetalert2-aca7abf3.js";import{aN as d,aD as f,U as _,a2 as t,bk as b,W as e,aq as m,bm as h,bd as V}from"./@vue-01f76383.js";import{_ as v}from"./index-00af039d.js";import"./@ckeditor-75295a52.js";import"./vue-00609181.js";import"./pinia-6b383ae9.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-878122eb.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-449b88b9.js";import"./vee-validate-939181b4.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:D,VITE_APP_PATH:P}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{orderData:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{isPhone(l){return/^(09)[0-9]{8}$/.test(l)?!0:"請填寫正確的手機號碼格式"},createOrder(){this.isLoading=!0,this.$http.post(`${D}/api/${P}/order`,{data:this.orderData}).then(l=>{console.log(l),this.$refs.form.resetForm(),this.orderData.message="",u.fire({position:"top-end",icon:"success",title:"訂單建立成功",showConfirmButton:!1,timer:1500})}).catch(()=>{u.fire({position:"top-end",icon:"success",title:"訂單建立失敗，請確認",showConfirmButton:!1,timer:1500})})}}},g={class:"my-5 row justify-content-center"},x={class:"mb-3"},k=e("label",{for:"email",class:"form-label"},"Email",-1),w={class:"mb-3"},U=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),y={class:"mb-3"},A=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),T={class:"mb-3"},B=e("label",{for:"address",class:"form-label"},"收件人地址",-1),C={class:"mb-3"},F=e("label",{for:"message",class:"form-label"},"留言",-1),N=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function O(l,s,S,q,o,c){const r=d("VField"),i=d("ErrorMessage"),p=d("VForm");return f(),_("div",g,[t(p,{ref:"form",class:"col-md-6",onSubmit:c.createOrder},{default:b(({errors:n})=>[e("div",x,[k,t(r,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":n.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.orderData.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>o.orderData.user.email=a)},null,8,["class","modelValue"]),t(i,{name:"email",class:"invalid-feedback"})]),e("div",w,[U,t(r,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.orderData.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>o.orderData.user.name=a)},null,8,["class","modelValue"]),t(i,{name:"姓名",class:"invalid-feedback"})]),e("div",y,[A,t(r,{id:"tel",name:"電話",type:"tel",class:m(["form-control",{"is-invalid":n.電話}]),placeholder:"請輸入電話",rules:c.isPhone,modelValue:o.orderData.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>o.orderData.user.tel=a)},null,8,["class","rules","modelValue"]),t(i,{name:"電話",class:"invalid-feedback"})]),e("div",T,[B,t(r,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.orderData.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>o.orderData.user.address=a)},null,8,["class","modelValue"]),t(i,{name:"地址",class:"invalid-feedback"})]),e("div",C,[F,h(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=a=>o.orderData.message=a)},null,512),[[V,o.orderData.message]])]),N]),_:1},8,["onSubmit"])])}const $=v(E,[["render",O]]);export{$ as default};
