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


const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greet('Hello')('Jonas');

let greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });
  } 
 
}

lufthansa.book(239, "Jonas");
lufthansa.book(635, 'John');
console.log(lufthansa)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

//store variable book to function book
const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Sarah');
console.log(eurowings)

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
}

book.call(swiss, 582, 'Mary');
console.log(swiss);

// Apply method
const flightData = [582, 'George'];

// same resolute
book.apply(swiss, flightData);
book.call(swiss, ...flightData)
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steaven');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  this.planes++
  console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', 
  lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVat(100));


let addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  }
}

const addVAT = addTaxRate(0.23);

// ----------------------------------------------------------------

// Immediately Invoked Function
(function(){
  console.log('This will never run again')
})();

// ----------------------------------------------------------------

const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  }
}
const booker = secureBooking();
booker();
console.dir(booker);


// Example 1
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 777;
  f = function (){
    console.log(b * 2);
  };
};

g();
f(); // even g function finished excution, f can still excute using g function! 
// Re-assingning f function 
h();
f(); // now f function closure with h function

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);

  }, wait * 1000);

  console.log(`Will start boardinf in ${wait} seconds`)
}

boardPassengers(180, 3)