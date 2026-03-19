function getProfitStatus(sellingPrice, costPrice) {
    const result = sellingPrice - costPrice;

    if (result > 0) {
        return "Profit";
    } else if (result < 0) {
        return "Loss";
    } else {
        return "Break-even";
    }
}


console.log(getProfitStatus(50, 30));   
console.log(getProfitStatus(100, 150)); 
console.log(getProfitStatus(100, 100));
