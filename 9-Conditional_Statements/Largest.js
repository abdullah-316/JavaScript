

let num1 = 40;
let num2 = 50;
let num3 = 35;

if ((num1 > num2) && (num1 > num3)) {
    console.log(`${num1} is greater then from ${num2} and ${num3}`);
} 
else if((num2 > num3) && (num2 > num1)) {
        console.log(`${num2} is greater then from ${num1} and ${num3}`);
}
else{
    console.log(`${num3} is greater then from ${num1} and ${num2}`);
}