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

// --------------------------------------------------------------------------
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
