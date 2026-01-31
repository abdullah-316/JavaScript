


/*
Qs1. Write a JavaScript function that returns array elements larger than a number.
*/

let arr = [2,4,5,10,11,9,3]
let n = 5


function largeNum(arr , n) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
        console.log(arr[i]);
    }
}
}
// largeNum(arr, n)



/*
Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
*/

let str = "abcdabcdefgggh"
let ans = ""
function removeDuplicates(str) {
    for (let i = 0; i < str.length; i++) {
       
        let ch = str.charAt(i)
        if (ans.indexOf(ch) == -1) {
            ans += ch
        }
    }
    return ans
}
console.log(removeDuplicates(str));



/*
Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output :"United States of America"
*/

let country = ["Australia", "Germany", "United States of America"]

function longName(country) {
    let idx = 0

    for (let i = 0; i < country.length; i++) {
        let idxLen = country[idx].length
        let currLen = country[i].length
        if (currLen > idxLen) {
            idx = i
        }
    }
    return country[idx];
}

console.log(longName(country));
