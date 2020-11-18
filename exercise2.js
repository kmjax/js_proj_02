// ===============================================
// Function that accepts two numbers and calculates
// an area based on those two numbers.
// Jaxcode Day 9 Homework Assignment (2 of 4)
//
// Author: Kelsey McClanahan
// Date:   11/18/2020
// ===============================================

// Define function
const calculateArea = (length, width) => {
  return length * width;
};

// Grab user input from prompts
let rectLength = prompt("Enter the rectangle's length.");
let rectWidth = prompt("Enter the rectangle's width.");

// Calculate the area using the defined function
let area = calculateArea(rectLength, rectWidth);

// Generate a solution message
let areaMessage = `The area of a ${rectLength} x ${rectWidth} rectangle is ${area}.`;

// Log the inputs and solution
console.log(`Length = ${rectLength}`);
console.log(`Width = ${rectWidth}`);
console.log(areaMessage);

// Display solution to the user
alert(areaMessage);
