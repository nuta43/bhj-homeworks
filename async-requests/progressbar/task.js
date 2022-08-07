let xhr=new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com/upload.php')
xhr.send()
xhr.onreadystatechange=function() {
    const progress = document.getElementById( 'progress' );
    if (xhr.readyState===1) { 
progress.value = 0.3;
    }
    if (xhr.readyState===2) { 
        progress.value = 0.5;
            }
            if (xhr.readyState===3) { 
                progress.value = 0.7;
                    }        
                    if (xhr.readyState===4) { 
                        progress.value = 1;
                            }
}