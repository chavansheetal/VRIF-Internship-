function calculateDiscount(originalPrice, discountedPrice) {
    
    let discount = originalPrice - discountedPrice;
    
    return discount;
}


const original = 500;
const discounted = 400;

const result = calculateDiscount(original, discounted);

console.log("Original Price:", original);
console.log("Discounted Price:", discounted);
