'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;

  //booking object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 400);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

// Passing by value and does NOT pass by reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23455678899
}

const checkIn = function(flightNum, passenger){
  // flightNum doesn't change
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  // if(passenger.passport === 23455678899){
  //   alert('Checked in')
  // } else{
  //   alert('Wrong passport!')
  // }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person){
  person.passport = Math.trunc(Math.random()* 1000000000);
}

// object points address of memory NOT value
// newPassport(jonas);
// checkIn(flight, jonas);

// ----------------------------------------------------------------

// higher-Order FUnctions

const oneWord = function(str){
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
  // rest ...
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higer-order  
// fn is call-back function
const transformer = function(str, fn){
  console.log(`Original string: ${str}`)
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)