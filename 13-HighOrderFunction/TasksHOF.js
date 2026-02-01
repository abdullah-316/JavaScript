
// 1- Write a function squareNumbers(arr) using map() and arrow functions
let numArr = [4, 5, 6]
function squareNumbers(num) {
    return num.map((value) => value * value)
}
// console.log(squareNumbers(numArr));



// 2- Create a function filterEvenNumbers(arr) using filter() and arrow functions
let secondArr = [1, 3, 6, 8, 2, 5]
function filterEvenNumbers(val) {
    return val.filter((value) => value %2 == 0)
}
// console.log(filterEvenNumbers(secondArr));



// 3- Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
// const thirdArr = [1, -3, 4, -2, -8, 5]
const thirdArr = [-1,-3,-2]
function sumPositiveNumbers(num) {
    return num.filter((value) => value > 0).reduce((acc, curr ) => acc + curr, 0)
}
// console.log(sumPositiveNumbers(thirdArr));



// 4- Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
let Persons = [
    {
        name: "Hadi"
    },
    {
        name: "Adil"
    },
    {
        name: "Ibrahim"
    },
]

function getNames(arr) {
    return arr.map(Persons =>  Persons.name)
}
// console.log(getNames(Persons));



// 5- Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
let myFruits = ['apple', 'banana', 'cherry']
function findLongestWord(arr) {
    return arr.reduce((prev, curr) => prev.length < curr.length ? curr : prev, "")
}
console.log(findLongestWord(myFruits));