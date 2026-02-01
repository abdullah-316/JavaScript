

/* Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

let testArr = ["000", 22, 90, "abc"]
function filterNum(arr) {
    return arr.filter((value) => typeof value === 'number')
}
// console.log(filterNum(testArr));


/* Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array
*/
let someVal = [10, 20, 30]
let revFunc = function (val) {
    return val.reverse()
}
// console.log(revFunc(someVal));


/* Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
*/
// Spread Example
let myNum = [-10, -5, -2, -20]
let maxNum = function (num) {
    return Math.max(...num)
}
// console.log(maxNum(myNum));


/* Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
// Set gave us the unique value
let example = [1,2,3,3,4,5,5]
let rmFunc = function (val) {
    return [...new Set(val)]
}
// console.log(rmFunc(example));



/* Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
let valArr = [1, [2, 3], [4, [5]]]
function flatFunc(num) {
    return num.flat(Infinity)
}
// console.log(flatFunc(valArr));