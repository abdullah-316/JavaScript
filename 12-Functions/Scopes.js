
// There are many types of scope which are shown below
// Scope: means Variable defined inside a function are not accessiable from outside the outside the function

// 1- Global Scope: means accessiable outside the function
let a = 10;
const b = 20;

function fun() {
    let a = 40;
}

// console.log(a);
// console.log(b);


// 2- Block Scope: accessiable Inside the function
let x = 10;

if (true) {
    let x = 20;
    // console.log("INNER:", x);
}

// console.log(x);



// Examples:
function one() {
    const username = "@fahad09";

    function two() {
        const website = "udemy";
        console.log(username);
    }
    // cannot access outside the scope
    // console.log(website);
    
    // inner function called
    // two();
}
// one();


// Same as for IF else 
if (true) {
    const username = "@ali09";
    if (true) {
        const site = "youtube";
        // console.log(username);
    }
    // outside the scope gave error
    // console.log(site);
}
// outside the scope gave error
// console.log(username);



// function declaration:
// 1

console.log(expOne(5)); // I can call this where I want
function expOne(num) {
    return num + 1;
}


// 2 using expression:
// console.log(expTwo(10)); // But in that case I can't do that because I intailized my function into variable
const expTwo = function (num) {
    return num + 2;
}
console.log(expTwo(12));


