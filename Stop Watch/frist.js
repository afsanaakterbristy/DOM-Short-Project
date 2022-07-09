const box=document.querySelector('.box');
const para = document.createElement('h1');
para.classList.add('btn');
para.classList.add('btn-primary');
para.id='sing';
para.innerText='sing up';
para.setAttribute('href','#');
para.style.color='red';

box.append(para);

console.log(para);