import{S as e}from"./sweetalert2-761b07dd.js";const t=e.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2500,background:"#ECE9E3",color:"#594637",iconColor:"#594637",timerProgressBar:!1,didOpen:o=>{o.addEventListener("mouseenter",e.stopTimer),o.addEventListener("mouseleave",e.resumeTimer)}});export{t as T};