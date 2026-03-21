function calculatePower(base, exponent) {
    return base ** exponent;
}

function calculatePowerWithLoop(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(calculatePower(2, 3)); 
console.log(calculatePower(2, 4)); 
