
function roundNumber(num, ndigits) {
  return num.toFixed(ndigits);
}


let num = 0.778899;
let ndigits = 2;

console.log(roundNumber(num, ndigits));