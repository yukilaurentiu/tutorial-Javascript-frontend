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


const displayMovements = function(movements, sort = false){
  // delete old data
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;
  movs.forEach(function (mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html =`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1 }${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};

const clacDisplayBlance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
}


const calcDisplaySummary = function(acc){
  const incomes = movements.filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements.filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements.filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate/100)
  .filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;

}

const createUsernames = function(accounts){
  accounts.forEach(function(acc){
    acc.username =  acc.owner.toLowerCase().split(' ').map(function(name) {
      return name[0];
    }).join('');
  })
 
}
createUsernames(accounts);

// Event handler
let currentAccount; 
btnLogin.addEventListener('click', function(e){
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  // console.log(currentAccount)
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    const updateUI = function(acc){
      // Display movments
      displayMovements(acc.movements);
      // Display balance
      clacDisplayBlance(acc);
      // Display summary
      calcDisplaySummary(acc);
    }    
    
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.valur = '';
  if(amount > 0 &&
    receiverAcc &&
     currentAccount.balance >= amount && 
     receiverAcc?.username !== currentAccount.username){
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // Update UI
      updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);

    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
})
btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && 
    Number(inputClosePin.value) === currentAccount.pin){
      const index = accounts.findIndex(acc => 
        acc.username === currentAccount.username)
      // Delete account
      accounts.splice(index, 1);
      // Hide UI
      containerApp.style.opacity = 0;
      inputCloseUsername.value = inputClosePin.valur = '';

    }
})

let sorted = false;
btnSort.addEventListener('click', function (e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
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

/////////////////////////////////////////////////
const eurToUsd = 1.1;
// map function does not affect original array
// const movementsUSD = movements.map(function(mov){
//   return mov * eurToUsd;
// })

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD);
const movementsDescription = movements.map((mov, i) =>
  `Movement ${i +1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescription);
/////////////////////////////////////////////////
const deposites = movements.filter(function(mov){
  return mov > 0;
});
console.log(deposites)

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
/////////////////////////////////////////////////
// accumulater -> snowball
const baLance = movements.reduce(function(acc, cur, i ,array){
  return acc + cur 
}, 0);
console.log(baLance);

// let balance2 = 0;
// for(const mov of movments) {
//   balance2 += mov;
// }

// Maxiumum value 
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD)
/////////////////////////////////////////////////
// find is not return array
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements, firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
/////////////////////////////////////////////////

// Equality
console.log(movements.includes(-130));
// console.log(movements.some(mov => mov === -130));
// SOME: Condition
const anyDeposit = movements.some(mov => mov > 1500); // true

// EVERY
console.log(account4.movements.every(mov => mov > 0)) 

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
/////////////////////////////////////////////////
const array = [[1,2,3], [4,5,6], 7,8];
console.log(array.flat()); // -> [1,2,3,4,5,6,7,8]

const arrDeep = [[[1,2],3], [4,[5,6]], 7,8]; 
console.log(arrDeep.flat(2)); // -> [1,2,3,4,5,6,7,8]

// get anly movements from object
const accountMovement = accounts.map(acc => acc.movements);
console.log(accountMovement);
const allMovements = accountMovement.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// const overalBalance = accounts
  // .map(acc => acc.movements)
  // .flat()
  // .reduce((acc, mov) => acc + mov, 0);

// flatmap is only on down flat
// const overalBalance = accounts
  // .flatmap(acc => acc.movements)
  // .reduce((acc, mov) => acc + mov, 0);

/////////////////////////////////////////////////
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());


// return < 0, A,B (keep)
// return > 0, B,A (switch)

// movements.sort((a,b) => {
//   // console.log(`a: ${a}`)
//   // console.log(`b: ${b}`)
//   if(a > b) return 1;
//   if(b > a) return -1;
// })

movements.sort((a,b) => a - b )
console.log(movements)
/////////////////////////////////////////////////
// Empty arrays + fill
const x = new Array(7); // empty 7 elements array
x.fill(1); // fill all 1 
x.fill(1, 3, 5); 
console.log(x);
// Array.from
const y = Array.from({length: 7}, () => 1);
const z = Array.from({length: 8}, (_, i) => i + 1);
console.log(z);



// labelBalance.addEventListener('click', function(){
// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI.map(e => e.textContent.replace('€', '')));
// });

labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), 
    e => Number(e.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // ... operater can use same way
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  });
  