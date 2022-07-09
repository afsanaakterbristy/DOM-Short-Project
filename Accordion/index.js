const header=document.querySelectorAll('.accordion-header');

header.forEach(item=>{
    item.addEventListener('click',function(){

        header.forEach(item=>{
        if(item != this){
            item.classList.remove('active');
            item.nextElementSibling.style.display='none';
        }
        });
        item.classList.toggle('active');
      

        if(item.classList.contains('active')){
            item.nextElementSibling.style.display='block';
        }else{
            item.nextElementSibling.style.display='none';
        }
    });
});