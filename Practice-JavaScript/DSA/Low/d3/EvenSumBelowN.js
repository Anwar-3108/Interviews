// Even Sum Below N
// Description
// You are given a number, stored in the variable num. Your task is to find the sum of all even numbers greater than zero and less than or equal to num.

// For example, if num = 5, the even numbers less than or equal to 5 and greater than zero are:

// 2
// 4
// Therefore, the sum is:

// sum = 2 + 4 = 6
// Input
// A single integer num representing the upper limit for the even numbers.
// Output
// Print the sum of all even numbers greater than zero and less than or equal to num.
// Sample Input

// 6

// Sample Output

// 12

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "));

function EvenSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

let ans = EvenSum(num);
console.log(ans);
