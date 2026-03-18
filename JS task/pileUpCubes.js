
function pileUpCubes(cubes) {
    for (let i = 0; i < cubes.length - 1; i++) {
        if (cubes[i] < cubes[i + 1]) {
            return "No";
        }
    }
    return "Yes";
}


console.log(pileUpCubes([5, 4, 3, 2, 1])); 
console.log(pileUpCubes([7, 7, 4, 1]));    
console.log(pileUpCubes([2, 5, 4, 1, 3])); 