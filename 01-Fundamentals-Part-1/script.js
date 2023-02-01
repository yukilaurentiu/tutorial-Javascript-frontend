// Charenge 1 
// BMI = mass / height ** 2 

const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBmi1 = markMass1 / markHeight1 ** 2;
console.log(markBmi1);

const johnBmi1 = johnMass1 / johnHeight1 ** 2;
console.log(johnBmi1);

const markBmi2 = markMass2 / markHeight2 ** 2;
console.log(markBmi2)
const johnBmi2 = johnMass2 / johnHeight2 ** 2;
console.log(johnBmi2)

const markHigherBMI = markBmi1 > johnBmi1
const markHigherBMI2 = markBmi2 > johnBmi2
console.log(markHigherBMI);
console.log(markHigherBMI2);

// *******************************************
// Charenge 2


if(markBmi1 > johnBmi1) {
  console.log("Mark's BMI is higher than John's!")
  console.log(`Mark's BMI (${markBmi1}) is higher than John's (${johnBmi1})`)
} else {
  console.log("John's BMI is higher than Mark's")
  console.log(`Mark's BMI (${johnBmi1}) is higher than John's (${markBmi1})`)
}

if(markBmi2 > johnBmi2) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBmi2}) is higher than John's (${johnBmi2})`)
} else {
  console.log("John's BMI is higher than Mark's");
  console.log(`Mark's BMI (${johnBmi2}) is higher than John's (${markBmi2})`)
}

// *******************************************
// Charenge 3
let averageDol = (96 + 108 + 89) / 3 
let averageKoa = (88 + 91 + 110) / 3



if(averageDol > averageKoa && averageDol > 100){
  console.log('winner is Dolphins')
} else if (averageKoa > averageDol && averageKoa > 100){
  console.log('winner is Koalas')
} else if (averageDol === averageKoa && (averageDol && averageKoa) > 100){
  console.log('both winner')
} else {
  console.log('no winner')
}

// *******************************************
// Charenge 4
const bill = 40
const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

