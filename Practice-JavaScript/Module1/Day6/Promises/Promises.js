// let MyPromises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success  = true;
//     if (success ) {
//       resolve("Promise resolved");
//     } else {
//       reject("Promise rejected");
//     }
//   }, 2000);
// }).then((data)=>{
// console.log(`success : ${data}`)
// }).catch((err)=>{
// console.log(`faliur : ${err}`)
// })

let btn1 = document.querySelector("#resolve");
let btn2 = document.querySelector("#reject");

let btnPromise = new Promise((resolve, reject) => {
  function resolveHandlers() {
    resolve("Promise resolved");
    btn1.removeEventListener("click", resolveHandlers);
    btn2.removeEventListener("click", rejectHandlers);
  }

  function rejectHandlers() {
    reject("Promise rejected");
    btn1.removeEventListener("click", resolveHandlers);
    btn2.removeEventListener("click", rejectHandlers);
  }

  btn1.addEventListener("click", resolveHandlers);
  btn2.addEventListener("click", rejectHandlers);
})
  .then((data) => {
    console.log("success", data);
  })
  .catch((err) => {
    console.log("faliur", err);
  });
