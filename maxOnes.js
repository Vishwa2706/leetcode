var longestOnes = function(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
}

// Example usage:
const nums = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1];
const k = 2;
const result = longestOnes(nums, k);
console.log(result); // Output: 8

    