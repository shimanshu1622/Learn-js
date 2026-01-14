console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// type conversion in comparision

console.log("2" > 1); // true  -> "2" -> 2
console.log("02" > 1); // true  -> "02" -> 2

console.log("2" < "12"); // false -> lexicographical comparison
// "2" -> char code 50
// "1" -> char code 49

console.log(null > 0); // false  -> null -> 0
console.log(null == 0); // false -> null -> 0
console.log(null >= 0); // true  -> null -> 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// NaN -> not a number
console.log(NaN == NaN); // false
console.log(NaN > 0); // false
console.log(NaN < 0); // false

//=== strict equality operator

console.log(2 === 2); // true
console.log(2 === "2"); // false
