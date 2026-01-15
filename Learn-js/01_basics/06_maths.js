const score = 400;
console.log(score); // 400 typeof number

// we can also create number using Number constructor
const balance = new Number(100);    
console.log(balance); // [Number: 100] typeof object
console.log(typeof balance); // object

//toString method converts number to string
console.log(balance.toString()); // "100"
console.log(typeof balance.toString()); // string

//toFixed use to set decimal points
console.log(balance.toFixed(2)); // "100.00"
console.log(typeof balance.toFixed(2)); // string

const num1 = 123.89;
const num2 = 12345.89;

//toPrecision method formats a number to a specified length
console.log(num1.toPrecision(5)); // "123.89"
console.log(num1.toPrecision(3)); // "124"
console.log(num2.toPrecision(3)); // "1.23e+4"

const hundred = 1006786957385;
console.log(hundred.toLocaleString()); // "1,006,786,957,385" 
console.log(hundred.toLocaleString('en-IN')); // "1,00,67,86,95,73,85" indian format

const maxValue = Number.MAX_VALUE; // 2^53 - 1
const minValue = Number.MIN_VALUE; // -(2^53 - 1)

const maxValueInt = Number.MAX_SAFE_INTEGER; // 2^53 - 1 //9007199254740991
const minValueInt = Number.MIN_SAFE_INTEGER; // -(2^53 - 1) //-9007199254740991

// MAX_VALUE VS MAX_SAFE_INTEGER
console.log(maxValue + 1); // 9007199254740992
console.log(maxValueInt+1); // 9007199254740992

/* what is the difference between MAX_VALUE and MAX_SAFE_INTEGER?
MAX_VALUE is the largest possible number in JavaScript, 
but beyond MAX_SAFE_INTEGER, JavaScript cannot accurately represent all 
integers due to precision limitations. 
Therefore, operations on numbers larger than MAX_SAFE_INTEGER 
may lead to unexpected results. */

// --------------------------------maths----------------------------
// Math is a built-in object that has properties and methods for mathematical constants and functions.
console.log(Math.PI.toFixed(2)); // 3.14
console.log(Math.abs(-6)); // 6 // absolute value
console.log(Math.round(4.6)); // 5  4.3->4
console.log(Math.ceil(4.2)); // 5  always round up
console.log(Math.floor(4.9)); // 4 always round down 4.757558 -> 4
console.log(Math.min(2,34,5,6,-9,0)); // -9
console.log(Math.max(2,34,5,6,-9,0)); // 34
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2,3)); // 8  2^3
console.log(Math.random()); // random number between 0 to 1

console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 to 10
// math.floor used to round down the number like 4.56756 -> 4
// Math.random() * 10 gives number between 0 to 9.99999
// Math.floor(Math.random() * 10) gives number between 0 to 9
// adding +1 gives number between 1 to 10

// generate random number between min and max
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // random number between 10 to 20

/* floor used to round down ,
random used to generate random number between 0 to 1,
multiplying with (max-min+1) to get range 
and adding min to shift range to start from 10 */




