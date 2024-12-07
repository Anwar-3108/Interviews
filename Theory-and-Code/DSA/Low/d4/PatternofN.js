// Problem: Pattern of N

// Description:
// Given an integer
// N, print all numbers from  1 to N×N, arranged in a grid where each row contains exactly N numbers.

// For example, if N=3, the output will be:

// 1 2 3
// 4 5 6
// 7 8 9

// Input:
// A single integer
// N, where
// 1≤N≤100.

// Print

// N rows, where each row contains N numbers from the range [1,N×N].

// Example:

// Input:
// 4

// Output:

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

// Explanation:

// The value of
// N=4, so the total range of numbers is  [1,16].
// Arrange the numbers in 4 rows, with each row containing 4 numbers.

// Constraints:
// 1≤N≤100, so the solution must be efficient and scalable for large values of 𝑁

const PromptSync = require("prompt-sync");

const prompt = PromptSync();

const n = parseInt(prompt("Enter a number: "));

function PatternN(n) {
  let count = 1; 
  for (let i = 1; i <= n; i++) {
    let num = "";
    for (let j = 1; j <= n; j++) {
      num += count + " ";
      count++;
    }
    console.log(num.trim());
  }
}

PatternN(n);
