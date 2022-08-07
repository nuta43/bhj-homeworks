let xhr=new XMLHttpRequest();
xhr.open('GET',' https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send();
xhr.onreadystatechange=function() {
    if (xhr.readyState===4) { 
let answer=JSON.parse(xhr.responseText);
let question=answer.data.title;
let title=document.getElementById("poll__title");
let pollanswer=document.getElementById("poll__answers");
title.innerText=question;
let poll=answer.data.answers;
for (let i in poll) {
    pollanswer.innerHTML+=`<button class="poll__answer">
    ${poll[i]}
  </button>` 
}
let polls=document.querySelectorAll(".poll__answer");
polls.forEach(element => {element.addEventListener("click",function(event){
    alert("Спасибо, Ваш голос засчитан!")
  })
    
});
}
    }
