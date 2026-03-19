function reverseNumber(num) {
  
  const reversedString = num.toString().split('').reverse().join('');
  
  return parseFloat(reversedString) * Math.sign(num);
}

console.log(reverseNumber(1234)); 
console.log(reverseNumber(-567)); 