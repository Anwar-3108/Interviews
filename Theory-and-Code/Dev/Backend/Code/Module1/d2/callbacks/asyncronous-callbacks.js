const fs = require("fs");
fs.readFile("../../../../Theroy/Callback-Function.md", 'utf8', (err, data) => {
  if (err) console.log("error while reading the file: " + err);
  console.log("data: " + JSON.stringify(data));
});

console.log("This line will be printed before the file reading operation.");
