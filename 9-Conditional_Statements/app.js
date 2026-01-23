
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



let num = 12;

if ((num % 3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
    console.log("safe");
}
else{
    console.log("unsafe");
    
}

// Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2
let n1 = 32;
let n2 = 47852;

if(n1 % 10 === n2 % 10){
    console.log("Same digits");
}
else{
    console.log("No, not a Same digits");
}