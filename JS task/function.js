function findMostCommonChar(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    let maxChar = '';
    let maxCount = 0;

    for (let char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(findMostCommonChar("hello world")); 
console.log(findMostCommonChar("abc"));         