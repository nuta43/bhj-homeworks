let input=document.getElementById("task__input")
let tasks=document.getElementById("tasks__list")
input.addEventListener("keydown", list);
function list (event) {
   if (event.code!=="Enter") {
    return;
   }
   if (input.value.length===0) {
   return;
   }
   let text=input.value;
   function add() {
   tasks.innerHTML+=`<div class="task">
   <div class="task__title">
   ${text}
   </div>
   <a href="#" class="task__remove">&times;</a>
   </div>`
   }
   add()
   input.value=""
   let remove=document.querySelectorAll(".task__remove")
   remove.forEach(el => {el.addEventListener("click",function(){
    el.parentElement.remove()
   })
    
   });
   event.preventDefault()
}