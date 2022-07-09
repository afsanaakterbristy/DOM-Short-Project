const devs_form= document.getElementById('devs_form');
const devs_area= document.querySelector('.devs-area');

devs_form.addEventListener('submit',function(e){
e.preventDefault();

let name=this.querySelector('input[name="name"]').value;
let skill=this.querySelectorAll('input[name="skill"]:checked');
let photo=this.querySelector('input[name="photo"]').value;
let gender=this.querySelector('input[name="gender"]:checked').value;

let skill_arr=[];

for(i=0 ; i< skill.length ;i++){
  skill_arr.push(skill[i].value);
}

let data_arr;
if(dataGet('devs')){
  data_arr=dataGet('devs');
}else{
  data_arr=[];
}
data_arr.push({
name:name,
gender:gender,
skills:skill_arr,
photo:photo

});
dataSet('data',data_arr);
allDevs();
});
allDevs();

function allDevs(){
  var all_devs = dataGet ('devs');
 
  let data='';
  all_devs.map(d=>{

    let list ='';
    d.skills.map(data =>{
      list +=`<li class="list-group-item">'+ list +'</li>`
    });
    data +=`
    <div class="col-md-4 my-3">
                    <div class="card">
                            <img style="width:100%;height:250px;" src="${d.photo}" alt="">
                            <div class="card-body">
                                <h4>${d.name}</h4>
                                <p>Gender:${d.gender}</p>
                                <h4>skill</h4>
                               <hr>
                               <ul class="list-group">
                              ${list}
                             
                               </ul>
                            </div>
                            
                            </div>
                            
                        </div>
    
    `;

  });
  devs_area.innerHTML=data;
}





