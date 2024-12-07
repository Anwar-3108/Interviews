// Description
// You are given a number stored in a variable, with the name number
// Multiply the number stored in the variable number by 50, and print
// the result obtained

// Input
// The first and the only line of the input contains the number stored in the variable number

// Constraints
// 1 <= N <= 20


// Output

// Print a single number, the result obtained by multiplying it by 50
// Sample Input 1 
// 2

// Sample Output 1
// 100

// Hint
// In the sample test case, the value stored in the variable number is 2. Afte
// r, multiplying by 50, the answer obtained is 100. Therefore, the answer o
// btained is 100.


const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("what is the value of 'number'?");

(function(number){
    console.log("Result = " + number*50)
})(number)