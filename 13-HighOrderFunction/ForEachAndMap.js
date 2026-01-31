

// Map: means the way of storing data 

// Map syntax
let map = new Map()

// Set data
map.set("PAK", "Pakistan")
map.set("UK", "United Kingdom")
map.set("KSA", "Kingdom of Saudia Arabia")

// get data
// console.log(map.get('PAK'));

// Using For of Loop and destructuring
for (const [key, value] of map) {
    console.log(key, '->', value);
}



// For Each Example
// forEach calls the callbackfn function one time for each element in the array.
// Syntax: element.forEach((value, index, array) => {})
const coding = ["js", "java", "python", "php"]
// Basic Function
coding.forEach( function (lang) {
    // console.log(lang);
})
    
// using Arrow function
coding.forEach((value) => {
    // console.log(value);
})

// using with another function 
function printName(items) {
    console.log(items);
}
// coding.forEach(printName)


// we can also access the index and array
coding.forEach((value, index, array) => {
    // console.log(value, index, array);
})


// For Each using Objects
let Cars = [
    {
        carName: "Honda",
        carModel: "Civic"
    },
    {
        carName: "Toyota",
        carModel: "Yaris"
    },
    {
        carName: "Suzuki",
        carModel: "Cultus"
    },
]

Cars.forEach((value) => {
    // console.log(value.carName);
})


// Important: forEach doesn't returns the value beacuse if we want to store the value in of forEach we got undefined 
// Example: 
let myVal = ["abc", "xyz"]
let getVal = myVal.forEach((value) => {
    console.log(value);
})

console.log(getVal);