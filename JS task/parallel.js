function checkParallel(line1, line2) {
    const [x1, y1, x2, y2] = line1;
    const [x3, y3, x4, y4] = line2;

    const slope1 = (y2 - y1) / (x2 - x1);
    const slope2 = (y4 - y3) / (x4 - x3);

    return slope1 === slope2 ? "Parallel" : "Not Parallel";
}


const line1 = [1, 2, 3, 4];
const line2 = [5, 6, 7, 8];

console.log(checkParallel(line1, line2));