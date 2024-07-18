// Import the fs module for file system operations
const fs = require("fs");

// Read a file asynchronously and pass a callback to handle the data
fs.readFile("./callback.readme.md", "utf8", (err, data) => {
  redingTheFile(err, data, showEnd);
});

function redingTheFile(err, data, callback) {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
    callback();
    console.log("this is asyncronous programm this is why im here (before printing 'execution finished')")
  }
}

function showEnd() {
  setTimeout(() => {
    console.log(" execution finished");
  }, 2000);
}
// this is also a callback. here we are using a readFile() function in this function we are passing another callback function and execution the taks at some point where we need after certain amount of time.
