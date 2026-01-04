

let n1 = 5;
let n2 = 3

// we check for n1

// Less Then
console.log(n1 > n2);
// Greater Then
console.log(n1 < n2);
// Less Then Equal to
console.log(n1 >= n2);
// Greater Then Equal to
console.log(n1 <= n2);
// Not Equal to
console.log(n1 != n2);
// Equal Equal to
console.log(n1 == n2);

// NULL EXAMPLE
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

/*  The Reason is that an equality (==) check
and Comparison (<,>,<=,>=) work differently. 

Thats why Comparisons converts null to a number,
and treating it as 0.
Thats why null >= 0 is true,
and num > 0 is false
*/

console.log("2" === 2);
// Strict Check
// === checks comparison as long as their data types.