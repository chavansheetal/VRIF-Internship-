function hasSpace(str) {
    
    if (str.includes(" ")) {
        return "Space";
    } else {
        return "No Space";
    }
}

console.log(hasSpace("Hello World")); 
console.log(hasSpace("HelloWorld"));  
console.log(hasSpace(" "));        
