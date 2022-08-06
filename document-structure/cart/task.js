let number=document.querySelectorAll(".product__quantity-control_inc")
let minus=document.querySelectorAll(".product__quantity-control_dec")
number.forEach(el => {el.addEventListener("click",function(){
    let prev = el.previousElementSibling
   prev.textContent++
    })
})
minus.forEach(el => {el.addEventListener("click",function(){
    let next = el.nextElementSibling
   next.textContent--
   if (next.textContent<0){
    next.textContent=0
   }
    })
})

let add=document.querySelectorAll(".product__add")
add.forEach(el=>{el.addEventListener("click",function(){
console.log(el.closest(".product__image"))
let img=document.querySelectorAll(".product__image")
img.forEach(item=>{
console.log(el.closest(item))
})
    let cart=document.querySelector(".cart__products")
    cart.innerHTML+=`<div class="cart__product" data-id="1">
    <img class="cart__product-image" src="${img.src}">
    <div class="cart__product-count">20</div>
</div>`
})
})