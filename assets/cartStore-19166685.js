import{d as c}from"./pinia-a78a79b1.js";import{a as s}from"./axios-bff3f665.js";import{T as r}from"./toast-1797c5ef.js";const{VITE_APP_URL:i,VITE_APP_PATH:o}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"week3dean",BASE_URL:"/iiincookie-vue/",MODE:"production",DEV:!1,PROD:!0},p=c("cartStore",{state:()=>({cartList:[],totalQty:0,loadingItem:""}),actions:{addToCart(t,e=1){const a={product_id:t,qty:e};this.loadingItem=t,s.post(`${i}/api/${o}/cart`,{data:a}).then(d=>{r.fire({icon:"success",title:`${d.data.message}`}),this.getCartList(),this.loadingItem=""}).catch(d=>{r.fire({icon:"error",title:`${d.response.data.message}`})})},getCartList(){s.get(`${i}/api/${o}/cart`).then(t=>{this.totalQty=0,this.cartList=t.data.data,this.cartList.carts.forEach(e=>{this.totalQty+=e.qty})}).catch(t=>{alert(t.response.data.message)})},updateCartItem(t){const e={product_id:t.product_id,qty:t.qty};this.loadingItem=t.id,s.put(`${i}/api/${o}/cart/${t.id}`,{data:e}).then(()=>{this.getCartList(),this.loadingItem=""}).catch(a=>{alert(a.response.data.message)})},addNum(t){const e={product_id:t.product_id,qty:t.qty+1};this.loadingItem=t.id,s.put(`${i}/api/${o}/cart/${t.id}`,{data:e}).then(()=>{this.getCartList(),this.loadingItem=""}).catch(a=>{alert(a.response.data.message)})},decreaseNum(t){const e={product_id:t.product_id,qty:t.qty-1};this.loadingItem=t.id,s.put(`${i}/api/${o}/cart/${t.id}`,{data:e}).then(()=>{this.getCartList(),this.loadingItem=""}).catch(a=>{alert(a.response.data.message)})},deleteCartItem(t){this.loadingItem=t.id,s.delete(`${i}/api/${o}/cart/${t.id}`).then(e=>{r.fire({icon:"success",title:`${e.data.message}`}),this.getCartList(),this.loadingItem=""}).catch(e=>{r.fire({icon:"error",title:`${e.response.data.message}`})})},deleteAllCartItem(){s.delete(`${i}/api/${o}/carts`).then(()=>{r.fire({icon:"success",title:"已刪除全部品項"}),this.getCartList()}).catch(t=>{r.fire({icon:"error",title:`${t.response.data.message}`})})}}});export{p as c};