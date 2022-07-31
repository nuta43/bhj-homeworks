let reveal=document.querySelectorAll(".reveal")
let array=Array.from(reveal)

document.addEventListener("scroll", show)
function show () {

for (let i=0;i<array.length;i++) {
  let {top}=array[i].getBoundingClientRect()
    if (top<350) {
array[i].classList.add("reveal_active");
    }    
    else array[i].classList.remove("reveal_active")
}
}

