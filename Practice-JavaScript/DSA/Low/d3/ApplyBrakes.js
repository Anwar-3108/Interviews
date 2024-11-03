// Problem: Apply Brakes
// Description
// You are given two integers: distance and time. Your task is to calculate the speed using the formula:

// speed=distance/time

// After calculating the speed, check if the following condition is met:

// If speed > 40, print "Apply Brake"
// Otherwise, print "Keep Going"
// Input
// The input consists of a single line containing two space-separated integers:
// distance: the distance traveled by the car
// time: the time taken to cover that distance
// Constraints
// distance<1000
// time<5
// Output
// Output "Apply Brake" if speed > 40.
// Output "Keep Going" if speed <= 40.
// Sample Input 1

// 100 2
// Sample Output 1

// Apply Brake

// Explanation Given:

// distance = 100
// time = 2

// The speed is calculated as:

// speed=100/2=50

// Since 50 > 40, the output is:

// Apply Brake

const prompt = require("prompt-sync")();
let [distance, time] = prompt("Enter Distance and Time and seprate by space : ")
  .split(" ")
  .map(Number);

function ApplyBrakes(distance, time) {
  let speed = distance / time;
  if (speed > 40) {
    console.log("Apply Brake");
  } else {
    console.log("Keep Going");
  }
}

ApplyBrakes(distance, time);
