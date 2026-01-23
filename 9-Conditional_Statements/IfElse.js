let myNum = 12;

if ((myNum % 3 === 0) && ((myNum+1 == 15) || (myNum-1 == 11))) {
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

// 4. Popcorn prices Example:
let size = 'xl';

if(size === 'xl'){
    console.log("Your popcorn price is 250 rupee");
}
else if(size === 'l'){
    console.log("Your popcorn price is 200 rupee");
}
else if(size === 'm'){
    console.log("Your popcorn price is 100 rupee");
}
else{
    console.log("Your popcorn price is 50 rupee");
}


// Question: Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let num = 50;

if(num % 10 == 0){
    console.log("Good");
    
}
else{
    console.log("Bad");
}