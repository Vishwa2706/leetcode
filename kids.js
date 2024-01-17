function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
  
    // Map through the candies array and check if each kid can have the greatest candies
    const result = candies.map((kidCandies) => {
      return kidCandies + extraCandies >= maxCandies;
    });
  
    return result;
  }
  
  // Example usage:
  const candies = [2, 3, 5, 1, 3];
  const extraCandies = 3;
  
  const resultArray = kidsWithCandies(candies, extraCandies);
  console.log(resultArray);
  