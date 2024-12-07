const myHeading = document.getElementById("myHeading");

const ChangeSize = (size) => {
  return () => {
    myHeading.style.fontSize = `${size}px`;
  };
};
console.log(ChangeSize)
const sizer10 = ChangeSize(10);
const sizer20 = ChangeSize(20);
const sizer30 = ChangeSize(30);

document.getElementById("btn1").addEventListener("click", sizer10);
document.getElementById("btn2").addEventListener("click", sizer20);
document.getElementById("btn3").addEventListener("click", sizer30);

const removeEventListeners = () => {
  document.getElementById("btn1").removeEventListener("click", sizer10);
  document.getElementById("btn2").removeEventListener("click", sizer20);
  document.getElementById("btn3").removeEventListener("click", sizer30);
  myHeading.style.fontSize = "50px";
};

document.getElementById("reset").onclick = removeEventListeners;



// function run1() {
//   const startTime = Date.now(); // Get the starting time
  
//   return function print() {
//     for (var i = 0; i <= 5; i++) {
//       (function(i){
//           setTimeout(() => {
//               const elapsedTimeInSeconds = (Date.now() - startTime) / 1000; // Calculate elapsed time in seconds
//               console.log(i, "time:", elapsedTimeInSeconds.toFixed(2)); // Log elapsed time in seconds
//             }, i * 2 * 1000);
//       })(i)
//     }
//   };
// }

// let finalRun = run1();
// finalRun();
