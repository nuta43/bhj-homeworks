let msg=document.getElementById("form")
msg.addEventListener("submit",function (e) {
    e.preventDefault()   
    let xhr=new XMLHttpRequest();
    let formdata=new FormData(msg) 
xhr.upload.onprogress=function(e) {
    const progress = document.getElementById( 'progress' );
    progress.value=e.loaded/e.total
}
xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php')
xhr.send(formdata)
})
