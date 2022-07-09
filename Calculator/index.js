let cal_data=[];

 let valGet=(val)=>{
cal_data.push(val);


document.querySelector('.top-monitor').innerHTML=cal_data.join('');
document.querySelector('.main-monitor').innerHTML= 0;

 }
 let finalRes=()=>{
   
    let cal_string=cal_data.join('');
   
    document.querySelector('.main-monitor').innerHTML=eval(cal_string);
 }

 let allclear= ()=>{
    cal_data=[];
    document.querySelector('.top-monitor').innerHTML=0;
document.querySelector('.main-monitor').innerHTML= '';
 }

 let back=()=>
 {
    cal_data.pop();
    document.querySelector('.top-monitor').innerHTML=cal_data.join('');

 }