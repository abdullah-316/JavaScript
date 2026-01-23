// Conditional statements:
// if, if else, if else-if else

// Comparison Operators -> Compare the values and return us in true or false form.
/*
    1- equal to          (==) ---> if a == b (check only values)
    2- type equal to    (===) ---> if 2 === "2" (check value + type) 
    3- not equal to      (!=) ---> if a != b 
    4- type not equal to(!==) ---> if 2 !== "3" (check value + type)
    5- Less than          (<) ---> if a < b
    5- greater than       (>) ---> if a > b
    6- Less than equal   (<=) ---> if a <= b
    7- greater than equal(>=) ---> if a >= b

*/

// Logical Operators: Used with conditions
/*
    1- AND(&&) ---> if(a == b && b == c) : true && false;  // false
    2- OR(||)  ---> if(a == b || b == c) : true || false;  // true
    3- NOT(!)  ---> if(!connected)       : !true;          // false
*/


// Ternary Operator: Short form of if...else.
/*
    condition ? value1 : value2
                  if      else
*/
let age = 20;
age >= 18 ? console.log("Adult") : console.log("Under Age");

// Nullish coalescing operator in JavaScript is ??.
// it returns the right-hand value only if the left-hand value is null or undefined.
let username = undefined;
console.log(username ?? "guest"); // output -> guest

let value = null;
console.log(22 ?? value);

let v1 = 10;
let v2 = 90;
let v3 = null;
console.log(v3 ?? v2 ?? v1);
