// ===============================================
// Create an empty array. Use a prompt to push the
// user's input into the array.
// Jaxcode Day 9 Homework Assignment (3 of 4)
//
// Author: Kelsey McClanahan
// Date:   11/18/2020
// ===============================================

// Create an empty array of animals.
let animals = [];

// Show the contents of the 'animals' array
console.log("'animals' array before input:");
console.log(animals);

// Grab an animal name from the user via a prompt
let animal = prompt("Please enter the name of an animal.");

animals.push(animal);

// Show the contents of the 'animals' array
console.log("'animals' array after input:");
console.log(animals);

// Display message to user
alert("Please check the console log for this exercise's output.");
