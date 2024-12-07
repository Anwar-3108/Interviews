// Description:
// You are given three numbers, stored in variables with the following names:
// one, two, three
// You have to find the square of the three numbers, and find the sum of their square values
// Note: Square of a number is a number multiplied by itself. For example, the square of 3 is 3 * 3 = 9

// Input:
// The first and the only line of the input contains the values stored in one, two, three

// Output:
// Print the sum of the squares of the values stored in one, two, three

// Sample Input 1:
// 1 2 3

// Sample Output 1:
// 14

// Hint:
// In the sample test case, the value stored in one = 1, two = 2, three = 3
// The square of the values stored will be:
// one = 1 * 1 = 1
// two = 2 * 2 = 4
// three = 3 * 3 = 9
// The resultant sum becomes one + two + three = 1 + 4 + 9 = 14, which is the required answer.

const prompt = require("prompt-sync")({ sigint: true });
function ans() {
  let result = 0;
  let arr = ["one", "two", "three"];

  arr.map((e, i) => {
    const value = parseInt(prompt(`Enter the value of ${e}: `));
    result += value * value;
  });

  console.log(result);
}
ans();
