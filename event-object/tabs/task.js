let tab=document.querySelectorAll(".tab");
let array=Array.from(tab);
let content=document.querySelectorAll(".tab__content");
let arrayContent=Array.from(content);

    for (let i=0;i<array.length;i++) {
        array[i].addEventListener("click", function (event) {
            for (let y=0;y<array.length;y++) {
            array[y].classList.remove('tab_active');
        
    } 
            array[i].classList.add('tab_active')
            let index=i; 
    for(let i=0;i<arrayContent.length;i++) {
        if (arrayContent[i].classList.contains('tab__content_active')) {
            arrayContent[i].classList.remove('tab__content_active');
        };
    arrayContent[index].classList.add('tab__content_active');
    }
}
        
)
    }




    



