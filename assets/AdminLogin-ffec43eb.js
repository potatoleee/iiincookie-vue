import{_ as d,o as c,c as u,d as e,h as i,j as l}from"./index-deebbf1e.js";const{VITE_APP_URL:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},m={data(){return{user:{username:"",password:""}}},methods:{login(){if(this.user.username==""||this.user.password==""){alert("請輸入帳號密碼喔！");return}else this.$http.post(`${p}/admin/signin`,this.user).then(t=>{const{token:s,expired:n}=t.data;document.cookie=`hexToken=${s}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(t=>{alert(t.response.data.message)})}}},_={class:"container"},h={class:"row justify-content-center align-items-center h-100vh"},f={class:"col-lg-6"},w=e("h1",{class:"text-center mb-4"},"餅乾生產餡後台登入",-1),g={class:"form-floating mb-3"},v=e("label",{for:"userName"},"請輸入帳號 Email address",-1),x={class:"form-floating mb-4"},b=e("label",{for:"password"},"請輸入密碼 Password",-1);function P(t,s,n,k,r,a){return c(),u("div",_,[e("div",h,[e("div",f,[w,e("div",g,[i(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.username=o)},null,512),[[l,r.user.username]]),v]),e("div",x,[i(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.password=o)},null,512),[[l,r.user.password]]),b]),e("button",{class:"btn btn-primary w-100 py-2 d-block mx-auto loginBtn",type:"submit",onClick:s[2]||(s[2]=(...o)=>a.login&&a.login(...o))}," 登入 ")])])])}const V=d(m,[["render",P]]);export{V as default};