const obj01 = new Object();  //object creation using singleton

obj01.name = "shadow";
obj01.age = 30;
obj01.roll = 234;
obj01.email = "me@shadow.in";

console.log(obj01);

//object inside object

const user01 = {
    email: "hey@itsme.in",
    username:{
        userfullname:{
            firstname: "himanshu",
            lastname: "singh"
        },
        // fullname: this.userfullname.firstname + " " + this.userfullname.lastname //wrong way
        fullname(){
            return this.userfullname.firstname + " " + this.userfullname.lastname
        }
    },
    age:45,
    get about(){
        return `hey my name is ${this.username.userfullname.firstname} ${this.username.userfullname.lastname} and my age is ${this.age} you can contact via ${this.email}`
    }
}
console.log(user01);
console.log(user01["username"]["fullname"]());
console.log(user01.username.fullname());
console.log(user01["about"]);
console.log(user01.about);

//about is used with get method so that no () , fullname was direct function so we have call it 


// combine multiple objects in one 

const obj02 = {1:"a",2:"b"};
const obj03 = {1:"a",2:"d"};

const obj04 = {obj02, obj03} // { obj02: { '1': 'a', '2': 'b' }, obj03: { '1': 'a', '2': 'b' } }
console.log(obj04);  //same array problem layers ke form me store ho gayi object ke andar object

const mergedObj = Object.assign({}, obj02, obj03); // { '1': 'a', '2': 'b' }  //overriding happend
console.log(mergedObj); //overriding happend because both have same key so last one override the first one
//Object.assign({}, obj1, obj2, obj3....) // it will merge all objects into first empty object {}

const obj05 = {...obj02, ...obj03} // { '1': 'a', '2': 'd' }  //overriding happend
console.log(obj05); //overriding happend because both have same key so last one override the first one

//destructuring of object

const company = {
    companyName: "shadowCreation",
    location: "India",
    email: "shadowcreation@gmail.com"
}

company.email; //for using email we have write the full way what if we want use it multiple times in any method 

const {email} = company;
console.log(email); //shadowcreation@gmail.com
console.log(company.email); //shadowcreation@gmail.com

const {companyName: n} = company
console.log(n);
console.log(company.companyName);
