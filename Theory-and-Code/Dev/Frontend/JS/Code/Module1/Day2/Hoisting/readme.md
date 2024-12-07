 ** What is  Hoisting in JS **

 Hoisting is a mechanism in javascript by which you can access the valiable and function even before you  have initialized it or put some value in it 

 Hoisting applies to variable declaration (var , let , const ) & function declarations (normal, arrow , anonymous)

 var declaration are hoisted to the top of their scope and initialized with the value of "undefined"

 let and const are also hoisted but not initialized , accessing them before their declaration resuls in a "Refference Error" known as the Temporal Dead Zone the difference is var is moved to the top of the scope with the value of "undefined" and let and const are also moved to the top but with the value of "RefferenceError"

 function declaration are fully hoisted including their implementations (works fine)

 function expressions (arrow and anonymous) function assigned to variable are not hoisted like function declarations (will results "not a function")



 in a nushell -  arrow and anonymous functions are not  hoisted , let and const in the TDZ can not accessed before there declaration