function removeSpecialCharacters(str) {
   
    return str.replace(/[^a-zA-Z0-9\s]/g, "");
}


const input = "He!llO@ Wo#rld$%^&*()";
console.log(removeSpecialCharacters(input)); 

console.log(removeSpecialCharacters("JS_is_Awesome123!")); 