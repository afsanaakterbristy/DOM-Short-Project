const clock = document.querySelector('.clock');

setInterval(function(){
    let date = new Date();

    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    
    let ampm= h>=12 ? 'pm':'am';
    clock.innerHTML=`${(timeCount(h))> 12? (timeCount(h))-12 : (timeCount(h))}:${timeCount(m)}:${timeCount(s)}${ampm}`;
    

},1000);

 