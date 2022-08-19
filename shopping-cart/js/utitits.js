function getTextElement(elementId) {
      const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalstring = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalstring);
    return currentPhoneTotal;
     
}
function setTextElement(elementId, value) {
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function calculateSub(currentTotal,displayId) {
     const currentPhoneTotal = getTextElement('phone-total');
    const currentCaseTotal = getTextElement('case-total');

    const currentsubtotal = currentPhoneTotal + currentCaseTotal;
    
    setTextElement('subtotal', currentsubtotal);



    //  const currentPhoneTotal = getTextElement('phone-total');
    // const currentCaseTotal = getTextElement('case-total');
    // const currentsubtotal = currentPhoneTotal + currentCaseTotal;
    // setTextElement('subtotal', currentsubtotal);
    
    const taxstring = (currentsubtotal * 0.1).toFixed(2);
    const tax = parseFloat(taxstring);
    setTextElement('textotal', tax);

    const final = currentsubtotal + tax;
    setTextElement('finaltotal', final);
    

   
    

}