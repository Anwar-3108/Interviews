// Description:
// You are given a number, stored in a variable with the name num
// Print all the odd numbers lesser than or equal to the value stored in num
// Only those numbers need to be printed which are greater than zero

// Input:
// The first and the only line of the input contains the value stored in the variable num

// Output:
// Print all the odd numbers greater than 0, and less than or equal to the value stored in num. Print each number on a new line

// Sample Input 1:
// 13

// Sample Output 1:
// 1
// 3
// 5
// 7
// 9
// 11
// 13

// Hint:
// In the sample test case, the value stored in num = 13
// Therefore, all the odd numbers greater than 0 and less than or equal to 13 are printed
// Hence, the output is:
// 1
// 3
// 5
// 7
// 9
// 11
// 13

const prompt = require("prompt-sync")({ sigint: true });

function ans() {
  let number = prompt("Enter number :");

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0 && i > 0) {
      console.log(i);
    }
  }
}
ans();
