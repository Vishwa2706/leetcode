var isMonotonic = function(nums){

    let increasing = true;
    let decreasing = true;

    for (let i =1; i < nums.length; i++) {
        if(nums[i] > nums[i-1]){
            decreasing = false;
        } else if (nums[i] < nums[i-1]){
            increasing = false;
        }
    }
    return increasing || decreasing ;
}

//example
const nums = [1,2,5,4,4];
const result = isMonotonic(nums);
console.log(result);