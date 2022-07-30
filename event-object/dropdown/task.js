let menu=document.querySelector(".dropdown__value");
let elementMenu=document.querySelector(".dropdown__list");
let itemMenu=document.querySelectorAll(".dropdown__link");
let array=Array.from(itemMenu);


function openList () {
    if (elementMenu.classList.contains('dropdown__list_active')) {
    elementMenu.classList.remove('dropdown__list_active');
}
    else elementMenu.classList.add('dropdown__list_active');
}
menu.addEventListener("click",openList);

    for(let i=0;i<array.length;i++){
        array[i].addEventListener("click", function(event) {
            event.preventDefault();
            let name=array[i].closest("a");
            menu.textContent=name.textContent;   
            elementMenu.classList.remove("dropdown__list_active");
    })
}
