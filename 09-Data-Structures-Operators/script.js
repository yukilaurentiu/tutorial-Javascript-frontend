'use strict';

// Data needed for first part of the section
const wholeWeekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hour = {
  [wholeWeekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  hour,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be deliverted to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    [wholeWeekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring Arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondry] = restaurant.categories;
console.log(main, secondry);

// console.log(main, secondry)

// Switching variable
// const temp = main
// main = secondry
// secondry = temp
// console.log(main, secondry)

[main, secondry] = [secondry, main];
console.log(main, secondry);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
// --------------------------------------------------------------------------
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:00',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
// gives new key name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values [] empty array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutaiting variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a } = obj); // {} is code block
console.log(a, b);

// Nested
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// --------------------------------------------------------------------------
const arr1 = [7, 8, 9];
const newArr1 = [1, 2, ...arr1]; //spread operator
console.log(newArr1);
console.log(...newArr1); // value out of array

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menuComplete = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menuComplete);

//Object is NOT iterable
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real example
const ingredients = [
  // prompt(`Let\'s make pasta!..with?? `),
  // prompt(`..with?? `),
  // prompt(`the last with?? `),
];
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foudedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, 'and', restaurantCopy.name);

// --------------------------------------------------------------------------

const [c, d, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// skipped menu(pasta) is not in the array
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(8, 2, 3, 4, 5);
const g = [23, 5, 7];
add(...g);

// Nullish coalesing operator (Null and undefined)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(`correct guests number are ${guestCorrect}`);

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operater
rest2.numGuests = rest2.numGuests || 10; //added numGuest
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
console.log(rest1);

// AND assignment operater
rest2.owner = rest2.owner && '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest2);
console.log(rest1);

// --------------------------------------------------------------------------

menuComplete;

for (const item of menuComplete) console.log(item);
for (const item of menuComplete.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menuComplete.entries()) {
  console.log(`${i + 1}: ${el}`);
}

if (restaurant.hour && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// --------------------------------------------------------------------------
//With optional chainig
console.log(restaurant.openingHours?.mon?.open); //-> undifind

for (const day of wholeWeekdays) {
  // ?? Nullish values are null and undifined NOT 0
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exsit');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exsit');

//Arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}
];

console.log(users[0]?.name ?? "User array is empty")
// if(users.length > 0) console.log(users[0].name);
// else console.log("User array is empty") // same resoult

//Propetry NAMES
const properties = Object.keys(openingHours)
let openStr = `We are open on ${properties.length}days: `;

for (const day of properties){
  openStr += `${day},`;
}
console.log(openStr)

//Property VALUES
const value = Object.values(openingHours);

// Entrie object
const entries = Object.entries(openingHours)
console.log(entries) // key and value in array

// [key, value] 
for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}

// -------------------------------------------------------------------------

// Set -> unique array
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Risotto',
  'Pasta'
]);

console.log(orderSet.size); // 3 
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Pasta');
// orderSet.clear(); <- make empty

for(const order of orderSet){
  console.log(order);
}
// -------------------------------------------------------------------------

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed')

console.log(rest.get('name'))

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'));
// set a key h1 
rest.set(document.querySelector('h1'), 'Heading');  
rest.set([1,2], 'Test')
// cannot get value, because both array stored different place
console.log(rest.get([1,2])); 
// so first make initial array then it works

const question = new Map([
  ['question', 'What is the best programmin languege in the world?'
],
[1, 'C'],
[2, 'Java'],
[3, 'Javescript'],
['correct', 3],
[true, 'Correct'],
[false, 'Try again']
])

console.log(question)

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap)

for (const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//Quiz app
// const answer = Number(prompt('Your answer')); //convert number
const answer = 3;
console.log(answer);

if(answer === 1 || answer === 2 || answer === 3){
  // if (answer === question.get('correct')){
  // console.log(question.get(true))
  // } else {
  //   console.log(question.get(false));
  // }
  console.log(question.get(question.get('correct') === answer))
} else console.log('Please type only 1,2 or 3')


//Convert map to array
console.log([...question])
// console.log(question.entries())
console.log([...question.keys()])
console.log([...question.values()])
// --------------------------------------------------------------------------
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[1]);
console.log('B737'[0]);
console.log(airline.length);
console.log(airline.lastIndexOf('r')) // showing last r index
console.log(airline.slice(4)); // showing substrings from index 4 
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') +1));


console.log(airline.toLowerCase());

//Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorret = passengerLower[0].toUpperCase() + passengerLower.slice(1);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);


//replacing 
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.')

//Booleans
const plane1 = 'A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.startsWith('Air')); //false
// .endWith()

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife')|| baggage.includes('gun')){
    console.log('You are NOT allowed on board')
  } else {
    console.log('Welcome aboard!')
  }
}
checkBaggage('I have a laptop, some food and a pocket knife')
checkBaggage('Socks and camera')
checkBaggage('Go some snacks and a gun for protection')

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName)

const capitalizedName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizedName('jessica ann smith davis')

// Padding 
const message = 'Go to gate 23!'
console.log(message.padStart(20, '+').padEnd(30, '+'))

const maskCreditCard = function(number){
  const str = number + ''; // become all string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43212356876983756));

// Repeat 
const message2 = 'Bad weather... All departures delayed...'

const planeInline = function(n){
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`)
};

planeInline(5);
planeInline(3);
