const order= document.getElementById('order');
const counter= document.querySelector('.counter');


order.addEventListener('submit',function(e){
    e.preventDefault();

    let date =this.querySelector('input[type="date"').value;

    // Future date
    const futureTime = new Date(date).getTime()


    setInterval(()=>{

        // Current date 
        const currentTime = new Date().getTime()
        // Distance 
        const distance = futureTime-currentTime
        // Calculation - Hours,minutes,seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);



        counter.innerHTML = `Days : ${days} Hours: ${hours} Minutes ${minutes} Seconds ${seconds}`

    },1000)
  
  
    // console.log(`Distance - ${futureTime-currentTime}`)
})

