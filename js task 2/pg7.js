function checkSpaces(str) {
 
  if (str.includes(" ")) {
    return "Space";
  } else {
    return "No Space";
  }
}


console.log(checkSpaces("Hello World")); 
console.log(checkSpaces("HelloWorld"));  
console.log(checkSpaces("   "));     