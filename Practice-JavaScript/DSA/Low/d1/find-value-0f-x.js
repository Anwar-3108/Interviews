// Description:
// You are given a number X. Find the value of X after performing the following operations:
// 1. X is multiplied by 3
// 2. 10 is added to the new value of X

// Input:
// Input will contain one number X

// Constraints:
// 0 < X < 1000

// Output:
// Output should be the number X after performing the above operations

// Sample Input 1:
// 3

// Sample Output 1:
// 19

// Hint:
// Explanation:
// The value of X = 3
// After multiplying with 3, X becomes 9
// After adding 10, it becomes 19
// So, the output is 19

const prompt = require("prompt-sync")({ sigint: true });

function ans() {
  const X = parseInt(prompt("Enter a number X: "));
  console.log(X * 3 + 10);
}
ans();
