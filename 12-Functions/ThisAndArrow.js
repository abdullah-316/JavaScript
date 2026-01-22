

// ************* THIS in JS *************
// this means -> who is using me right now.

// THIS using ojects
const person = {
    name: "Hadi",
    sayName: function () {
        // So this = person
        console.log(`${this.name}, Welcome here`);
    }
}
// person is calling the function
// person.sayName()

// ************* IMPORTANT *************
// In a browser → this means the window
// In an object → this means that object

// THIS using fnction
// Normal function: this depends on how the function is called.
function hello() {
    let name = "gamer"
    console.log(this);
    
}
// hello()
// Output: undefined
// this.name is undefined because name is a local variable, not a property of this.




// THIS using arrow 
// Arrow function: this is taken from the surrounding scope and never changes.
const newObj =  () => {
    let name = "OTC"
    console.log(this)
}
// newObj()
// Output: undefined
// In an arrow function, this comes from the outer scope, and since name is a local variable, this.name is undefined.




// ************* ARROW FUNCTION in JS *************
// basic Arrow function
// If we use brackets and return keyword in Arrow function we can call this as an Explicit Arrow function
const addNum = (num1, num2) => {
    return num1 + num2
}
console.log(addNum(4, 2));


// In this case we use Parantheses and not use any return keyword so we can call this as Implicit Arrow function. In Implicit we can just write one line arrow function
const ProdNum = (val1, val2) => (val1 * val2)
console.log(ProdNum(2, 5));


// Objects using in Implicit Arrow function.
const myName = () => ({username : "@fadyy"})
console.log(myName());
