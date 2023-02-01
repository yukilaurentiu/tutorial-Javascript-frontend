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

function calcAverage(first, second, third){
  return (first + second + third) / 3;
}

let scoreDol = calcAverage(44, 23, 71);
let scoreKoa = calcAverage(65, 54, 49);


function checkWinner(avgDolhins, avgKoalas){
  if(avgDolhins >= avgKoalas * 2){
    console.log('Winner is Dolhins');
  } else if (avgKoalas >= avgDolhins * 2){
    console.log('Winner is Koalas');
  } else console.log('No winners');
}

checkWinner(scoreDol,scoreKoa);

scoreDol = calcAverage(85, 54, 41);
scoreKoa = calcAverage(23, 34, 27);

checkWinner(scoreDol,scoreKoa);
// ------------------------------------------------

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
friends.unshift('John');
friends.pop(); // last element
friends.shift(); //first element
friends.includes('Steven'); //boolean

// ------------------------------------------------
// challenge 2

const bills = [125, 555, 44];

function calcTip(bill){
  if(bill >= 50 && bill <= 300){
     return bill * 0.15;
  } else {
    return bill * 0.2; 
  }
}


// const ti = bills.map((v) => calcTip(v))
// const to = bills.map((v) => calcTip(v) + v)
// console.log(to)

let tip = calcTip(bills[0])
const tips = [tip]
tip = calcTip(bills[1])
tips.push(tip + bills[1])
tip = calcTip(bills[2])
tips.push(tip + bills[2])
console.log(tips)


const total = [(tips[0] + bills[0])]
total.push(tips[1] + bills[1])
total.push(tips[2] + bills[2])
console.log(total)

// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
// ------------------------------------------------

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  friends: ['Michael', 'Peter', 'Steven'],
  birthYear: 1991,
  job: 'teacher',
  hasDriverlicense: true,

  calsAge: function(){
    console.log(this);
    return 2037 - this.birthYear;
  },

  calsAge1: function(){
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function(){
    const answer = this.hasDriverlicense ? 'a' : 'no';
    return `${this.firstName} is a ${this.calsAge()}-year old ${this.job},
    and he has ${answer} driver's license.`
  }

}

console.log(jonas.firstName)
console.log(jonas['firstName'])

jonas.location = 'Portugal'

//Challenge
const bestFriend = jonas.friends[0];
console.log(bestFriend)

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
