function woodallNumber(n) {
    return n * (2 ** n) - 1;
}

const n = 3;
const result = woodallNumber(n);

console.log(result);