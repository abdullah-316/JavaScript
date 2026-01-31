

/*
Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.
*/

let array = [2,4,6,8,10]

let sqr = array.map((value) => value * value)
// console.log(sqr);

let sum = sqr.reduce((acc, curr, ) => acc + curr, 0)
// console.log(sum);

let avg = sum / array.length
// console.log(avg);



/*
Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
*/


let myArr = [2,4,6,8,-2,-4]

let newArr = myArr.map((value) => value + 5)
// console.log(newArr);


/*
Qs3. Create a new array whose elements are in uppercase of words present in the original array
*/

let fruits = ["Apple", "Mango", "Melon", "orange"]

let check = fruits.map((fruit) => fruit.toUpperCase())
// console.log(check);


/*
Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
*/
// REST example
let arr = [1,2,3]
let arg = [4,5]
let doubleAndReturnArgs = ( (arr, ...arg) => [
    ...arr, 
    ...arg.map((value) => value * 2)
])

// console.log(doubleAndReturnArgs(arr, ...arg));


/*
Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/
// // SPREAD example
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
let merge = mergeObjects({a: 1, b: 2}, {c: 3, d: 5});
console.log(merge);
