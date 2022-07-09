const apply= document.getElementById('apply');
const keep= document.getElementById('keep');
const dis= document.getElementById('dis');
const modal=document.querySelector('.haq-modal');
const close=document.querySelector('.close');
const alert=document.querySelector('.haq-alert');
const aclose=document.querySelector('.close1');


apply.addEventListener('click',function(e){
    e.preventDefault();
 
 modal.classList.add('active');
});

close.addEventListener('click',function(){
    alert.style.display='flex';
});

aclose.addEventListener('click',function(){
    alert.style.display='none';
});

keep.addEventListener('click',function(){
    
    alert.style.display='none';
});

dis.addEventListener('click',function(){
    alert.style.display='none';
    modal.classList.remove('active');

});

close.addEventListener('click',function(e){
    e.preventDefault();
    modal.classList.remove('active');
});
modal.addEventListener('click',function(e){
 if(e.target ==this){
    modal.classList.remove('active');
 }
   
});




