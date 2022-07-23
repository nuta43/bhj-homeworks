
let newTimer=document.getElementById("timer")
 function addTimer () {
    let minusTimer=newTimer.textContent
    minusTimer--
    newTimer.textContent=minusTimer
    if (minusTimer===0) {

        clearInterval(interval)
        alert ("Вы победили в конкурсе!")
      
}
 }
let interval = setInterval (addTimer,1000)

