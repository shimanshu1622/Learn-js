let score = 33;

// const {score} = req.body; taking input from server 
// but we dont know that it is string or number

console.log(typeof score); // number

let score1 = "33";
console.log(typeof score1); // string
console.log(typeof (score1)); // string

let newScore = Number(score1); // convert string to number "33" -> 33
console.log(typeof newScore); // number

let score2 = "33abc";
console.log(typeof score2); // string

let newScore2 = Number(score2); // convert string to number  33abc -> NaN
console.log(typeof newScore2); // number
console.log(newScore2); //NaN -> not a number

let score3 = null
let newScore3 = Number(score3); // null -> 0
console.log(newScore3); // 0    
console.log(typeof newScore3); // number

let isLoggedIn = true;
let newScore4 = Number(isLoggedIn); // true -> 1 ; false -> 0
console.log(newScore4); // 1
console.log(typeof newScore4); // number        

let score5 = undefined;
let newScore5 = Number(score5); // undefined -> NaN
console.log(newScore5); // NaN
console.log(typeof newScore5); // number

// "33" -> 33
// "33abc" -> NaN
// null -> 0
// true -> 1 ; false -> 0
// undefined -> NaN

//Number
//String
//Boolean


// "" -> false ; 0 -> false ; null -> false ; undefined -> false ; NaN -> false
// "himanshu" -> true ; 33 -> true ; -33 -> true ; 3.14 -> true ; [] -> true ; {} -> true

//operations

// + -> addition - -> subtraction  * -> multiplication  / -> division  % -> modulus ** -> power

console.log(3 + 3); //6
console.log(3 + "3"); //33  -> "33"
// number + string -> string (concatenation)
console.log("1"+2+2); //"122"
console.log(1+2+"2"); //"32"

let str1 = "Himanshu";
let str2 = " Singh";
console.log(str1 + str2); // Himanshu Singh

let num1, num2 , num3;
num1 = num2 = num3 = 2 + 2; // right to left evaluation
console.log(num1,num2,num3); // 4 4 4

let gamecounter = 100;
++gamecounter; // increment by 1
console.log(gamecounter); //101
gamecounter++; // increment by 1
console.log(gamecounter); //102






