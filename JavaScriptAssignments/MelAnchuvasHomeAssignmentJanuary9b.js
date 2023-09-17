//Task 1 Temperature Converter
function convertCelsiusToKelvin(tempCelsius){
    let tempInKelvin = tempCelsius + 273.15;
    return tempInKelvin;
}
function convertFahrenheitToKelvin(tempFahrenheit){
    let tempInKelvin = (tempFahrenheit-32)*5/9+273.15; 
    return Math.round(tempInKelvin*100)/100;//returns with 2 decimal points
}
console.log("--TASK 1--");
console.log(convertCelsiusToKelvin(84));//375.15
console.log(convertFahrenheitToKelvin(84));//302.04

//Task 2 Tip Calculator
function computeTip(totalBill){
  let tipAmount = (10/100)*totalBill;
  return tipAmount;
}
let yourBill = 10000;
let totalBill = yourBill+computeTip(yourBill);
console.log("--TASK 2--");
console.log("Your meal cost is "+yourBill+" plus 10% of tip that is "+computeTip(yourBill)+". Your total billing is "+totalBill+".");