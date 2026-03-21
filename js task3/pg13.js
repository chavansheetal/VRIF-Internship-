function findInterval(arr) {
    
    if (arr.length === 0) return 0;
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);
    return maxVal - minVal;
}


console.log(findInterval([5, 2, 9, 1])); 
console.log(findInterval([10, 5, 15])); 
console.log(findInterval([7]));         
