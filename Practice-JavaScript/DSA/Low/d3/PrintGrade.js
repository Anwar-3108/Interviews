// Print Grade
// Description
// You are given a number stored in the variable total, representing a student's total marks. Based on the value of total, determine and print the corresponding grade as follows:

// If total == 100, print A
// Else if total >= 90, print B
// Else if total >= 80, print C
// Otherwise, print F
// Input
// A single integer total, which represents the total marks.

// Constraints
// total≤100

// Output
// Print the grade according to the value of total.

// Sample Input
// 80
// Sample Output
// C

const prompt = require("prompt-sync")();

const total = parseInt(prompt("Enter total marks: "));
function printGrade(total) {
  if (total == 100) {
    console.log("A");
  } else if (total >= 90) {
    console.log("B");
  } else if (total >= 80) {
    console.log("C");
  } else {
    console.log("F");
  }
}

printGrade(total);
