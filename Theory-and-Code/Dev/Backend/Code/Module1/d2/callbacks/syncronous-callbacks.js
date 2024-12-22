function greeting(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}
function sayGoodbye() {
  console.log("Goodbye");
}

greeting("Anwar", sayGoodbye);
