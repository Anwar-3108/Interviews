// Problem: Even Sum Calculation
// Description:
// Given an integer N, print the sum of all even numbers in the range [1, i] for each i from 1 to N.

// For example, if N = 4, the output would represent:

// Sum of all even numbers in the range [1, 1]
// Sum of all even numbers in the range [1, 2]
// Sum of all even numbers in the range [1, 3]
// Sum of all even numbers in the range [1, 4]
// The result is printed line by line.

// Input:
// A single integer𝑁 ( 1 ≤ 𝑁 ≤ 10**5 )

// Output:
// Print  N lines, where the i-th line contains the sum of all even numbers in the range [1, i].

// Example:
// Input:

// 4
// Output:

// 0
// 2
// 2
// 6

// Explanation:
// For i=1: Range = [1, 1]. No even numbers → Sum = 0.
// For i=2: Range = [1, 2]. Even numbers = [2] → Sum = 2.
// For i=3: Range = [1, 3]. Even numbers = [2] → Sum = 2.
// For i=4: Range = [1, 4]. Even numbers = [2, 4] → Sum = 6.
// Constraints:
// N can be as large as
// 1
// 0
// 5
// 10
// 5
//  . Hence, the solution must be efficient.

// Solution 1

const PromptSync = require("prompt-sync");

const prompt = PromptSync();

const N = parseInt(prompt("Enter the value of N: "));

function EvenSum(N) {
  for (let i = 1; i <= N; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        count += j;
      }
    }

    console.log(count);
  }
}

EvenSum(N);
