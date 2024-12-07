// Problem: Square It
// Description
// You are given an integer N. Your task is to print the square of N.

// Input
// The input consists of a single integer N.
// Constraints
// 𝑁
// <
// 100
// N<100
// Output
// Output the square of N as an integer.
// Sample Input 1

// 7
// Sample Output 1

// 49
// Explanation
// For N = 7, the square is calculated as:
// 7
// ×
// 7
// = 49
// 7×7=49


//SOLUTION 1 : 

const prompt = require("prompt-sync")();

const N = parseInt(prompt("Enter an integer: "));

function square(n) {
  return n * n;
}

const answer = square(N);
console.log(answer);
