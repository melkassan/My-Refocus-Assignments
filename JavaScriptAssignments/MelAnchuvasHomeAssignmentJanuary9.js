//TASK 1 CALORIE TRACKING APP
let calBurnPerMin = 225;//cycling per minute burns 225 calories 
let numOfMinSam = 30;//Sam cycles 30 min per day
let numOfCalLost = calBurnPerMin*numOfMinSam*7 ;//number of calories burn per week
console.log("Great work, Sam! After 0.5 hours of cycling every day for a week, you may lose a total of "+numOfCalLost+" calories.");

//TASK 2 SAVING APP
let samSaved = 7500;//sams money
let samGoal = 10000;//sams need to save
//let percentage = (samGoal-samSaved)*100/samGoal;//some formula
let percentage = (1-(samSaved/samGoal))*100;
console.log("Thank you for your discipline and hardwork, Sam! You are now "+percentage+"% from your goal of saving &#8369;"+samGoal+".");
