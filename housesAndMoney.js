// variables assigned here 
const symbol = '$';
let money = 10000;
let bankLoan = 1000;
let house = 3;
let housePrice = 1500;
let salary = 1000
//Showing the starting money and houses 
updateMoneyAndHouses();


// If the house number is greater than zero and if the money is greater than 1500 (the house price)
// then you can purchase the house by clicking the buttons yes or no 
if (house > 0) {
  if (money > housePrice) { 
    question = 'Would you like to purchase this house for ' + symbol + housePrice + '?';

    console.log(question);
    document.getElementById("housePurchaseQuestion").innerHTML = question;
  }
  
  // Otherwise, these will print 
  else {
    console.log('You are too POOR to purchase this house.');
      }
}
else {
  console.log('No houses available!');
}

// Defined the function here basically updating the amt of money and houses everytime someone buys 
function updateMoneyAndHouses() {
  document.getElementById("cash").innerHTML = 'Current Balance: ' + symbol + money;
  document.getElementById("housesAvailable").innerHTML = 'Houses Available: ' + house;
}

// What'll happen if you press the "yes" button, basically reduces the house number and also your money
function buttonPress(pressed) {
  if (pressed) {
    if (house > 0) {
      money -= housePrice;
  
      logOutput('House has been purchased!'); 
      house--;
      logOutput('house: ' + house);
      updateMoneyAndHouses();
    }
    else {
      document.getElementById("noHouses").innerHTML = 'No houses available'
      console.log('No houses available');
    }
  }
}

function logOutput(text) {
    console.log(text);
  document.getElementById("output").innerHTML = text;
}
      

salary === 1000 ? logOutput('Current salary is good') : logOutput('You are poor');