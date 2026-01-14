const name = "Himanshu";
const age = 22;

console.log("My name is"+ name + "and my age is " + age); //My name is Himanshu and my age is 22

console.log(`Hello my name is ${name} and my age is ${age}`); // Hello my name is Himanshu and my age is 22


const gameName = new String('himanshu-hc-com')

console.log(gameName[0]); // h
console.log(gameName.__proto__); // String methods and properties


console.log(gameName.length); // 15
console.log(gameName.toUpperCase()); // HIMANSHU-HC-COM
console.log(gameName.charAt(2));// m
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4) // 0 to 4-1 hima
console.log(newString); // hima

const anotherString = gameName.slice(-8, 4) // negative indexing  -8 from end to 4-1 from start
console.log(anotherString); // ""  as -8 is after 4

const newStringOne = "   singh    " // string with spaces 
console.log(newStringOne); // "   singh    "
console.log(newStringOne.trim()); // "singh"  removes spaces from start and end

const url = "https://shadow.com/himanshu20%singh" // string with url

console.log(url.replace('%20', '-')) // https://shadow.com/himanshu20-singh

console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); // [ 'himanshu', 'hc', 'com' ]  splits based on '-'

