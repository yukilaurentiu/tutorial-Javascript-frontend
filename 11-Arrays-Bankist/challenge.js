/* 
Julia and Kate are doing a study on dogs. 
So each of them asked 5 dog owners about their dog's age, and stored the data into 
an array (one array for each). For now, they are just interested in knowing whether 
a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually 
have cats, not dogs! So create a shallow copy of Julia's array, and remove 
the cat ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const dogsJulia1 = [3, 5, 2, 12, 7]
const dogsJulia2 = [9, 16, 6, 8, 3]
const dogsKate1 = [4, 1, 15, 8, 3]
const dogsKate2 = [10, 5, 6, 1, 4]

const dogsJulia1Copy = dogsJulia1
const dogsJulia2Copy = dogsJulia2

function correctArr(arr){
  arr.splice(-2, 2)
  arr.shift()
  return arr
}

correctArr(dogsJulia1Copy);
correctArr(dogsJulia2Copy);

// console.log(dogsJulia1Copy, dogsJulia2Copy)

const checkDogs = function(ages){
  ages.forEach(function(age, i){
    if(age > 2){
      console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
    }
    else {
      console.log(`Dog number ${i+1} is still a puppy 🐶`)
    }
  })
};

checkDogs(dogsJulia1Copy);
checkDogs(dogsJulia2Copy);
checkDogs(dogsKate1);
checkDogs(dogsKate2);

// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function(dog, i){
//     if(age >= 3){
//       console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
//     }
//     else {
//       console.log(`Dog number ${i+1} is still a puppy 🐶`)
//     }
//   })
// }
// checkDogs([3, 5, 2, 12, 7], [9, 16, 6, 8, 3])

///////////////////////////////////////
// Coding Challenge #2
/*
They want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: 
  if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
  (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge = function(arr){
  const newArr = arr.map(function(age){
    if(age <= 2){
      return 2 * age;
    } else if (age > 2){
      return 16 + (age * 4);
    }
  })
  console.log(newArr)
  const adultDog = newArr.filter(age => age >= 18)
  const average = adultDog.reduce((acc, age) => {
    // no () parenthesis because acc is the total
    return acc + age / adultDog.length;
  })
  console.log(average)
}


calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
///////////////////////////////////////
// Coding Challenge #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAveHumanAge = arr => arr
  .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  
let answer = calcAveHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log('chalennge 03', answer)
///////////////////////////////////////
// challenge 4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is 
larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is
within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog,
  calculate the recommended food portion and add it to the object as a new property. 
  Do NOT create a new array, simply loop over the array. 
  Forumla: recommendedFood = weight ** 0.75 * 28. 
  (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether 
  it's eating too much or too little. HINT: Some dogs have multiple owners, 
  so you first need to find Sarah in the owners array, 
  and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
  and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
  like this: "Matilda and Alice and Bob's dogs eat too much!" 
  and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating 
  EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an 
  OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an 
  OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion 
  in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, 
        you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: 
        current > (recommended * 0.90) && current < (recommended * 1.10). 
        Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

 
const calcReccomendPortion= function(dogs) {
  // const dogsWeight = dogs.flatMap(dogs => dogs.weight);
  // console.log(dogsWeight)
  dogs.forEach(e => e.recFood = Math.trunc(e.weight ** 0.75 * 28));
  // const portion = dogsWeight.map(e => e * 0.75 * 28)
}

calcReccomendPortion(dogs);
console.log(dogs);


const sarahDog = dogs.find(e => e.owners.includes('Sarah'));

const checkFood = dog => (dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood* 1.10));


checkFood(sarahDog);
console.log(dogs)

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)

// const x = ownersEatTooMuch.reduce((acc, e) => acc + (e + ' and '), '').slice(0, -5) + `'s dogs eat too much!`

// console.log(x)
// console.log(ownersEatTooMuch.slice(-1).replace(' and', `'s dogs eat too much!`));

// ownersEatTooMuch.forEach(e => console.log(e))
//  console.log(`'s dogs eat too much!`);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too littel`);
  
let x = false;
dogs.forEach(dog => {
  if(dog.curFood === dog.recFood)
    x = true
})
console.log("EXACT food")
console.log(x)

x = false
 dogs.forEach(function(dog) {
  if(dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood* 1.10))
     x = true;
})
console.log("OK food")
console.log(x)
// 5, 6 
console.log(dogs.some(dog => dog.curFood === dog.recFood));
console.log(dogs.some(dog => (dog.recFood * 0.90) && dog.curFood < (dog.recFood* 1.10)))

// 7
console.log(dogs.filter(checkFood));

// 8
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSorted);