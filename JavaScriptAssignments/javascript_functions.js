//TASK 1
let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    qoutient: 20
};
//TASK 2
function showData(object){
    console.log('===========================');
    console.log(`First NUmber: ${object.num1}`);
    console.log(`Second Number: ${object.num2}`);
    console.log(`The sum is: ${object.sum}`);
    console.log(`The difference is: ${object.difference}`);
    console.log(`The product is: ${object.product}`);
    console.log(`The qoutient is: ${object.qoutient}`);
}

//TASK 3
function add(num1,num2){ return num1 + num2; }
function subtract(num1,num2){ return num1 - num2; }
function multiply(num1,num2){ return num1 * num2; }
function divide(num1,num2){ return num1 / num2; }
//TASK 4
function  newSetOfNumbers(num1,num2){
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = add(num1,num2);
    obj.difference = subtract(num1,num2);
    obj.product = multiply(num1,num2);
    obj.qoutient = divide(num1,num2);
}
//TASK 5
showData(obj);
newSetOfNumbers(200,10);
showData(obj);
newSetOfNumbers(500,20);
showData(obj);