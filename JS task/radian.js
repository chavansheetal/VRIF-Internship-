function degreesToRadians(degrees) {
  return Number(((Math.PI / 180) * degrees).toFixed(3));
}


let degrees = 90;
console.log(degreesToRadians(degrees)); 