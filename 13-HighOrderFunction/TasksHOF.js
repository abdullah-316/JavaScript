
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