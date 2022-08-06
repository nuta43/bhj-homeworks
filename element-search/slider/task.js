let nextElement=document.querySelector(".slider__arrow_next")
let prevElement=document.querySelector(".slider__arrow_prev")
console.log(nextElement)
console.log(prevElement)

let slider=document.querySelectorAll(".slider__item");
let array=Array.from(slider);
function change() {
for (let i=0;i<array.length;i++) {
   if (array[i].classList.contains('slider__item_active')) {
    array[i].classList.remove('slider__item_active');
    if(i === array.length - 1) {
    i = 0;
} else {
    i += 1;
}
array[i].classList.add('slider__item_active');
   return;
}
}
}
function changePrev () {
    for (let i=array.length - 1;i<array.length;i--) {
        array[i]  
        if (array[i].classList.contains('slider__item_active')) {
            array[i].classList.remove('slider__item_active');
    
       if (i === 0) {
        i = array.length - 1;
} else {
        i -= 1;
    }
    array[i].classList.add('slider__item_active');
    return;
}
    }
}
prevElement.addEventListener ("click",changePrev);
nextElement.addEventListener("click",change);




