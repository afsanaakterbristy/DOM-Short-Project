const sing_up_form= document.getElementById('sing_up_form');
const msg= document.querySelector('.msg');
const button= document.querySelector('#test');

button.onclick =()=>{
  setTimeout(function(){
    msg.innerText='ok right';
  },2000);

}

sing_up_form.addEventListener('submit',function(e){
    e.preventDefault();

    let name = sing_up_form.querySelector('input[placeholder="Name"]');
    let email = sing_up_form.querySelector('input[placeholder="email"]');
    let loc = sing_up_form.querySelector('select');
    let gender = sing_up_form.querySelector('input[type="radio"]:checked');

    let check = sing_up_form.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < check.length; i++) {
      console.log(check[i].value);
      
    }

    if(name.value=="" || email.value=="" || loc.value=="" ||gender.value==""){
      msg.innerHTML= validation('all fill plz fillup','danger');
    }else{
      msg.innerHTML=validation('all success','success'); 
    }
   setTimeout(function(){
    msg.innerHTML='';
   },5000);


});