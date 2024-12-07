// Problem: Number of Working Days
// Description
// The Masai School Curriculum runs for N weeks from Monday to Saturday, with every Sunday being a holiday. Your task is to calculate the total number of working days in the Masai School curriculum given the value of N.

// Working Days Calculation
// In a week, there are 6 working days (Monday to Saturday). Therefore, for N weeks, the total number of working days can be calculated as:
// Total Working Days
// =
// 𝑁
// ×
// 6
// Total Working Days=N×6

// Input
// The first and only line of input contains the integer N, which represents the number of weeks.
// Constraints
// 1
// ≤
// 𝑁
// ≤
// 52
// 1≤N≤52
// Output
// Print a single integer denoting the total number of working days in the Masai School.
// Sample Input 1

// 2
// Sample Output 1

// 12
// Explanation
// For N = 2:

// Total working days =
// 2 × 6=12
// 2×6=12

const prompt = require("prompt-sync")();

const numWeeks = parseInt(prompt("Enter the number of weeks: "));

const totalWorkingDays = numWeeks * 7;

let c = 0;
for (let i = 1; i <= totalWorkingDays; i++) {
  if (i % 7 !== 0) {
    c++;
  }
}
console.log(c);
