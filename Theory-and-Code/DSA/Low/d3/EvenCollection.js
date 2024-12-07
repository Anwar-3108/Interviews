// Problem: Even Collection
// Description
// You are given two numbers stored in variables named max and min. Your task is to find the sum of all even numbers that fall between these two numbers (inclusive of both min and max).

// Calculation of Even Numbers
// For example, if max = 19 and min = 14, the even numbers between these two values are:

// 14, 16, and 18 Thus, the sum of even numbers is:
// sum of even = 14 + 16 + 18 = 48
// sum of even=14+16+18=48
// Input
// The first and only line of input contains the values stored in max and min, separated by a space.
// Output
// Print the sum of all even numbers that fall between min and max (including both).
// Constraints
// The value stored in max will always be greater than or equal to min.
// Sample Input 1

// 19 13
// Sample Output 1

// 48
// Hint
// Given max = 19 and min = 13, the range of numbers includes:

// 13, 14, 15, 16, 17, 18, 19
// From this range, the even numbers are:

// 14, 16, 18
// Therefore, the sum of even numbers is:

// 14 + 16 + 18 = 48

const prompt = require("prompt-sync")();

let [max, min] = prompt("Enter max and min separated by a space: ").split(" ");
let sum = 0;
for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);
