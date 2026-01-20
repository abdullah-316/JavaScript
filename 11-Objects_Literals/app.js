// 1- Template for using objects Literals:
const student = {   // student is creating as an Object or Property.
    name: 'Arham', // name = Key and 'Arham' = value
    age: 22,
    marks: 96.5
};

// We can access the objects by two ways 
// 1: using with dot(.) operator
console.log(student.name);

// 2: most commonly used by brackets([]), beacuse if we want to access a key string like: 
// "full name": "Arham khan", we can only access with bracket([])  
const myUser = {
    "full name": "Akmal khan"
}
console.log(myUser["full name"]);



// Interview question: how we can used Symbol(data type) in objects
const sym = Symbol("key1");
const mySym = {
    [sym]: "myKey1"
}
console.log(mySym);



// If we need to change the value of the objects:
student.age = 24;
console.log(student);

// If we want that no one can change the object so we use:
// Object.freeze(student);
// student.marks = 98.7;
// console.log(student);



// Access objects by using function:
student.greet = function() {
    console.log("Hi, Students");
}

console.log(student.greet());

// we can also access the keys in object:
student.greet = function(){
    console.log(`Hi, ${student.name}`);
}
console.log(student.greet());



// // We can also create an array in object.
const items = {
    price: 99.99,
    discount: 5,
    color: ['red', 'green']
};



// If we need to combine two objects we used two methods:
// 1- we assign two objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"y", 4:"z"};

// const obj = Object.assign({}, obj1, obj2);
// console.log(obj);

// 2- Most commonly by using spread operator
const obj3 = {...obj1, ...obj2};
// console.log(obj3);



// Nested Objects (Objects of Objects)
const classInfo = {
    std1: {
        name: 'Ali',
        age: 22,
        marks: 90
    },
    std2: {
        name: 'Hamza',
        age: 25,
        marks: 94
    },
    std3: {
        name: 'Usman',
        age: 23,
        marks: 92
    },
};

console.log(classInfo);
console.log(classInfo.std2);


// If we need to access the objects by their keys and values:
const post = {
    username: "@elon.musk",
    content: "NASA and Tesla",
    likes: 1000,
    repost: 100,
    tags: ['@nasa', '@tesla']
};
// // by accessing keys
console.log(Object.keys(post));
// // by accessing values
console.log(Object.values(post));

// // if we want to make single key and value in to array we used:
console.log(Object.entries(post));

// // If we need to check the object has the property or not we used:
console.log(post.hasOwnProperty("username"));
