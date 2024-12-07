// Problem: Pattern Printing III
// Description
// You are given a number stored in a variable named N. Your task is to print a specific pattern based on the value of N.

// Pattern Requirements
// For an integer N, the pattern should be printed as follows:

// The first row should contain N asterisks (*), each separated by a space.
// The next N - 2 rows should each contain a single asterisk (*), preceded by N - 1 spaces to align it properly.
// The last row should again contain N asterisks, each separated by a space.
// Example
// Consider N = 5. The output should be:

// markdown

// * * * * *
//         *
//         *
//         *
// * * * * *
// Note: Ensure that each asterisk is separated by a space and that the alignment is correct.

// Input
// The first and only line of input contains the integer N.
// Output
// Print the pattern according to the rules specified above.
// Sample Input 1
// Copy code
// 5
// Sample Output 1
// markdown

// * * * * *
//         *
//         *
//         *
// * * * * *
// Hint
// In the example above, when N = 5:

// The first and last rows contain 5 asterisks, separated by spaces.
// The three middle rows each contain a single asterisk, preceded by 4 spaces.
// The following pattern uses underscores (_) to represent spaces for understanding purposes only. These underscores should not be printed:

// markdown

// * * * * *
// ________*
// ________*
// ________*
// * * * * *

// SOLUTION 1:

const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter a number: "));
for (let i = 0; i < N; i++) {
  if (i === 0 || i === N - 1) {
    let row = "";
    for (let j = 0; j < N; j++) {
      row += "* ";
    }
    console.log(row);
  } else {
    let row = "";
    for (let j = 0; j < N; j++) {
      if (j !== N - 1) {
        row += "  ";
      } else {
        row += "*";
      }
    }
    console.log(row);
  }
}
