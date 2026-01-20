
// Destructuring in Objects

const course = {
    courseName: "JavaScript Stack",
    courseInstructor: "Angela Yu",
    coursePlatform: "Udemy",
    courseFee: "$9.99"
}

const {courseInstructor: instructor} = course
console.log(instructor);
// we can also destructure Multiple values 
const {courseName: name, courseFee: fee} = course;
console.log(name, ",", fee);