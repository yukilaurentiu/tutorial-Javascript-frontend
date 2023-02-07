'use strict';

function calcAge(birthYear){
  const age = 2037 - birthYear
  function printAge(){
    let output = `${firstName}, You are ${age}, born in ${birthYear}`
    console.log(output)

    if(birthYear >= 1981 && birthYear <=1996){
      // Creating NEW variable with same name
      const firstName = 'Steven'
      var millenial = true;
      const str = `${firstName}, you're a millenial`
      console.log(str)

      // reassign output
       output = 'NEW OUTPUT!'

      function addEventListener(a, b){
        return a + b
      }
    }
    console.log(millenial)
    // console.log(add(2,3))
  }
  printAge();
  return age
}

const firstName = 'Jonas'
calcAge(1991)

// Cannot access
// console.log(age)
// printAge()

// --------------------------------------------------

//Hoisting

console.log(addDecl(1,2))
// console.log(addExpr(1,2))
// console.log(addArrow(1,2))

function addDecl(a,b){
  return a + b
}

var addExpr = function(a,b){
  return a + b
}

const addArrow = (a,b) => a + b

// var hoistiong == undefind
if(!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart(){
  console.log('All products deleted')
}
// --------------------------------------------------

const calAge = function(birthYear){
  console.log(2037 - birthYear)
  // console.log(this) // undefind
}

calAge(1991)

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this); // lexical this keyword
};

calAgeArrow(1980);

const yuki = {
  year: 1991, 
  calcAge: function(){
    console.log(this) //yuki object
    console.log(2037 - this.year)
  }
}

yuki.calcAge()

const matilda = {
  year: 2017
}

//method borrowing
matilda.calcAge = yuki.calcAge;
matilda.calcAge(); //this pointing on matilda object

const f = yuki.calcAge;
// f(); // there is no object
// --------------------------------------------------

// var firsTName = 'Matilda'

const jonas = {
  firsTName: 'Jonas',
  year: 1991, 
  calcAge: function(){
    console.log(this) //yuki object
    console.log(2037 - this.year)

    // const self = this; //self or that
    // const checkMillenial = function() {
    //   console.log(self.year >= 1981 && self.year >= 1996)
    // }

    const checkMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996)
    }
    checkMillenial();
  },

  greet: () => console.log(`Hey ${this.firsTName}`)
}

jonas.greet()
jonas.calcAge()
// --------------------------------------------------

// coping object 
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica)
jessicaCopy.lastName = 'Davis'
// console.log(jessica, jessicaCopy)

jessicaCopy.family.push('Mary') // Both got 'Mary' because nested
console.log(jessica, jessicaCopy)

