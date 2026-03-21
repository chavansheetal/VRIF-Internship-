function totalFruits(fruits) {
  let total = 0;

  for (let i = 0; i < fruits.length; i++) {
    total += fruits[i];
  }

  return total;
}

// Example usage:
console.log(totalFruits([3, 2, 5, 1])); // Output: 11