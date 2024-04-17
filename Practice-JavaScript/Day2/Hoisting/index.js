// var hoisting

console.log(x); // undefine
var x = 10;

// let hoisting
console.log(y); // can't access before initialization (TDZ)
let y = 10;

// const hoisting

console.log(z); // can't access before initialization (TDZ)
const z = 10;

// function declaration hoisting

sayHello(); // works fine  (print "hello")
function sayHello() {
  console.log("hello");
}

// function expressions hoisting (arrow)
greet(); //type error (greet is not a function)
const greet = () => {
  console.log("good morning ");
};

// function expressions hoisting (anonymous)
sayBye(); // type error (sayBye is not a function)
const sayBye = function () {
  console.log("Byee!!");
};
// 