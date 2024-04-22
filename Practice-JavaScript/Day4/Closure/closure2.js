function outFunction(x){
   let outerVariable=x;
   function innerFunction(y){
    return outerVariable+=y
   }
   return innerFunction;
}

const result= outFunction(5);
console.log(result)

console.log(result(10));
console.log(result(20));
console.log(result(30));