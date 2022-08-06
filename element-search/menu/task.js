
let menuOpen = document.getElementsByClassName('menu__link');
let Item = document.getElementsByClassName('menu__item');
let array = Array.from(Item);

for (let i = 0; i < menuOpen.length; i++) {
    menuOpen[i].onclick = function () {
        if (Item[i].querySelector('.menu_sub') !== null ) {
            array[i].querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
}



