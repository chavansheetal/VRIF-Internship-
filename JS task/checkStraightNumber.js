function checkStraightNumber(n) {
    const digits = String(n).split('').map(Number);

    if (digits.length < 2) return "Straight"; 

    const diff = digits[1] - digits[0];

    for (let i = 1; i < digits.length - 1; i++) {
        if (digits[i + 1] - digits[i] !== diff) {
            return "Not Straight";
        }
    }

    return "Straight";
}


console.log(checkStraightNumber(12345)); 
console.log(checkStraightNumber(2468));  
console.log(checkStraightNumber(12347)); 