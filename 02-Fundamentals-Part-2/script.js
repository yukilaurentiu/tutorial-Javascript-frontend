"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcesseor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcesseor(2, 3));

// ------------------------------------------------

// Declaration function( can do hoisting)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Anonymous function / expression function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// Allow function
const calsAge3 = (birthYear) => 2037 - birthYear;
const age3 = calsAge3(1991);
console.log(age3);

const yearsUntinRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntinRetirement(1991, "John"));
console.log(yearsUntinRetirement(1980, "Bob"));

// ------------------------------------------------
// Charenge 1

function calcAverage(first, second, third) {
  return (first + second + third) / 3;
}

let scoreDol = calcAverage(44, 23, 71);
let scoreKoa = calcAverage(65, 54, 49);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log("Winner is Dolhins");
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log("Winner is Koalas");
  } else console.log("No winners");
}

checkWinner(scoreDol, scoreKoa);

scoreDol = calcAverage(85, 54, 41);
scoreKoa = calcAverage(23, 34, 27);

checkWinner(scoreDol, scoreKoa);
// ------------------------------------------------

const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
friends.unshift("John");
friends.pop(); // last element
friends.shift(); //first element
friends.includes("Steven"); //boolean

// ------------------------------------------------
// challenge 2

const bills = [125, 555, 44];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

// const ti = bills.map((v) => calcTip(v))
// const to = bills.map((v) => calcTip(v) + v)
// console.log(to)

let tip = calcTip(bills[0]);
const tips = [tip];
tip = calcTip(bills[1]);
tips.push(tip + bills[1]);
tip = calcTip(bills[2]);
tips.push(tip + bills[2]);
console.log(tips);

const total = [tips[0] + bills[0]];
total.push(tips[1] + bills[1]);
total.push(tips[2] + bills[2]);
console.log(total);

// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
// ------------------------------------------------

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  friends: ["Michael", "Peter", "Steven"],
  birthYear: 1991,
  job: "teacher",
  hasDriverlicense: true,

  calsAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },

  calsAge1: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    const answer = this.hasDriverlicense ? "a" : "no";
    return `${this.firstName} is a ${this.calsAge()}-year old ${this.job},
    and he has ${answer} driver's license.`;
  },
};

console.log(jonas.firstName);
console.log(jonas["firstName"]);

jonas.location = "Portugal";

//Challenge
const bestFriend = jonas.friends[0];
console.log(bestFriend);

console.log(jonas.calsAge());
console.log(jonas.age);

//Challenge
console.log(jonas.getSummary());
// getSummary: function(){
//   return `${this.firstName} is a ${this.calsAge()}-year old ${this.job},
//   and he has ${this.hasDriverlicense ? 'a' : 'no'}  driver's license`
// }
// ------------------------------------------------
// Challenge 3

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  weight: 78,
  calsBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  height: 1.95,
  weight: 92,
  calsBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

mark.calsBMI();
john.calsBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi}) is higher than 
     ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI(${john.bmi}) is higher than 
     ${mark.fullName}'s (${mark.bmi})!`
  );
}
// ------------------------------------------------

for (let rep = 1; rep <= 10; rep++) {
  console.log("hello");
}

const jona = [
  "Jonas",
  "Schmedtmann",
  ["Michael", "Peter", "Steven"],
  1991,
  "teacher",
];

for (let i = 0; i < jona.length; i++) {
  console.log(jona[i], typeof jona[i]);
}

const types = [];

for (let i = 0; i < jona.length; i++) {
  // types[i] = typeof jona[i];
  types.push(typeof jona[i]);
}

console.log("---ONLY STRINGS---");
for (let i = 0; i < jona.length; i++) {
  if (typeof jona[i] !== "string") continue;
  console.log(jona[i], typeof jona[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < jona.length; i++) {
  if (typeof jona[i] === "number") break;
  console.log(jona[i], typeof jona[i]);
}

// for (let rep = 1; rep < 11; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep < 11) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolloed a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
// ------------------------------------------------
// Challenge 4

const bIlls = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tIps = [];
let tOtals = [];

for(let i = 0; i < bIlls.length; i++){
  tIps.push(calcTip(bIlls[i]));
  tOtals.push(tIps[i]+ bIlls[i]);
}

console.log(tIps, tOtals)

function calcAverage(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum / arr.length
  
}

console.log(calcAverage(tOtals))