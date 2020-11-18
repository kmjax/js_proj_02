// ===============================================
// Initialize an empty array. Use prompts to add
// "todo" items to the array until the user types
// "QUIT". Then, display array in the console log.
// Jaxcode Day 9 Homework Assignment (4 of 4)
//
// Author: Kelsey McClanahan
// Date:   11/18/2020
// ===============================================

// Create variables/objects
let todos = []; // array of ToDo items
let todo = ""; // ToDo item from user input
let stopLoopFlag = false; // Flag to indicate when to stop asking for more todo items

// Keep asking for todo items until the user enters Quit/quit/QUIT/etc...
while (stopLoopFlag == false) {
  // Ask user for an item
  todo = prompt(
    "Please enter a todo item for the list:\n(Type quit to stop entering items)"
  );

  // check to see if we need to quit
  if (todo.toUpperCase() === "QUIT") {
    // user indicated they want to quit, so set the stop flag to true
    stopLoopFlag = true;
  } else {
    // add the user's last todo item to the array
    todos.push(todo);
  }
}

// Let the user know to check the console log for their todo list
alert("Check the console log to your ToDo list.");

// Log an information message about the items based on single/plural entries
if (todos.length == 1) {
  console.log("Here is your single ToDo item:");
} else {
  console.log(`Here are your ${todos.length} ToDo items:`);
}

// Loop through each item and list a number and item
for (let i = 0; i < todos.length; i++) {
  console.log(`${i + 1}. ${todos[i]}`);
}
