console.log("Pattern2");

function Pattern2(row) {
  for (let i = row; i >= 1; i--) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
      str = str + "* ";
    }
    console.log(str);
  }
}
Pattern2(5);



