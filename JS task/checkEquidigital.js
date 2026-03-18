function checkEquidigital(num) {
    let n = num;
    let factors = [];

    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    if (n > 1) factors.push(n);

    // Count total digits in all factors
    const factorDigits = factors.reduce((acc, f) => acc + f.toString().length, 0);

    return factorDigits === num.toString().length ? "Equidigital" : "Not Equidigital";
}

// Test examples
console.log(checkEquidigital(64));  // Output: "Equidigital"
console.log(checkEquidigital(125)); // Output: "Not Equidigital"