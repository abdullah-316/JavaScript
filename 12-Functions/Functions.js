

// Function Syntax without parameters:
function myFunc(params) { 
    console.log("Hi Uce");
}

// function/method Call here 
myFunc();

// Important if we call function without parantheses() it would call as reference eg:
// myFunc;


// Function with Parameters
// In parantheses() we type num1 and num2 these are the parameters
function adding(num1, num2) {
    console.log(num1 + num2);
}
adding(10, 5) // these are call by value or passing by value


// Function by using return 
function multiple(number1, number2) {
    
    // let result = number1 * number2;
    // return result;

    // we can also write as
    return number1 * number2;
}
const answer = multiple(5, 4)
console.log(answer);



// Practice Example by using if condition:
function loggedIn(username) {
    // !(not operator) mean it changes the true value to false 
    if (!username) {
        console.log("Please enter username");
        return;
    }
    let msg = `${username} just logged in...`
    return msg;
}
// console.log(loggedIn("Ali"));


// function using rest(...) operator same as spread 
// Spread means to expand it and Rest means to bundled them
function cartPrice(...num) {
    return num
}
// console.log(cartPrice(100, 200, 300, 400));


// using more values
function cart(val1, val2, ...num) {
    return num
}
// console.log(cart(100, 200, 300, 400));


// function using objects
const user = {
    username: "Ahmed",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

// we can also write direct object
handleObject({
    username: "Moon",
    price: 299
});


// function using Arrays
const array = [10, 20, 40, 50];

function returnValue(getArray) {
    return getArray[2];
}
// console.log(returnValue(array));


// we can also write directly
console.log(returnValue([10, 20, 50, 60]));
