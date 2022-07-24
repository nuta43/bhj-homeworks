let image=document.getElementById("cookie");
let counter=document.getElementById("clicker__counter");

function count() {
    let counterElement=counter.textContent;
    counterElement++;
    counter.textContent=counterElement;

}
image.addEventListener ("click", count);

function changeSizes() {
    if (image.width==200) {
    image.width=400;
    image.height=250;
    }
    else {
        image.width=200;
        image.height=128;
    }
     }
    image.addEventListener ("click",changeSizes);
    

