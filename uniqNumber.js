var uniqueOccurrences = function(arr) {
    // Count occurrences of each value
    const countMap = new Map();
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Check if the counts are unique
    const countSet = new Set(countMap.values());
    return countSet.size === countMap.size;
}

// Example usage:
const array1 = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(array1)); // Output: true
