// Problem: Pattern Printing I

// Description:

// You are given an integer stored in a variable with the name N. You have to print a specific pattern based on the value of N.

// Pattern Requirements:

// For an integer N, the pattern should be printed as follows:

// The first row should contain N asterisks (*), each separated by a space.
// The next N - 2 rows should each contain a single asterisk (*).
// The last row should again contain N asterisks, each separated by a space.
// Example:

// Consider N = 5. The output should be:

// markdown

// * * * * *
// *
// *
// *
// * * * * *
// Note: Ensure that each asterisk is separated by a space, as shown.

// Input:

// The first and only line of input contains the integer N.
// Output:

// Print the pattern according to the rules specified above.
// Sample Input 1:

// Copy code
// 5
// Sample Output 1:

// * * * * *
// *
// *
// *
// * * * * *

// Hint:

// In the example above, N = 5, so:

// The first and last rows contain 5 asterisks separated by spaces.
// The middle N - 2 rows each contain a single asterisk (*).



// ============== SOLUTION ================= // 

const prompt = require("prompt-sync")();
const N = parseInt(prompt("Enter the value of N: "));

console.log("* ".repeat(N).trim());
for (let i = 0; i < N - 2; i++) {
  console.log("*");
}

console.log("* ".repeat(N).trim());
