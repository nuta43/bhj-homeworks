
let find=document.getElementsByClassName ("modal__close");
let newElement=document.getElementsByClassName ("show-success");
let wrapper=document.getElementById("modal_main");
wrapper.classList.add("modal_active");
let green=document.getElementById("modal_success");


newElement[0].addEventListener ("click",changeColor);
function changeColor() {
    green.classList.add("modal_active");
    wrapper.classList.remove("modal_active");
}
find[0].addEventListener ("click",close)
function close() {
    wrapper.classList.remove("modal_active");
    green.classList.remove("modal_active");
}
find[2].addEventListener ("click",close)



