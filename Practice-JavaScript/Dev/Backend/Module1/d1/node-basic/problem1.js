const fs = require("fs");
// console.log(fs);

// create file

/*
fs.writeFile("./test.txt", "this is the data", "utf-8", () => {
  console.log("File created successfully");
});
*/

// read file

/*

fs.readFile("./test.txt", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data);
})

*/

// update file

/*
const update = (data) => {
  fs.appendFileSync("./test.txt", data, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File updated successfully");
  });
};

update("This is an additional line\n");

*/


//rename file

/* 
fs.rename("./test.txt", "newTest.txt", (err) => {
    if (err) throw err;
    console.log("File renamed successfully");
})
*/    



//copy file 
 
/*
fs.copyFile("./newTest.txt", "./copiedFile.txt",(err, data)=>{
if(err) console.log("error while coping file");
console.log("File copied!!")
})
*/




// delete file

// fs.unlink("./test.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully");
// });

