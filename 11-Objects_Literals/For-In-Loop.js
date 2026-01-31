

// For in Loops Example:
// Generally use for Objects and also we use for arrays sometimes

let myObj = {
    "js" : "JavaScript",
    "cpp" : "C++",
    "py" : "Python"
}

for (const key in myObj) {
    console.log(`${key} shortcut for ${myObj[key]}`);
}


// for in using arrays
let lang = ["js", "cpp", "python"]

for (const key in lang) {
    console.log(lang[key]);
}
