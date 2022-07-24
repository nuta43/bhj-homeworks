
let menuOpen=document.querySelectorAll(".menu__link")




let array=Array.from(document.querySelectorAll(".menu__link"));
console.log(array)
for (i=0;i<array.length;i++){
    array[i]
    array[i].onclick=function() { 
        let menu = this.parentElement.querySelector('ul.menu_sub');    
        if (menu.className.includes('menu_active')) {
            menu.className = menu.className.replace(' menu_active', '')}
            else menu.className +=' menu_active';
        
            let activeMenu = document.querySelectorAll('ul.menu_active');
        
            if (activeMenu.length > 1) {
                for (let i = 0; i < activeMenu.length; i++) {
                    activeMenu[i].className = activeMenu[i].className.replace(' menu_active', '');
                };
                menu.className += ' menu_active';
            }
            
            return false
            };
    };



