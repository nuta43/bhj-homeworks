let small=document.querySelector(".font-size_small");
let big=document.querySelector(".font-size_big");
let text=document.querySelector(".book");
let allFont=document.querySelectorAll(".font-size");
let array=Array.from(allFont);
small.addEventListener("click",change)
function change(event) {
    event.preventDefault()
    for (let i=0;i<array.length;i++) {
        if (array[i].classList.contains("font-size_active")){
            array[i].classList.remove("font-size_active");
        }
    }
    small.classList.add("font-size_active");
    text.classList.add("book_fs-small");
    
}
big.addEventListener("click",changeBig);
function changeBig(event) {
    event.preventDefault()
    for (let i=0;i<array.length;i++) {
        if (array[i].classList.contains("font-size_active")){
            array[i].classList.remove("font-size_active");
        }
    }
    big.classList.add("font-size_active");
    text.classList.add("book_fs-big");
    
}