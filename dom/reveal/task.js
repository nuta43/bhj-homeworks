let reveal=document.querySelectorAll(".reveal")
let array=Array.from(reveal)

document.addEventListener("scroll", show)
function show () {

for (let i=0;i<array.length;i++) {
  let {top,bottom}=array[i].getBoundingClientRect()
  console.log (array[i].getBoundingClientRect())
    if (top<600)  {
array[i].classList.add("reveal_active");
    }    
    if (bottom<0) {
        array[i].classList.remove("reveal_active")
    }
    if (bottom>1000) {
        array[i].classList.remove("reveal_active")
    }
}
}

