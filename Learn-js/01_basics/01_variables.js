const accountId = "acc_12345";
let accountEmail = "hs@gamil.com";  // scoped hai [prefered]
var accountPassword = "password";   // scoped nahi hai 
accountCity = "New York";
let accountState;

console.log(accountId);
console.table([accountId,accountEmail, accountCity,accountPassword, accountState]);

// accountId = "acc_67890";  not allowed as it is constant 
accountEmail = "hima@gmail.com";
accountPassword = "newpassword123";
accountCity = "Los Angeles";
accountState = "California";

console.table([accountId,accountEmail, accountCity,accountPassword, accountState]);