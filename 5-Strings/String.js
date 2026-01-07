
let name = "Abdullah";
let marks = 80;

// String Interpolation or Template Literals (``)
// UseCase: API responses
// console.log(`Hi, I'm ${name}, my marks is ${marks}`);


//  ********** String Methods **********


const gameName = new String("Mathematics");

// 1- If we find the length of the String so we use (.length) function
// useCase: Password, username, OTP, message limit.
console.log(gameName.length);

// 2- If we need to make all of the letters in lower case so we use (.toLowerCase()) function
// useCase: Login systems, Search, Comparison strings
console.log(gameName.toLowerCase());

// 3- To make all of the letters in UPPER case so we use (.toUpperCase()) function
console.log(gameName.toUpperCase());

// 4- To get the Character from the String, we use (charAt(index)) function
console.log(gameName.charAt(5));

// 5- If we get the index of the string we use (indexOf('')) function
console.log(gameName.indexOf('i'));
console.log(gameName.indexOf('em'));

// 6- To Remove all unnecessary spaces from string we use (trim()) function
let newStr = "   OTC   "
// console.log(newStr);
console.log(newStr.trim());

// 7- To check is the word or value exists in our string or not we (includes()) function, This function gave use Boolean value in form of true or false
// useCases: Search bar, Keyword filtering, Chat apps
let msg = "Strings are very handy if we know methods";
console.log(msg.includes("handy"));
// console.log(msg.includes("bad"));

// 8- If we need the subString or just get some sort of String length from particular range so we use (slice(startIndex, endIndex)) function
let email = "user@gmail.com";
console.log(email.slice(0, 4));

//  9- If we need to replace any sort of word or character from string use (replace()) function
let text = "Before days";
console.log(text.replace("Before", "After"));
 

// 10- We have a function who convert string into Arrays which was (split()) function
// useCase: Query params, User input parsing
let languages = "JavaScript, Python, Java";
console.log(languages.split(","));


// 11- If we need to Repeat the String, so we use (repeat()) function
let fruit = "Orange is good ";
console.log(fruit.repeat(3));
