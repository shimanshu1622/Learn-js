//object -> variable that can hold many values 
// objects are collections of key-value pairs
// objects are mutable, they are addressed by reference, not by value

// Ways to create js object 1. object literals , 2. singleton(using constructor method)

//

/* 
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.


*/

const obj1 = { //object literals
    name: "Himanshu",
    age: 23,
    location: "Noida",
    IsloggedIn: false,
    lastLogin: ["Monday","Saturday"],
    "Full name": "Himanshu Singh"
}

//how to access

console.log(obj1.name); //Himanshu
console.log(obj1["name"]); //Himanshu
// console.log(obj1.Full name); error wrong syntax that why so object["key"]
console.log(obj1["Full name"]); //Himanshu Singh

// change value of key
console.log(obj1);  //age: 25

obj1.age = 25;
obj1.salary = "90k"; // add new key-value
delete obj1.location; //delete the kay-value pair from object


console.log(obj1);  //age: 25

Object.freeze(obj1);  //obj1 is freeze no value can be change now 
// Now object is READ ONLY

obj1.age = 30; //it will not give any error but value will be not change 

console.log(obj1); //age: 25  //object is freeze cant change any value further after freezing 

//how to verify freeze state is any object 
console.log(Object.isFrozen(obj1));// true
console.log(Object.isExtensible(obj1));// false


//take any symbol and add it in object key then print it its datatype should be in symbol 

const sym1 = Symbol("hey");
const sym2 = Symbol("its");

const obj2 = {
    name: "Himanshu",
    age: 23,
    location: "Noida",
    sym1: "val1", //added to use it as symbol //but it will treated as normal String not Symbol
    [sym2]: "val2" //act as Symbol
}

console.log(obj2);
/* 
{
    name: 'Himanshu',
    age: 23,
    location: 'Noida',
    sym1: 'val1',  //normal key-value
    [Symbol(its)]: 'val2' //symbol
    }
    */
//    
// add function in object 
   
obj2.greeting = function(){
    console.log("hey its me");
}
    
console.log(obj2.greeting());

obj2.About = function(){
    return this.name.toUpperCase() + " is my name and my age is " + this.age;
}

// we can access the same object key value using the this method 

console.log(obj2.About); //[Function (anonymous)]
console.log(obj2.About()); // HIMANSHU is my name and my age is 23

// About without (), it will return the function definition
// we can also add methods while returning like toUpperCase() , indexOf() ..etc


const obj3 = {
    firstname: "Himanshu",
    Lastname: "Singh",
    age: 25,
    eyecolor: "brown"
}

// create copy of obj3 
const COPYobj3 = obj3;

COPYobj3.firstname = "SHADOW"; // this will change the value from both COPYobj3 & obj3
// bcz they both are pointing to the same object in the heap
//i.e. any chnges make in copy or first one will lead to change in every one 
console.log(obj3);
console.log(COPYobj3); 

//to avoid this we use Object.assign() method
const obj4 = Object.assign({},obj3); // now both are different object in heap memory
obj4.firstname = "SINGH"; // now this will not change the value of obj3

console.log(obj3);
console.log(obj4);

//object methods
console.log("object methods");
console.log(Object.keys(obj3)); //['firstname', 'Lastname', 'age', 'eyecolor']
console.log(Object.values(obj3)); //['Himanshu', 'Singh', 25, 'brown']
console.log(Object.entries(obj3)); // [ [ 'firstname', 'Himanshu' ], [ 'Lastname', 'Singh' ], [ 'age', 25 ], [ 'eyecolor', 'brown' ] ]
console.log(Object.hasOwn(obj3,'age')); //true
console.log(Object.hasOwn(obj3,'salary')); //false
console.log(obj3.hasOwnProperty('age')); //true       
console.log(obj3.hasOwnProperty('salary')); //false
//difference between hasOwn and hasOwnProperty
// hasOwn is static method of Object class
// hasOwnProperty is method of object instance
//hasOwnProperty is older method                        
// hasOwn is newer method
// both are used to check if object has specific key or not
// both return boolean value
// hasOwn is preferred over hasOwnProperty



    
    
    









