'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovments = function(movements){
  // delete old data
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html =`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1 }${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};
displayMovments(account1.movements);
/////////////////////////////////////////////////

/////////////////////////////////////////////////

// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(-1));// last array 
// arr.slice() and ([...arr]) is same

// SPLICE
console.log(arr.splice(2)); // changes original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];

// REVERSE
console.log(arr2.reverse());  // changes original array

// CONCAT
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
// console.log([...arr, ...arr2]) is same, but not change original

// JOIN
console.log(letters.join(' - '));

// AT
arr = [23, 11, 64];
console.log(arr.at(0));
console.log(arr.slice(-1)[0]); //last element
console.log(arr.at(-1));

// FOREACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const [i ,movement] of movements.entries()){  
  if(movement > 0){
    console.log(`Movement ${i+1} You deposited ${movement}`)
  } else {
    // abs is remove - sign
    console.log(`Movement ${i+1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH-------')
movements.forEach(function(movement, index, array){
  if(movement > 0){
    console.log(`Movement ${index +1} You deposited ${movement}`)
  } else {
    // abs is remove - sign
    console.log(`Movement ${index +1} You withdrew ${Math.abs(movement)}`);
  }
})

// 0: function(200)
//1: function(450) .... 
/////////////////////////////////////////////////
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})

// SET
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR']);
currenciesUnique.forEach(function(value, _, m){
  console.log(`${value}: ${value}`);
});

