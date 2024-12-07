// Description:
// You are given a number, stored in the variable with the name N
// Print "Yes" if the number is divisible by 4, else print "No"
// Note: A number is divisible by 4 if the result of the following expression number % 4 == 0

// Input:
// First and only line contains one positive integer N

// Constraints:
// N < 100000

// Output:
// Output "Yes" if the number is divisible by 4, otherwise output "No"

// Sample Input 1:
// 12

// Sample Output 1:
// Yes

// Hint:
// The value of N is 12
// 12 % 4 == 0, hence the output is "Yes"

const prompt = require("prompt-sync")({ sigint: true });

function ans() {
  const N = parseInt(prompt("Enter a number N: "));

  if (N % 4 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
ans();
