function isInRange(num, lowerLimit, upperLimit) {

    if (num >= lowerLimit && num <= upperLimit) {
        return "Yes";
    } else {
        return "No";
    }
}


console.log(isInRange(10, 1, 10));  
console.log(isInRange(5, 1, 10));   
console.log(isInRange(11, 1, 10));  
console.log(isInRange(0, 1, 10));  
