function findHighestDigit(num) {
    
    let numStr = Math.abs(num).toString();
    
    let digitsArray = numStr.split('');
    
    return Math.max(...digitsArray);
}

console.log(findHighestDigit(39482)); 
console.log(findHighestDigit(102));   
console.log(findHighestDigit(777));
