function countParameters(...args) {
    
    return args.length;
}


function countParametersClassic() {
    return arguments.length;
}
console.log(countParameters(6, 23, 69, 22, 9)); 
console.log(countParameters('j', 'k'));          
console.log(countParameters());              