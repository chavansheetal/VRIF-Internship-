function calculateHCF(num1, num2) {
   
    while (num2 !== 0) {
        let remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }
    return num1;
}

console.log(calculateHCF(12, 18)); 
console.log(calculateHCF(40, 8));  
console.log(calculateHCF(15, 25)); 