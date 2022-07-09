const add_product=document.getElementById('add_product');
const add_box=document.querySelector('.product-add-box');
const sess=document.getElementById('sess');
const plist =document.getElementById('plist')
const product=document.getElementById('product')

add_product.addEventListener('click',function(){
  add_box.style.display="block";

});

sess.addEventListener('click',function(){
    add_box.style.display="none";
  
  });
 
  product.addEventListener('submit',function(e){
     e.preventDefault();

    let name =this.querySelector('input[name="name"]').value;
    let price =this.querySelector('input[name="price"]').value;
    let sale =this.querySelector('input[name="sale_price"]').value;
    let photo =this.querySelector('input[name="photo"]').value;

let product_arr;
if(dataGet('products')){
  product_arr=dataGet('products');
}else{
  product_arr=[];
}

product_arr.push({
  name :name,
  price:price,
  sale:sale,
  photo:photo 
});
dataSet('products',product_arr);
allProducts();
  });
  allProducts();
 function allProducts(){
  let all_products = dataGet('products');
  let data='';
  all_products.map(pdata=>{

    data +=`
    <div class="col-md-4">
      <div class="card">
          <img class="card-image" src="${pdata.photo}">
          <div class="card-body">
              <h3>${pdata.name}</h3>
              <p><span class="regular-price">$${pdata.price}</span>
                  <span class="sale-price"></span></p>
                  <br>
                  <button class="btn btn-success">add to cart</button>

          </div>
      </div>
  </div>
    `;
  });

plist.innerHTML=data;
 }

 
 
