
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