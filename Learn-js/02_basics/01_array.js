// array : js array are resizable and can contain mix of different data types

let arr1 = [1,2,true,"shadow",null,undefined,"himanshu",8];
typeof arr1; // object

console.log(arr1[arr1.length]); //ArrayOutOfBound - error nahi aayega bcz they are resizeable
console.log(arr1[arr1.length-1]); //last element
console.log(arr1[-1]); //unlike python , js & java both not allow -ve indexing for last element
// unlike like java, it will not give error, js - say "undefined"

console.log(arr1);// [ 1, 2, true, 'shadow', null, undefined, 'himanshu', 8 ]

arr1[8] = 67;
console.log(arr1); // [ 1, 2, true, 'shadow', null, undefined, 'himanshu', 8, 67 ]


// arr1[12] = "13_element";
// console.log(arr1); 
/*[
  1,            2,
  true,         'shadow',
  null,         undefined,
  'himanshu',   8,
  67,           <3 empty items>,
  '13_element'
] */

console.log(arr1[10]);

arr1[-1] = "hey";
console.log(arr1); 
/* 
[
    1,          2,
    true,       'shadow',
    null,       undefined,
    'himanshu', 8,
    67,         '-1': 'hey'  //key:value
    ]
    */
   
arr1['shadow'] = "singh";
console.log(arr1); 
console.log(arr1[13]); 


let arr2  = [1,2,3];

console.log(arr2);
console.log(arr2[2]);
console.log(arr2.length);

arr2[-1] = "sahil";

console.log(arr2);
console.log(arr2[3]); //undefined
console.log(arr2.length); //3

arr2['hey'] = "its";

console.log(arr2);
console.log(arr2[4]); //undefined
console.log(arr2.length); //3




arr2["hey"];



//array methods

console.log("methods");

arr10 = [1,2,3,4,5];
console.log(arr10);

arr10.push(8); //add element at last 
console.log(arr10);

arr10.push(12); //same
console.log(arr10);

arr10.pop(); //remove from last
console.log(arr10);
console.log(arr10);

arr10.unshift(-2); //add new element in start of array
console.log(arr10);

arr10.shift(); //remove the first element from array
console.log(arr10);

console.log(arr10.indexOf(3)); //2 
console.log(arr10.includes(8)); //true 

const arr11 = arr10.join(); //bind the array in string seprated by comma
console.log(arr11); //1,2,3,4,5,8
console.log(typeof(arr11)); //string

//slice , splice

const arr100 = [0,1,2,3,4,5];

console.log("A " ,arr100); // A  [ 0, 1, 2, 3, 4, 5 ]

const arr110 = arr100.slice(1,3); //1,2  -> 3 not included

console.log(arr110); //[ 1, 2 ]
console.log("B " ,arr100); // B  [ 0, 1, 2, 3, 4, 5 ]

const arr120 = arr100.splice(1,3); 
//1,2,3 -> full range included && 
// rest left items only will be original array 
// rest spliced items will re removed from original array

console.log(arr120); // [ 1, 2, 3 ]
console.log("C " ,arr100); // C  [ 0, 4, 5 ]

console.log("new");

const marvel = ["iron","spider","thor"];
const dc = ["super","bat","flash"];

// marvel.push(dc);
const newarr = marvel.concat(dc);

const allhero = [...marvel,...dc,...newarr]; //for conacating multiple arrays
console.log(marvel);
console.log(newarr);
console.log(allhero);

console.log(Array.from(123445)); // to convert it into array, need to perform some operation
console.log(Array.from("123445true"));  //['1', '2', '3', '4', '4', '5', 't', 'r','u', 'e']

const numarr = 123456;

const convertedNumArr = String(numarr).split('').map(Number) //converted array -> string -> number
console.log(convertedNumArr);

const convertedNumArr2 = Array.from(String(numarr),Number); //Arrays.from(iterable,mapFn)
console.log(convertedNumArr2);

// Array.from("123445true")    Array.from("123445true",String)
// both are not same , OUTPUT is same only first one is already string thats why output is same 
// Array.from([1, 2, 3], String);   ->   ["1", "2", "3"]
// Array.from([1, 2, 3]);           ->   [1, 2, 3]
// Array.from([true, null, undefined, {}]);  -> [true, null, undefined, {}]
// If you don’t pass a mapping function to Array.from, 
// it behaves like a simple iterator copy — it takes values exactly as they are.

//if we want to converted given variables in array then use Arrays.of(var1,var2,var3....);

const num1 = 100;
const num2 = 200;
const num3 = 300;

console.log(Array.of(num1,num2,num3));//[100,200,300]

 // cnverting array to string 

console.log(marvel.toString()); //iron,spider,thor


 













