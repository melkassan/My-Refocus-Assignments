/* 
let current_year = new Date().getFullYear();
const current_month = new Date().getMonth();

const birth_year = 1999;//user input
let birth_month = 6; //user input

console.log(`Patient's age: ${current_year - birth_year}`);
current_year-=1;

let age = current_year - birth_year;


if(birth_month<=current_month){
    age++;
   console.log(`Patient's accurate age: ${age}`);
}else{
    console.log(`Patient's accurate age: ${age}`);
}
 */
for(let i=1; i<=10; i++){
    /* console.log(i); */
    if(i%2 == 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}
console.log((true && false)?'this is true':'this is false');