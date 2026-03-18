function convertToTitleCase(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


let result = convertToTitleCase("hello world");


console.log(result);