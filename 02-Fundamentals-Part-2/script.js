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