function dashingNumbers(num) {
  return num.toString().split('').join('-');
}

let num = 12345;
console.log(dashingNumbers(num));