import{c}from"./assets/template-8036ce4e.js";const n=document.querySelector(".products-quantity-title"),a=document.querySelector(".products-total-price"),u=document.querySelector(".cart-container"),s="products in cart",t=JSON.parse(localStorage.getItem(s));u.insertAdjacentHTML("beforeend",c(t));const l=document.querySelectorAll(".products-quantity");t.forEach((e,o)=>{l[o].textContent=e.quantity});n.textContent=`Cart (${t.length})`;const d=t.reduce((e,{quantity:o,price:r})=>e+=o*r,0);a.textContent=`$${d}`;
//# sourceMappingURL=commonHelpers.js.map
