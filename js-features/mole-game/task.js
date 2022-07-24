let deadElement=document.getElementById("dead");
let lostElement=document.getElementById("lost");




function count() {
    let deadElement=dead.textContent;
    deadElement++;
    dead.textContent=deadElement;
    if (deadElement===10) {
      alert ("Вы выиграли!")
    };
}
function countLost () {
    let lostElement=lost.textContent;
    lostElement++;
    lost.textContent=lostElement;
    if (lostElement===5) {
    alert ("Вы проиграли!")
    };
}
function getHole (index) {
return document.getElementById("hole"+index);
}

for (let i=1;i<10;i++) {
    elementHole = getHole(i);         
    elementHole.addEventListener("click", function() {
        if ( elementHole.className.includes( 'hole_has-mole' ) ) {
          count();
        }
        else {
         countLost();
        }
      });
    }



