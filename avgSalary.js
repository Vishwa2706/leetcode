
var average = function(salary) {
    // Check if the input array has at least 3 elements
    if (salary.length < 3) {
        throw new Error("Input array should have at least 3 elements");
    }

    // Find the minimum and maximum salary
    let minSalary = Math.min(...salary);
    let maxSalary = Math.max(...salary);

    // Calculate the sum of salaries excluding the minimum and maximum
    let sum = salary.reduce((acc, val) => {
        if (val !== minSalary && val !== maxSalary) {
            return acc + val;
        } else {
            return acc;
        }
    }, 0);

    // Calculate the average
    let average = sum / (salary.length - 2);

    // Round the result to 5 decimal places
    return Math.round(average * 1e5) / 1e5;
}

// Example usage:
let salaryArray = [4000,1000,3000];
let result = average(salaryArray);
console.log(result);

    