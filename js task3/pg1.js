function firstNVowels(str, n) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      result += char;
    }
    if (result.length === n) {
      return result;
    }
  }

  return result;
}

console.log(firstNVowels("Ice and water", 3)); 
console.log(firstNVowels("Ice and water", 8)); 
