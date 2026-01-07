
const score = 100;

const balance = new Number(200)
// console.log(balance.toString());

// 1- If we need to converts Number into string so we use (toString())
let phone = 300;
phone = phone.toString();

// 1.1 If we need to check the type of variable so we use (typeof) Method
console.log(typeof phone);

// let x = 10;
// let y = x.toString();
// x += 5;

// console.log(x);
// console.log(y);
// console.log(typeof x, typeof y);


// 2- If we show the digits after decimal(points) value so we use (toFixed(fractionDigits))
// let PI = 3.1459;
// PI = PI.toFixed(2) 
// console.log(PI);
// console.log(typeof PI);
// NOTE: it gaves you return Type of String, and also make your value RoundOFF

// 3- When we need to get the specific value(Digit) so we use toPrecision()
// let value = 123.456;
// value = value.toPrecision(4);
// console.log(value);
// NOTE: it gaves you return Type of String

// 4- For the readabiltiy of the large Numbers(for Currency usage) we use toLocaleString()
// let income = 1000000;
// income = income.toLocaleString("en-PK");
// console.log(income);
// NOTE: it gaves you return Type of String


// 5- Parsing Convert String into Numbers
// A- If we need to convert String into Integer and remove decimals so we use parseInt()
// console.log(parseInt("10.99"));
// console.log(parseInt("20px"));

// B- To convert String into Decimal numbers so we use parseInt()
console.log(parseFloat("10.99"));
console.log(parseFloat("3.14abc"));



// ************* Math Functions ************* 

// 1- If we need to convert minus value into plus we use (Math.abs) function
console.log(Math.abs(-12));

// 2- To make Round off value we use (Math.round) function
console.log(Math.round(3.14));

// 3- To Round off the Upper value we use (Math.ceil) function
console.log(Math.ceil(3.2));

// 4- To Round off lower value we use (Math.floor) function
console.log(Math.floor(3.9));

// 5- To get Minimum Value we use (Math.min);
console.log(Math.min(5, 4, 9, 3));

// 6- To get Maximum Value we use (Math.max);
console.log(Math.max(3, 2, 8, 1));

// 7- If we need a Random value we use (Math.random)
console.log(Math.random());


// If we get Value without decimal and from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);


const max = 20;
const min = 10

// To get in between values
let number = Math.floor(Math.random() * (max - min + 1) + min);
console.log(number);

