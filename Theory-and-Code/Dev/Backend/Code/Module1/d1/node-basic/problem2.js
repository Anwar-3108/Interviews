const input = require("prompt-sync");
const crypto = require("crypto");

const calculator = () => {
  const args = process.argv.slice(2);
  const operation = args[0];
  const num1 = args[1];
  const num2 = args[2];

  switch (operation) {
    case "add":
      console.log(Number(num1) + Number(num2));
      break;
    case "subtract":
      console.log(Number(num1) - Number(num2));
      break;
    case "multiply":
      console.log(Number(num1) * Number(num2));
      break;
    case "divide":
      if (Number(num2) === 0) {
        console.log("Error: Division by zero");
      } else {
        console.log(Number(num1) / Number(num2));
      }
      break;
    case "sin":
      if (!isNaN(num1)) {
        console.log(`sin(${num1}) = ${Math.sin((num1 * Math.PI) / 180)}`);
      } else {
        console.log("Please provide a valid number for sine calculation.");
      }
      break;

    case "cos":
      if (!isNaN(num1)) {
        console.log(`cos(${num1}) = ${Math.cos((num1 * Math.PI) / 180)}`);
      } else {
        console.log("Please provide a valid number for cosine calculation.");
      }
      break;

    case "tan":
      if (!isNaN(num1)) {
        console.log(`tan(${num1}) = ${Math.tan((num1 * Math.PI) / 180)}`);
      } else {
        console.log("Please provide a valid number for tangent calculation.");
      }
      break;

      case 'random':
        let length = num1 || 10; // Default random length to 10 if no argument provided
        if (!isNaN(length)) {
            const randomNumber = crypto.randomInt(0, Math.pow(10, length)).toString();
            console.log(`Random number (length ${length}): ${randomNumber}`);
        } else {
            console.log('Please provide a valid length for the random number.');
        }
        break;

    default:
        console.log('Unsupported operation. Please use add, sub, mult, divide, sin, cos, tan, or random.');
        break;
  }
};
calculator();
