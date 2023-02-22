/* 
Write a program that receives a list of variable names written in 
underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
  first_name
Some_Variable 
   calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue! */


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textList = text.split('\n');

  for(const [i, text] of textList.entries()){
    const [first, second] = text.toLowerCase().trim().split('_');
    // console.log(text, first, second);
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
  }

});

// --------------------------------------------------------------------------
 // practice
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const getCode = function(code){
  return code.slice(0,3).toUpperCase();
}
console.log(flights.split('+'));

for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  // console.log(type)
  const output = 
  `${type.startsWith('_Delayed')? '🔴': ''}${type.replaceAll('_',
  ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 
  'h')})`.padStart(50);
  console.log(output)

}