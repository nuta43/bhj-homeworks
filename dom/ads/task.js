let phrase = document.querySelectorAll(".rotator__case");
let array=Array.from(phrase);
function change () {
for (let i=0;i<array.length;i++) {
    if (!array[i].nextElementSibling) {
        array[i].classList.remove('rotator__case_active')
        array[0].classList.add("rotator__case_active");
    }
    if (array[i].classList.contains("rotator__case_active")) {
        array[i].classList.remove('rotator__case_active');
    
    let index=i;
    let y=index+1;
    array[y].classList.add('rotator__case_active');
    
    return
    }
}

}
setInterval(change,1000)