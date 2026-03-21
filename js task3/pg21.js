function makeSumEven(num1, num2) {
    let sum = num1 + num2;

    if (sum % 2 !== 0) {
        return sum + 1;
    } else {
    
        return sum;
    }
}


console.log(makeSumEven(4, 3));  
console.log(makeSumEven(2, 2));  
console.log(makeSumEven(10, 5)); 