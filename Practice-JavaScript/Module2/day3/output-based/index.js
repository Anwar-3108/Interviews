//question number #1
// {
//     let a = 5;
//     let b=10;
//     var c=9;
//     console.log(a)
//     console.log(b)
// }
// console.log(c)//9
// console.log(a)// a is not defined code wont execute further
// console.log(c)
// console.log(b)

//----------------------------------


//question number #2

// function anyName() {
//   let a = 5;
//   var b = 7;
//   c = 9;

//   console.log(a);
// }

// anyName();
// console.log();
// console.log(b);
// // console.log(0123)


//----------------------------------


//question number #3

// var x = 20;
// function foo() {
//   console.log(x);
//   let x = 30;
// }

// foo();
//output=  undefine , but when u comment out let x=30 ; it will go to its parent scope and will print 20



//----------------------------------



//question number #4

// foo();

// var foo = 20;

// function foo() {
//   console.log("calling foo");
// }

// foo();


//----------------------------------



//question number #5

// const closure=()=>{
//     let x=10;
//     return ()=>{
//        return x++ ;
//     }
// }

// let increase = closure();
// let result1 = increase();
// console.log(result1)
// let result2 = increase()
// console.log(result2)


//----------------------------------


//question number #6

// console.log("start");

// setTimeout(()=>{
// console.log("settimeout")

// },0)

// console.log("end")

//----------------------------------


//question number #7

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
//output= 4 4 4

// for (let i = 1; i <= 3; i++) {
//   function cacl(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }

//   cacl(i);
// }
//output =1 2 3

//----------------------------------

//question number #8

// setTimeout(() => {
//     console.log("timeout")
// }, 1000);

// Promise.resolve().then(() => {
//   console.log("promise");
// });

// console.log("end");



//----------------------------------

//question number #9

// async function foo(){
//     return "Hello world"
// }

// const getValue = async()=>{
//     let value = await foo()
//     console.log(value)
//     console.log("after")
    
// }

// getValue()
   
//output = Hello world after

//----------------------------------
//question number #10
// function abc(){
//     console.log("hi")
// }
// const value = new abc();
// console.log(value)


//----------------------------------
//question number #11

// let details ={
//     "user-name":"abcd",
//     "age":"23"
// }
// let details2 ={
//     user :"abcd",
//     age :"23"
// }

// details["user-name"];

// let {user, age}=  details2 ;

// console.log(user, age)

//----------------------------------
//question number #12

// create a expense tracker app in react  
    // there will name and cost of exprense 
    // there will a button to add new expense
    // there will a list of all expesnes with name and cost
    // there will a total cost of all expesnes
