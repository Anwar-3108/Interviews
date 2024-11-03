// Problem: Double Two Triple One
// Description
// You are given four integers stored in variables named one, two, three, and four. Perform the following operations on these variables:

// Double the values of one and two. (For example, if one is initially 2, it becomes 4.)
// Triple the value of three. (For example, if three is initially 4, it becomes 12.)
// Increase the value of four by 4. (For example, if four is initially 7, it becomes 11.)
// After performing these operations, calculate and print the sum of the updated values of one, two, three, and four.

// Input
// The first and only line of input contains four integers, representing the values stored in one, two, three, and four, separated by spaces.
// Output
// Print a single integer, which is the sum of the updated values of one, two, three, and four after performing the required operations.
// Sample Input 1

// 1 2 3 4
// Sample Output 1
// Copy code
// 23
// Explanation
// Given the values:

// one = 1, two = 2, three = 3, four = 4
// After performing the operations:

// one and two are doubled: one = 2, two = 4
// three is tripled: three = 9
// four is increased by 4: four = 8
// The final sum is:

// 2
// +
// 4
// +
// 9
// +
// 8
// =
// 23
// 2+4+9+8=23

// SOLUTION 1 :

const prompt = require("prompt-sync")();
// let [one, two, three, four] = prompt("Enter four integers separated by space: ")
//   .split(" ")  //  this will give string

let [one, two, three, four] = prompt("Enter four integers separated by space: ")
  .split(" ")
  .map(Number); // this will give Integer

function answer(one, two, three, four) {
  let val;
  val = one * 2 + two * 2 + three * 3 + four + 4;
  return val;
}

let ans = answer(one, two, three, four);

console.log(ans);


// SOLUTION 2 :
