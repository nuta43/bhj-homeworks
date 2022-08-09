let area=document.getElementById("editor")
area.addEventListener("oninput",function(){
localStorage.text=area.value
})
let addtext=localStorage.getItem('text')
console.log(addtext)
    