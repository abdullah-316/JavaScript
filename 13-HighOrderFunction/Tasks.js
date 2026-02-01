

/* Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

let testArr = ["000", 22, 90, "abc"]
function filterNum(arr) {
    return arr.filter((value) => typeof value === 'number')
}
// console.log(filterNum(testArr));