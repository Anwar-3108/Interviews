// Problem: Identify Prime
// Description:
// You are given a number stored in a variable named num.

// Check if the number is a prime number.
// A prime number is a number greater than 1 that is divisible only by 1 and itself.
// Input:

// A single integer, num.
// Output:

// Print "Yes" if num is a prime number.
// Print "No" otherwise.
// Example
// Input:
// 13

// Output:
// Yes

// Explanation:
// Since 13 is divisible only by 1 and itself, it is a prime number.

// Hint:
// To determine if a number num is prime:

// If num <= 1, it is not a prime number.
// Iterate through numbers from 2 to √num (inclusive) to check divisibility.
// If num is divisible by any of these numbers, it is not a prime number.

// Solution 1
// const PromptSync = require("prompt-sync");
// const prompt = new PromptSync();
// const num = parseInt(prompt("Enter a number: "));

// let count = 0;

// if (num <= 1) {
//   console.log("No1");
//   return;
// }

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }

// if (count === 2) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }




// Solution 2

const PromptSync = require("prompt-sync");
const prompt = new PromptSync();
const num = parseInt(prompt("Enter a number: "));

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

if (isPrime(num)) {
  console.log("Yes");
} else {
  console.log("No");
}

// Solution 3

