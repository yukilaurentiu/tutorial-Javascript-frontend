'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
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
    sat: {
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
const newArr1 = [1, 2, ...arr1]; //spred
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
const newRestaurant = {foudedIn: 1998, ...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant)

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurant.name, 'and', restaurantCopy.name)

// --------------------------------------------------------------------------

