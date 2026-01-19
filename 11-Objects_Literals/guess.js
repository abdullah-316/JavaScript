//  Guess Number Game:
const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == 'quit') {
        console.log('You quit the game');
        break;
    }

    if (guess == random) {
        console.log("Congrats!! You guess the Right number", random);
        break;
    } 

    else if (guess < random){
        guess = prompt("hint: Your guess was to small. Please try again");
    }

    else {
        guess = prompt("hint: Your guess was to large. Please try again");
    }
}


