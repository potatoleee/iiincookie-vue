import{aN as d,aD as p,X as c,Y as e,bm as a,bd as l,a4 as u,bk as _,a3 as h}from"./@vue-9b9f1f8d.js";import{_ as f}from"./index-93fb7091.js";import"./pinia-a78a79b1.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-fe912644.js";import"./aos-dcf01651.js";import"./@ckeditor-f5fb1894.js";import"./vue-cfa7fbc0.js";import"./axios-bff3f665.js";import"./vue-axios-58a7c26f.js";import"./vue-loading-overlay-7a4b91db.js";import"./vee-validate-aa5cd44a.js";import"./@vee-validate-533577de.js";/* empty css                        */import"./gsap-8fc7659c.js";const{VITE_APP_URL:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},w={emits:["split-index-products"],data(){return{user:{username:"",password:""}}},methods:{login(){if(this.user.username==""||this.user.password==""){alert("請輸入帳號密碼喔！");return}else this.$http.post(`${x}/admin/signin`,this.user).then(o=>{const{token:t,expired:i}=o.data;document.cookie=`hexToken=${t}; expires=${new Date(i)};`,this.$router.push("/admin")}).catch(o=>{alert(o.response.data.message)})}}},b={class:"container"},k={class:"row justify-content-center align-items-center h-100vh"},v={class:"col-lg-6"},g=e("h1",{class:"text-center mb-4"},"餅乾生產餡後台登入",-1),P={class:"form-floating mb-3"},V=e("label",{for:"userName"},"請輸入帳號 Email address",-1),E={class:"form-floating mb-4"},T=e("label",{for:"password"},"請輸入密碼 Password",-1);function y(o,t,i,A,r,n){const m=d("RouterLink");return p(),c("div",b,[e("div",k,[e("div",v,[g,e("div",P,[a(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":t[0]||(t[0]=s=>r.user.username=s)},null,512),[[l,r.user.username]]),V]),e("div",E,[a(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=s=>r.user.password=s)},null,512),[[l,r.user.password]]),T]),e("button",{class:"btn btn-primary text-light w-100 py-2 d-block mx-auto",type:"submit",onClick:t[2]||(t[2]=(...s)=>n.login&&n.login(...s))}," 登入 "),u(m,{to:"/",class:"text-center mt-2"},{default:_(()=>[h("back to index ")]),_:1})])])])}const Y=f(w,[["render",y]]);export{Y as default};
