function checkIfEmpty(str) {

    if (str.length === 0) {
        return "Empty";
    } else {
        return "Not Empty";
    }
}

console.log(checkIfEmpty(""));              
console.log(checkIfEmpty("Hello World!"));  
console.log(checkIfEmpty(" "));            