// Block Scope Example 

// {
//     let x = 1
// }
// console.log(x)// Throws Reference Error : x is not defined

//Shadowing Example

// let y = 10 ;
// {
//     let y = 20;// inner y shadows outer y
//     console.log(`Inner y : ${y}`) //20
// }

// console.log(`outer y : ${y}`)// 10 (outer y is unaffected)


// let x = 10;
// {
//     var x = 20;
//     console.log(x); // var is global scope , so it will be hoisted  then conflict the name with "let x" , throws : x is already been declared but vise-versa act won't affect anything in the programm.
// }




//varable decaled inside a block are only accessable within the block and nested blocks 
// {
//     let x = 1
//     console.log(x)
//     {
//         console.log(x)
//     }
// }