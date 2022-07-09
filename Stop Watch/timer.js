const go=document.getElementById('go');
const stop=document.getElementById('stop');
const h1=document.getElementById('output');
const res=document.getElementById('reset');
let count=0;
let count2;

go.addEventListener('click',function(){

    count2= setInterval(()=>{
        h1.innerHTML=count;
        count++;
   
    },1000);


});

stop.addEventListener('click',function(){
    clearTimeout(count2);
});

res.addEventListener('click',function(){
    count=0;
    count2= setInterval(()=>{
        h1.innerHTML=count;
        count++;
   
    },1000);

});