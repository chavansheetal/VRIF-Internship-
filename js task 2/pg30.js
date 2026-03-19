function calculateTotal(prices) {
  return prices.reduce((total, price) => {
    if (price > 100) {
      
      return total + (price * 0.9);
    } else {
      
      return total + price;
    }
  }, 0); 
}
const prices = [120, 50, 600];
console.log(calculateTotal(prices)); 