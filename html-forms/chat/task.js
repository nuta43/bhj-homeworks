let chat=document.querySelector(".chat-widget");
let chatArea=document.querySelector(".chat-widget__area");
chat.addEventListener("click",open);
function open() {
    chat.classList.add("chat-widget_active");
}
let area=document.getElementById("chat-widget__input");
let msg=document.getElementById("chat-widget__messages");
area.addEventListener("keydown", msgClient);
function msgClient (event) {
   if (event.code!=="Enter") {
    return;
   }
   if (area.value.length===0) {
   return;
   }
   let text=area.value;
   let time=new Date().toLocaleTimeString().slice(0,-3)
function show () {
    msg.innerHTML+=  `
   <div class="message message_client">
   <div class="message__time">${time}</div>
   <div class="message__text">${text}</div>
</div> `;
}
show()
area.value=""
setTimeout (answer,1000)
function show () {
    msg.innerHTML+=  `
   <div class="message message_client">
   <div class="message__time">${time}</div>
   <div class="message__text">${text}</div>
</div> `;
}
function answer () {
robot=[["Добрый день!"],["Чем я могу помочь?"],["Сейчас все специалисты заняты"],["Хорошего дня!"]]
let randomNumber=Math.floor(Math.random()*robot.length)
msg.innerHTML+= `
<div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">${robot[randomNumber]}</div>
</div>`;
}
}


   