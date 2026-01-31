
// Filter Method: Returns the elements of an array that meet the condition specified in a callback function.
// Important: Filter method returns the value and also create new array
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let check = myNum.filter((num) => num > 4);
// console.log(check);

// if we use Curley Braces{} so we need to use return keyword
let num = myNum.filter((value) => {
  return value > 5;
});
// console.log(num);

// Filter Example:

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let user = books.filter( (book) => book.genre === "Science")

user = books.filter((book) => {
    let check = book.publish < 2000 && book.genre === "History"
    return check
})
// console.log(user);


// Map method: It creates new array, it perform operation on each element of array

let number = [1,2,3,4,5]
// let add = number.map((value) => value + 10)
let add = number.map((value) => { return value + 10})
// console.log(add);


// Chaining Method
let myNumbers = [10, 20, 30, 40, 50]
let apply = myNumbers.map((num) => num + 10).filter((num) => num > 30)
// console.log(apply);



// Reduce Method: its process the whole array and return single value, we gave them Initial Value where the calculation starts
// They have two things: one is Accumulator and second is Current Value
// Syntax: value.reduce((previousValue(Accumulator), currentValue, currentIndex, array) => {}, initialValue)
let value = [1, 2, 3, 4]

// let myVal = value.reduce((Accumulator, currentValue) => {
//     console.log(`Accumulator is: ${Accumulator} and currentValue is: ${currentValue}`);
//     let check = Accumulator + currentValue
//     return check
// }, 0)

// shorthand:
let myVal = value.reduce((acc, curr) => {
    return acc + curr
}, 0)
// console.log(myVal);


let shoppingCart = [
    {
        item: "Shirt",
        price: 899
    },
    {
        item: "Trousers",
        price: 999
    },
    {
        item: "Jeans",
        price: 1299
    },
]

let cart = shoppingCart.reduce((acc, items) => {
    let toPay = acc + items.price
    return toPay
}, 0)
console.log(cart);
