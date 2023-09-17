const heightInMeters = 1.73;
const weightInKilograms = 70;
const hvar = heightInMeters * heightInMeters;

const BMI = weightInKilograms/(heightInMeters*heightInMeters);

console.log(`Your height is ${heightInMeters} meters.
Your weight is ${weightInKilograms} kilos.
Your BMI scale is ${Math.trunc(BMI)}.`);