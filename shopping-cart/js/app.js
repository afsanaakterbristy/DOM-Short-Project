// function

function updateNumber(isIncrese) {
     const caseNumberField = document.getElementById('case-number-field');
     const caseNumberString = caseNumberField.value;
    const previouscaseNumber = parseInt(caseNumberString);
    let newcaseNumber;
    if (isIncrese ===true) {
        newcaseNumber = previouscaseNumber + 1;
    } else {
        newcaseNumber = previouscaseNumber - 1;
    }
    caseNumberField.value = newcaseNumber;
    return newcaseNumber;
}
function updatePrice(newcaseNumber) {
    console.log({newcaseNumber})
     const totalNumber = newcaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    
    caseTotalElement.innerText = totalNumber;
    console.log('update from case')

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newcaseNumber = updateNumber(true);
    updatePrice(newcaseNumber);
    calculateSub(); 
    console.log('plus from case')
});
document.getElementById('btn-case-minus').addEventListener('click', function () {
   
     const newcaseNumber = updateNumber(false);
    updatePrice(newcaseNumber);
    calculateSub();
    console.log('minus from case')

});