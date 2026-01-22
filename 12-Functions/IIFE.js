

// Immediately Invoked Function Expressions (IIFE)
// IIFE means: It is a function expression that executes immediately after it is defined. Keeps variables private (no pollution of global scope)

// Syntax:
// 1- basic and named with parameter IIFE
(function myFunc(name) {
    console.log(`DB connected ${name}`);
})("Successfully");


// Using with Arrow Function
// Un-named without parameter IIFE
( () => {
    console.log("Connection Established");
})()

// Parentheses() UseCase: It converts the function into an expression so it can be executed immediately.