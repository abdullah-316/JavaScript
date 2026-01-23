

// Flasy Values: it define as ||
// 0, false, -0, BigInt(0n), empty string(""), null, undefined, NaN

let count = 0
console.log(count || 10);


// Truthy Values"
// Everything else EXCEPT Flasy Values 
// But also "0", 'false', (), {}, function(){}


// Check Array is empty:
let myArr = []

if (myArr.length === 0) {
    console.log("Array is empty");
}
else{
    console.log("NOT empty");
}


// check Object is empty 
let myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}
else{
    console.log("NOT empty");
}
