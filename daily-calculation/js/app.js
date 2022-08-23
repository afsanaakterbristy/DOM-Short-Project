document.getElementById('calculate').addEventListener('click', function () {
    const income = document.getElementById('income');

    const finalIncomeString = income.value;
    const finalIncome = parseInt(finalIncomeString);
    const food = document.getElementById('food');
    const finalFoodstring = food.value;
    const finalFood = parseInt(finalFoodstring);
    const rent = document.getElementById('rent');
    const finalRentString = rent.value;
    const finalRent = parseInt(finalRentString);
    const clothes = document.getElementById('clothes');
  
        const finalClothesString = clothes.value;
        const finalClothes = parseInt(finalClothesString);
        const totalExpense = document.getElementById('total-expense');
   
        const balance = document.getElementById('balance');
         
    if (isNaN(finalIncome)||isNaN(finalFood)|| isNaN(finalRent)|| isNaN(finalClothes)) {
        alert('Please Enter a number');
        return;
    } else if (finalIncome<=0|| finalFood<=0 || finalRent<=0 || finalClothes<=0) {
         alert('Please Enter a valiad number');
        return;
        
   }
    const totalAllExpense = finalFood + finalRent + finalClothes; 
      const allBalance = finalIncome - totalAllExpense;
    
    if (totalAllExpense > finalIncome) {
        alert('Income is low');
        
        
    } else {
          totalExpense.innerText = totalAllExpense;
           balance.innerText = allBalance;
    }
});

document.getElementById('save').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const inputValueString = saveInput.value;
    const inputValue = parseInt(inputValueString);
    
    if (inputValue > 100 || inputValue < 0) {
        alert('Please enter below 100%');
        return;
    }
    const balance = document.getElementById('balance');

    const finalbalance = balance.innerText;
   
    const saving =finalbalance * inputValue / 100;

     
    const savingAmount = document.getElementById('saving-amount');
       if (saving> finalbalance) {
        alert('Savingamount is more finalbalance');
        return;
       } else {
        savingAmount.innerText = saving;     
}
  
 
    const remaining = document.getElementById('remaining');

    const finalRemaining = finalbalance-saving;
    remaining.innerText = finalRemaining;  
  
  


    
})