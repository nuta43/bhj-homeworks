let loader=document.getElementById("loader");
let item=document.getElementById("items");
let xhr=new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com')
xhr.send();
xhr.onreadystatechange=function() {
if (xhr.readyState===4) { 
let answer=JSON.parse(xhr.responseText).response;
let response=answer.Valute;
for (let i in response){
    let code=response[i].CharCode;
    let value=response[i].Value;
    item.innerHTML += `
    <div class="item">
        <div class="item__code">
            ${code}
        </div>
        <div class="item__value">
            ${value}
        </div>
        <div class="item__currency">
            руб.
        </div>

    </div>`
}
    loader.classList.remove("loader_active");
      
    };
}



