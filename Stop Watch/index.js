const start=document.getElementById('start');
const stop=document.getElementById('stop');
const h1=document.getElementById('output');
const count=document.getElementById('count');
const loader=document.querySelector('.loader');


let counter;
let con;

start.addEventListener('click',()=>{

    counter =count.value;
   con= setInterval(()=>{
    h1.innerHTML=counter;
    let width=load(count.value,counter);

    loader.style.width= `${width}%`;

    if(width>50 && width<=100){
        loader.style.backgroundColor='green';
    }else if(width>30 && width<=50){
        loader.style.backgroundColor='yellow';
    }
    else if( width<=30){
        loader.style.backgroundColor='red';
    }
   
    if(counter ==0){
        clearInterval(con);
    }
    counter--;
   },1000);
    
});

stop.addEventListener('click',function(){
  clearInterval(con);
});