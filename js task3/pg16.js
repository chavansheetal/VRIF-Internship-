function calculateMeanOfDigits(num) {
    const numStr = Math.abs(num).toString();
    const digits = numStr.split('');
    
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    
    return sum / digits.length;
}

console.log(calculateMeanOfDigits(12345)); 
console.log(calculateMeanOfDigits(666));   
console.log(calculateMeanOfDigits(10));   