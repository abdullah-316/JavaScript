// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];

// for(let i=1; i<arr.length; i++){
//   if(arr[i] === 2){
//     arr.splice(i, 1);
//   }
// }
// console.log(arr); // Result should be arr = [1, 3, 4, 5, 6, 3]



// // Qs2. Write a JS program to find the no of digits in a number.
// // Example : if number = 287152, count = 6
// let num = 287152;
// count = 0;
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);  
// }
// console.log(count);



// // Qs3. Write a JS program to find the sum of digits in a number.
// // Example : if number = 287152, sum = 25
// let num = 287152;
// sum = 0;
// while (num > 0) {
//     let digit = num % 10;
//     sum = sum + digit;
//     num = Math.floor(num / 10);  
// }
// console.log(sum);



// // Qs4. Print the factorial of a number n.
// let fact = 1;
// let num = 4;

// for(let i=1; i<=num; i++){
//   fact = fact * i;
// }
// console.log(`Factorial of ${num} is ${fact}.`);


// // Qs5. Find the largest number in an array with only positive numbers
let arr = [2, 4, 5, 8, 1];
let largest = 0;

for(let i=1; i<arr.length; i++){
  if(largest < arr[i]){
    largest = arr[i];
  }
}
console.log("Largest element is", largest);