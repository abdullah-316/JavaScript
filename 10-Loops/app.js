

// // Guess the movie name game:
const favSports = "cricket";
let guess = prompt("Guess the favourite sport");

while((guess != favSports) && (guess != 'quit')){
   guess = prompt("Wrong answer! please try again.")
}

if(guess == favSports){
    console.log("Congrats");
}
else{
    console.log("you quit")
}




// // Loops using Arrays:
let fruits = ["mango", "apple", "banana", "strawberry", "peach"]

for(let i=0; i<=fruits.length-1; i++){
    console.log(i, fruits[i]);
}


// Nested Arrays using Loops:
let student = [
    ["Abdullah", 98], ["Osman", 97.5], ["Fahad", 100]
];

for(let i=0; i<student.length; i++){
    console.log(`info of Student #${i+1}`);
    
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}


// // For of Loops Example
let students = [
    ["Abdullah", 98], ["Osman", 97.5], ["Fahad", 100]
];

for(student of students){
    console.log(`info of Students:`);

    for(list of student){
        console.log(list);
    }
}