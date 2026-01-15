// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2

const arr = [1, 2, 3, 4, 5, 6, 2, 3];
let mynum = 2

for(let i=1; i<arr.length; i++){
  if(arr[i] === mynum){
    arr.splice(i, 1);
  }
}
console.log(arr); // Result should be arr = [1, 3, 4, 5, 6, 3]



// // Qs2. Write a JS program to find the no of digits in a number.
// // Example : if number = 287152, so my count = 6
let num = 287152;
count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);  
}
console.log(count);



// // Qs3. Write a JS program to find the sum of digits in a number.
// // Example : if number = 287152, so my sum = 25
let n = 287152;
sum = 0;
while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);  
}
console.log(sum);



// // Qs4. Print the factorial of a number n.
let fact = 1;
let number = 4;

for(let i=1; i<=number; i++){
  fact = fact * i;
}
console.log(`Factorial of ${number} is ${fact}.`);


// // Qs5. Find the largest number in an array with only positive numbers
let myArr = [2, 4, 5, 8, 1];
let largest = 0;

for(let i=1; i<arr.length; i++){
  if(largest < arr[i]){
    largest = arr[i];
  }
}
console.log("Largest element is", largest);