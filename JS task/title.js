function convertToTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}


let str = "hello world";
console.log(convertToTitleCase(str));