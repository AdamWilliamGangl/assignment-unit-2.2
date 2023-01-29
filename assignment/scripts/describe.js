// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to the string 'Dane'.
// We have an if/else conditional. It checks if the variable 'name' is set to the string 'Mary', if it is
//it console logs 'Hi, Mary!'.
// if the variable 'name' is not set to the string 'Mary' then it console logs the string 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make two different variables, 'secret' which is given no value and 'code' which is given a number value of 123.
// we have a conditional that checks if the variable 'code' is exactly equal to the number value of 123. If it is then
// it changes the value of variable 'secret' to the string 'super' and the variable 'code' to the number value 246.
// we have another conditional that now checks if the variable 'code' is a number value greater than 250.
// The variable 'code' is not greater than 250, so it will not change the value of the variable 'secret'.
// Console log displays the current value for the variable 'secret', which is currently set to 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables, 'isStudent' - which is a bulleon set to true, age - which is set to the number 34 and zip - which is set to the number 55407
// We have an if, else if, else if, else conditional. If the variable isStudent is set to true and the zip code is greater than the number value 80000
// then the console log would display 'You're a student on the West Coast'. This is not the case, so we move down to the next portion of the conditional.
// The next portion of the conditional checks if the variable isStudent is false or if the variable age is less than the number value 30. This is not the case so we move to the next portion of the conditional.
// The next portion of the conditional checks if the variable isStudent is true. If so it will console log the string "Welcome to Prime!". This conditional is fulfilled so the console log will display this message.
// If none of the prior conditions had been met the console log would display the string 'How about the weather?'. Another condition previously was met, so this console log will not run.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//FIX
// colorOne should be set to 'blue' instead of its current value of 'red'.
// colorTwo should be set to 'red' instead of its current value of 'blue'.
// Since the if ( mix === true ) condition has been met, a line of code should be added within the conditional to set colorTwo = 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX
// the conditional currently reads or ( || ), it should be changed to and ( && )

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//FIX
//If conditional currently is checking if minAge is less than or equal to age and should instead check if age is greater than or equal to minAge
//like this: if(age >= minAge)
//Due to our above change we need to change the console log within the if portion of the conditional to read 'enter'
//Finally this would then cause us to need to change our final console log to read 'no entry' given the multiple required changes I will rewite the entire conditional below:
/*
if(age >= minAge){
  console.log('enter');
}
else {
  console.log ('no entry');
}

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

