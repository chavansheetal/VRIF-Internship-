function checkAlphabeticalOrder(str) {
    for (let i = 0; i < str.length - 1; i++) {

        if (str[i] > str[i + 1]) {
            return "Unordered";
        }
    }

    return "Ordered";
}

console.log(checkAlphabeticalOrder("abcde")); 
console.log(checkAlphabeticalOrder("apple")); 
console.log(checkAlphabeticalOrder("aabbcc")); 