
// 1 - Primitive (call by value)

// There are 7 primitive types:

// 1- String
let name = "Abdullah";

// 2- Number
let value = 100;
let score = 89.92;

// 3- Boolean
let isLoggedIn = true;

// 4- Null
let checkTemperature = null

// 5- Undefined
let userEmail;

// 6- Symbol
let id = Symbol('123');
let anotherId = Symbol('123');
// console.log(id === anotherId);
// Because symbol checks the unique value if you pass the same value from using another variable

7- BigInt
let stock = 621764786578567867856n
// console.log(stock);


// 2 - Non_Primitive (call by reference)


// 1 - Array
const fruits = ["Apple", "Mango", "Melon"];

// 2 - Objects

let username = {
    
    email: "abc@email.com",
    phone: 923000000
}
console.log();


// 3 - Functions

const myFunc = function () {
    console.log("OTC");
    
}

// Call here 
// myFunc();