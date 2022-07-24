
let find=document.getElementsByClassName ("modal__close")

let newElement=document.getElementsByClassName ("show-success")
let wrapper=document.getElementById("modal_main")
wrapper.className=" modal_active"
let green=document.getElementById("modal_success")


newElement[0].addEventListener ("click",changeColor)
function changeColor() {
    green.className=" modal_active"
    wrapper.style.display= "none"
}
find[0].addEventListener ("click",close)
function close() {
    wrapper.style.display = "none"
    green.style.display = "none"
}
find[2].addEventListener ("click",close)



