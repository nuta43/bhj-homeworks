let first=document.querySelector("label");
let second=document.querySelectorAll(".interests_active");

for (let i=0;i<second.length;i++) {
    let check=second[i].closest("li.interest");
    let checkbox=check.firstElementChild.firstElementChild;
checkbox.addEventListener("input",change);
function change() {
    let int=second[i].lastElementChild.lastElementChild.lastElementChild;
    let int2=second[i].firstElementChild.firstElementChild.firstElementChild;
    if (int.checked===true) {
int.checked=false;
    }
    else int.checked=true; 
    if (int2.checked===true) {
        int2.checked=false;
            }
            else int2.checked=true; 
}
}

