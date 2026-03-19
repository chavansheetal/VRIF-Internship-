function generateStarRating(rating) {
   
    return "*".repeat(rating);
}

function generateStarRatingWithLoop(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "*";
    }
    return stars;
}


console.log(generateStarRating(3)); 
console.log(generateStarRating(4)); 
console.log(generateStarRating(0)); 
