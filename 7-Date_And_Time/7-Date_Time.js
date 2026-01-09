

let date = new Date()
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());

let createdDate = new Date("2025-12-28");
// console.log(createdDate.toLocaleString());

let timeStamp = Date.now()
console.log(date.getDate());
console.log(date.getMonth()+1);

date = date.toLocaleString('defaul', {
    month: "long"
});

console.log(date);
