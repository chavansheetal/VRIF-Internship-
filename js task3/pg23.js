function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("Orange juice")); 
console.log(removeVowels("Hello World"));  
console.log(removeVowels("AEIOU"));    