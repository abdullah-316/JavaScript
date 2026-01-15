// Creating our Todo App

let todo = [];
let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("Quiting App");
    break;
  }

  if (req == "list") {
    console.log("---------------");
    console.log("showing all task list");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("---------------");
  } 
  else if (req == "add") {
    let task = prompt("Please enter the task which you want to add");
    todo.push(task);
    console.log("Task added successfully");
  } 
  else if (req == "delete") {
    let idx = prompt("which index you want to remove from your task");
    todo.splice(idx, 1);
    console.log("Task removed successfully");
  } 
  else {
    console.log("Wrong input");
  }

  req = prompt("Please enter your request");
}
