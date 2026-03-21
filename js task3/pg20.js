function longestConsecutiveZeros(str) {
    const zeroGroups = str.split('1');
    const lengths = zeroGroups.map(group => group.length);
    return Math.max(...lengths);
}


console.log(longestConsecutiveZeros("1010010001")); 
console.log(longestConsecutiveZeros("11111"));      
console.log(longestConsecutiveZeros("0001100"));    
