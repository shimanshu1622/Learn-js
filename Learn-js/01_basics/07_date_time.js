let myDate = new Date()
console.log(myDate); // current date and time 2026-01-20T10:45:05.503Z
console.log(myDate.toString()); //  Tue Jan 20 2026 16:15:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Tue Jan 20 2026
console.log(myDate.toLocaleString()); //20/1/2026, 4:15:05 pm
console.log(myDate.toJSON()); //2026-01-20T10:52:38.968Z
console.log(typeof myDate); // object

// Different ways to create date object

// let myCreatedDate = new Date(2026, 0, 20) // year , month (0-11) , date
// let myCreatedDate = new Date(2026, 0, 20, 5, 3) // year , month (0-11) , date , hours , minutes
// let myCreatedDate = new Date("2026-01-20") // YYYY-MM-DD
let myCreatedDate = new Date("01-20-2026") // MM-DD-YYYY
console.log(myCreatedDate.toDateString()); 
// console.log(myCreatedDate.toLocaleString()); // 14/1/2026, 12:00:00 am

// Date Methods

let myTimeStamp = Date.now() // timestamp in milliseconds from 1 Jan 1970

// console.log(myTimeStamp); // 1705736105503ms
// console.log(myCreatedDate.getTime()); // 1673653800000ms 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);  // current date and time 2026-01-22T15:10:22.690Z
console.log(newDate.getMonth() + 1); // month 0-11 0(jan) + 1 = 1 (jan)
console.log(newDate.getDay()); // day of week 0-6 0(sun) 1(mon) 2(tue)
console.log(newDate.getDate()); // date 1-31

// `${newDate.getDay()} and the time ` for printing

newDate.toLocaleString('default', {
    weekday: "long",
    
})