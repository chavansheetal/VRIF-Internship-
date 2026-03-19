function findIndex(arr, element) {
  
    return arr.indexOf(element);
}

function findIndexManual(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; 
        }
    }
    return -1; 
}

const myArray = [2, 4, 6, 8, 10];

console.log(findIndex(myArray, 6)); 
console.log(findIndex(myArray, 3)); 
