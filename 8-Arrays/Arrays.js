// const arr = new Array(1,2,3,4,5)
const arr = [1,2,3,4,5];
console.log(arr[0]);

//  **************** Arrays Methods ****************

// 1- If we need to add element from last in Array, we use (.push(value)) method
arr.push(6);
console.log(arr);

// 2- To remove last element of Array, we use (.pop()) method
arr.pop();
console.log(arr);

// 3- If we want to add element at the start of Array, we use .unshift(value) method
arr.unshift(0);
console.log(arr);

// 4- To remove starting element of Array, we use (.shift() ) method
arr.shift();
console.log(arr);

// 5- If we check the element is in Array or not, so we use (.includes(searchElement)) method
// console.log(arr.includes(4));
console.log(arr.includes(7));

// 6- To check the index of the elements in Array is exsist or not, for that we use (.indexOf(fromIndex)) method
console.log(arr.indexOf(2));
// console.log(arr.indexOf(6));

// 7- If we add all elements of an Array into a string so for that we use (.join(separator)) method. NOTE: This method return type of string

const newArr = arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// 8- If we need to get some portion(copy) of the Array, so we use (.slice(start, end)) method. NOTE: slice method doesn't change the original array
let nums = [10, 20, 30, 40, 50];
let subNums = nums.slice(1 , 4);
console.log(subNums);
console.log(nums);

// 9- I we need to delete(remove) an item or element specially center from the Array, for that we use (.split(splitter, limit)) method.
// NOTE: This method change your Original Array
// let items = ["Pencil", "Eraser", "Shopner", "Marker"];
// let remove = items.splice(1,2);
// console.log(remove);
// console.log(items);

// We can also ADD the value by using splice method

let cart = ["pents", "shirts", "jackets"]
cart.splice(2 , 0, "watches");
console.log(cart);

// We can also EDIT the value by using splice method
let fruits = ["Orange", "Banana", "Apple"];
fruits.splice(1, 1, "Melon");
console.log(fruits);

// 10- If we merge Arrays so we use two following methods
// A - .concat(items)
let titles = ["OTC", "Yeet", "Beast"];
let wreslters = ["Roman", "Jey", "Lesnar"];
// let wwe = wreslters.concat(titles);
// console.log(wwe);

// B - using three dots(...) or spread
let wwe = [...wreslters, ...titles];
console.log(wwe);

// 11 - If we have nested Arrays within nested Arrays and we just get all in one Array for that we use .flat(depth) method
const digits = [1, 2, [3, 4, 5], 6, [7, 8, [9, 0, 1], 2, 3], 5, 6];
const real_nums = digits.flat(Infinity);
// console.log(digits);
console.log(real_nums);



// If we need to convert Strings or Integers in to Arrays we use some Arrays functions that are given below:
// 1- Covert just single element to Array
let name = "Abdullah";
console.log(Array.from(name));

// 2- Convert Set of Elements to Array
let phy = 89;
let Eng = 85;
let Math = 90;

console.log(Array.of(phy,Eng,Math));










// // ARRAYS CHAPTER
// let marks = [99, 89, 77, 65, 90]
// let names = ["Abdullah", "Fahad", "Osman"]
// let info = ["Haroon", 786, 3.14]


// let months = ['january', 'july', 'march', 'august']

// // Array push Method;
// months.push('may') // may has been added(pushed) at the end of the array 
// // ['january', 'july', 'march', 'august', 'may']


// // Array pop Method;
// months.pop(); // may has been delete(poped) from the array because pop del the last index.
// // ['january', 'july', 'march', 'august']


// // Array unshift Method;
// months.unshift('june'); // june has been added at start of the array
// // ['june', 'january', 'july', 'march', 'august']


// // Array shift Method;
// months.shift(); // june has been delete or exluded at start of the array
// // ['january', 'july', 'march', 'august']


// // Array indexOf Method;
// months.indexOf('march'); // check the index or place of the march
// // e.g: output "2"


// // Array reverse Method;
// months.reverse(); // to reverse the all elements in array.
// // ['august', 'march', 'july', 'january']
// months.reverse();


// // Array slice Methods;
// months.slice(2); // ['march', 'august']
// months.slice(1, 3); // ['july', 'march']
// months.slice(-1); // ['august']


// // Array splice Method;
// // At first are array of months looks like:
// // ['january', 'july', 'march', 'august']

// // after using splice methods:
// months.splice(1, 2); // ['july', 'march'] (1:index,  2: delete 1st and 2nd index)

// months.splice(1, 0, "feburary", "march"); // ['january', 'feburary', 'march', 'august']
// // (1: Start from 1st index, 0: No delete, "feburary", "march": adding feburary and march from 1 index)


// //  Array sort method;
// // months.sort(); // ['august', 'feburary', 'january', 'march'] sorting by default ascending order


// let lang = ['c', 'c++', 'html', 'javaScript', 'python', 'java', 'c#', 'sql'];

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let state = [['X', null, 'O'], [null, 'X', null], ['0', null, 'X']]



// PRACTICE QUESTIONS:
// Qs1. Write a JavaScript program to get the first n elements of an array. 
// [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

// let arr = [7, 9, 0, -2,];
// arr.slice(4);



// // Qs2. Write a JavaScript program to get the last n elements of an array. 
// // [n can be any positive number].
// // For example: for array [7, 9, 0, -2] and n=3
// // Print, [9, 0, -2]

// let arr = [7, 9, 0, -2];
// console.log(arr.slice(-3));



// Qs3. Write a JavaScript program to check whether a string is blank or not.
// let string = "abc";
// if (string == "") {
//     console.log("Strings are empty");
// } else {
//     console.log("Strings are NOT empty"); 
// }



// // Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
// let str = "AbDULlaH";
// let index = 5;

// if(str[index] == str[index].toLowerCase()){
//     console.log("index is lowerCase");
// }
// else{
//     console.log("Not a lowerCase");
// }



// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string
// let str = prompt("Enter anything");
// console.log(`Original String = ${str}`);
// console.log(`Without Spacing String = ${str.trim()}`);



// // Qs6. Write a JavaScript program to check if an element exists in an array or not
// let animals = ['cat', 'dog', 'bear', 'tiger']
// let element = 'bear'

// if(animals.indexOf(element) != -1){
//     console.log("Element Exists");
// }
// else{
//     console.log("Not Exists");

// }
