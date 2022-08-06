let tool=document.querySelectorAll(".has-tooltip")
tool.forEach(el=>{
const tooltip=document.createElement("div")
tooltip.className="tooltip"
el.after(tooltip)

el.addEventListener("click",function(event){
    const position=el.getBoundingClientRect();
    el.setAttribute('data-position','bottom');
    el.nextSibling.setAttribute('style',`left:${position.left}px; top:${position.top+20}px`);
    el.nextSibling.innerHTML=el.title
    if (el.nextElementSibling.classList.contains('tooltip_active')) {
       el.nextElementSibling.classList.remove('tooltip_active');
    }
   else 
   {el.nextElementSibling.classList.add('tooltip_active');}
event.preventDefault()
})
});
