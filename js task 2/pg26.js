 function repeatVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      result += char + char; 
    } else {
      result += char; 
    }
  }
  return result;
}