
let menuOpen=document.querySelectorAll(".menu__link")



let array=Array.from(menuOpen);
console.log(array)
for (let i=0;i<array.length;i++){
    array[i]
    array[i].onclick=function(event) { 
        let menu = this.parentElement.querySelector('ul.menu_sub');   
        console.log(menu) 
        if (menu.classList.classList.contains('menu_active')) {
            menu.classList.remove('menu_active')
        }
            else menu.classList.add("menu_active");
        
            let activeMenu = document.querySelectorAll('ul.menu_active');
        
            if (activeMenu.length > 1) {
                for (let i = 0; i < activeMenu.length; i++) {
                    activeMenu[i].classList.remove("menu_active");
                };
                menu.classList.add("menu_active");
            }
            
            preventDefault(event)
            };
    };



