function sumDigits(num) {
    
    let numStr = Math.abs(num).toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
       
        sum += parseInt(numStr[i]);
    }

    return sum;
}

console.log(sumDigits(12345)); 
console.log(sumDigits(432));   
console.log(sumDigits(0));     