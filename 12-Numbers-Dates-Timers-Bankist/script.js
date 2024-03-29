'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-03-10T17:01:17.194Z',
    '2023-03-12T23:36:17.929Z',
    '2023-03-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-03-10T14:43:26.374Z',
    '2023-03-11T18:49:59.371Z',
    '2023-03-15T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date, locale){
  const calcDaysPassed = (date1, date2) => 
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;
  else{
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth()+ 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
}

const formatCur = function(value, locale, currency){
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(value)
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  console.log("cat")
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

   // getting the elements from other array using same index(iterraiting other array)
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements 
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent =formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function(){
  const tick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec =String(Math.trunc( time % 60)).padStart(2,0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    if(time === 0){
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started
      `;
      containerApp.style.opacity = 0;
      
    }
    // Decrese 1sec
    time--;
  // When 0 seconds, stop timer and logout user
}
  // Set time to 5 min
  let time = 10;
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000)
  return timer;
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === + inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    
  // Create current date and time
    const now = new Date();
    // Experiment API
    const options = {
      hour : 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'short'
    }
    // const locale = navigator.language;

    // iso language code table
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth()+ 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = + inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function(){

    
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    },2500)
  }
  inputLoanAmount.value = '';

  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);

// Conversion
console.log(Number('23'))
console.log(+ '23') // become number

// Parsing
console.log(Number.parseInt('30px', 10)); //works
console.log(Number.parseInt('e23', 10));  //not

console.log(Number.parseFloat('2.5rem'))

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+ '20X'));

// Checking ifvalue is number
console.log(Number.isFinite(20)) // is it number or not

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));

console.log(Math.sqrt(25));
const randomInt = (min, max) => Math.floor(Math.ramdom() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...(max - min + min) 

// Rounding integers
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

console.log(Math.trunc(23.3)); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(23.3)); //-24

// Rounding decimals
console.log((2.7).toFixed(0)) // retunr String

console.log( 5 % 2); // 5 = 2 * 2 + 1

labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
    // 0, 2, 4, 6
    if(i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if(i % 3 === 0 ) row.style.backgroundColor = 'blue';
  });
});

// 287,460,000,000 numeric separator
const diameter = 287_460_000_000;
const PI = 3.14_15;

console.log(2 ** 53 -1); // biggest number
console.log(Number.MAX_SAFE_INTEGER);
console.log(2313945306233267545742n);

// Operations type is BigInt
console.log(10000n + 10000n);
console.log(2313945306233267545742n * 10000n)

// Exceptions
console.log(20n > 15); //true
console.log(20n == '20'); //true

console.log(11n / 3n) // 3n

/////////////////////////////////////////////////

// Create a date
// const now = new Date();
console.log(new Date('Aug 02 2020 18:00:00'));
console.log(new Date(account1.movementsDates[0]));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
// get the year
console.log(future.getFullYear());
// .getMonth(), .get.Date(), .getDay(), getHours(), getMinuites(),
//  .getSeconds(), .toISOString(), .getTime()

// Timestamp
console.log(Date.now());
future.setFullYear(2040); //changed future variable;

console.log(Number(future));
console.log(+future);

// abas is only positive number
// const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

/////////////////////////////////////////////////
const num = 220346.98;

const op = {
  style: 'unit', 
  unit: 'mile-per-hour'
}
console.log('US: ', new Intl.NumberFormat('en-US', op).format(num));
console.log('DE: ', new Intl.NumberFormat('de-DE', op).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', op).format(num));
console.log(navigator.language,':', new Intl.NumberFormat(navigator.language).format(num));

/////////////////////////////////////////////////
const ing = ['ovieves', 'spinach'];

const pizzaTimer = setTimeout((ing1, ing2) => 
                   console.log(`Here is your pizza with ${ing1}${ing2}`), 3000, ...ing)

// setInterval every seconds
setInterval(function(){
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
}, 1000);


