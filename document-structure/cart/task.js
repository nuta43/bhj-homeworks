let number=document.querySelectorAll(".product__quantity-control_inc")
let minus=document.querySelectorAll(".product__quantity-control_dec")
const cart = document.querySelector('.cart__products');
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
add.forEach(el=>{el.addEventListener("click",function(event) {

        const product = event.target.closest('.product');
        const id = product.dataset.id;
        const countFromProduct = +event.target.parentNode.querySelector('.product__quantity-value').innerText;
    
        for (let item of cart.children) {
    
            if (item.dataset.id === id) {
                let productCount = item.querySelector('.cart__product-count');
                let total = +productCount.innerText;
                productCount.innerText = total + countFromProduct;
    
                return false;
            }
        }
    
        const productImg = product.querySelector('.product__image').src;
        const count = product.querySelector('.product__quantity-value').innerText;
    
        const productToCart = `<div class="cart__product" data-id="${id}">
                                    <img class="cart__product-image" src="${productImg}">
                                    <div class="cart__product-count">${count}</div>
                                </div>`;
    
        cart.insertAdjacentHTML('beforeend', productToCart);
    })
})

;


