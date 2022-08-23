// function 

function updateNumberPhone(isIncrese) {
     const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString= phoneNumberField.value;
    const previousphoneNumber = parseInt(phoneNumberString);
    let newphoneNumber;
    if (isIncrese) {
        newphoneNumber = previousphoneNumber + 1;
    } else {
        newphoneNumber = previousphoneNumber - 1;
    }
    phoneNumberField.value = newphoneNumber;
    return newphoneNumber;
}
function updatePricePhone(newphoneNumber) {
    const totalNumber = newphoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = totalNumber;
    console.log('update from phone')

}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newphoneNumber = updateNumberPhone(true);
    updatePricePhone(newphoneNumber); 
  
    calculateSub();
    console.log('plus from phone')

  
});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
   
     const newphoneNumber = updateNumberPhone(false);
    updatePricePhone(newphoneNumber);
    calculateSub();
    console.log('minus from phone')

});