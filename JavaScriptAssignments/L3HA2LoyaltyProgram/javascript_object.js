//TASK 1
let customer = {
    customer_name : "Johnny Manggo",
    points : 12300,
    cart : [
        {item:"Shampoo",quantity:2,price_$:3},
        {item:"Soap",quantity:2,price_$:2},
        {item:"Toothbrush",quantity:1,price_$:3} 
    ]
};
//TASK 2 
console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`);
console.log(`Your current points are: ${customer.points} `);
//TASK 3 and TASK 4
console.log("Purchased Items:");
let total_bill = 0;
for(let i=0; i<customer.cart.length; i++){
    console.log(`${customer.cart[i].quantity}X${customer.cart[i].item}----$ ${(customer.cart[i].price_$*customer.cart[i].quantity).toFixed(2)}`);
    total_bill += customer.cart[i].price_$*customer.cart[i].quantity;
    customer.points += customer.cart[i].quantity *1;
}
console.log(`Total Bill: ${(total_bill).toFixed(2)}`);
console.log(`New Current Points: ${customer.points}`);