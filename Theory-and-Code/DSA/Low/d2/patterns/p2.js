// Problem: U-Shaped Pattern Printing
// Description
// You are given an integer stored in a variable named N. Your task is to print a "U"-shaped pattern based on the value of N.

// Pattern Requirements
// For an integer N, the pattern should be printed as follows:

// The first N - 1 rows should each contain two asterisks (*) at the beginning and end of the row, with N - 2 spaces in between.
// The last row should contain N asterisks, all separated by spaces.
// Example
// Consider N = 5. The output should be:

// markdown

// *       *
// *       *
// *       *
// *       *
// * * * * *
// Note: Ensure that each asterisk is separated by a space, as shown, with the correct number of spaces between the asterisks in the first rows.

// Input
// The first and only line of input contains the integer N.
// Output
// Print the pattern according to the rules specified above.
// Sample Input 1
// Copy code
// 5
// Sample Output 1
// markdown

// *       *
// *       *
// *       *
// *       *
// * * * * *
// Hint
// In the example above, when N = 5:

// The first four rows form the sides of a "U" with two asterisks and five spaces in between.
// The last row completes the "U" shape by containing 5 asterisks, all separated by spaces.

// SOLUTION 1: 

const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter the value of N: "));
for (let i=0; i < N; i++) {
  if (i < N-1) {
    let row = "";
    for (let j = 0; j < N; j++) {
      if (j == 0 || j == N - 1) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  } else {
    let row = "";
    for (let j = 0; j < N; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
