function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()* 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
     const privioustypedNumber = typedNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
           typedNumber.value = '';
        } else if (number === '<')
        {
            const digit = privioustypedNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumber.value = remainingDigits;
            }
    } else {
       
        const privioustypedNumber = typedNumber.value;
        const newtypedNumber=privioustypedNumber+number
        typedNumber.value = newtypedNumber;
    }

})

                               
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-number');
    const typeNumber = typeNumberField.value;
    const pinSuccess = document.getElementById('pin-success');
     const pinFailure = document.getElementById('pin-failure');

    if (typeNumber == currentPin) {
       
        pinSuccess.style.display = 'block';
           pinFailure.style.display = 'none';
    } else {
       
        pinFailure.style.display = 'block';
         pinSuccess.style.display = 'none';
    }


})