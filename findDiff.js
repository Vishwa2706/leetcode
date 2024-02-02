var findDifference = function(nums1, nums2) {
    const notInNums2 = [];
    const notInNums1 = [];

    // Check distinct integers in nums1 that are not in nums2
    for (const num1 of nums1) {
        if (!nums2.includes(num1) && !notInNums2.includes(num1)) {
            notInNums2.push(num1);
        }
    }

    // Check distinct integers in nums2 that are not in nums1
    for (const num2 of nums2) {
        if (!nums1.includes(num2) && !notInNums1.includes(num2)) {
            notInNums1.push(num2);
        }
    }

    return [notInNums2, notInNums1];
}