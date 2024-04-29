console.log("pattern1");

function pattern1(row) {
  for (let i = 1; i <= row; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

pattern1(5);
