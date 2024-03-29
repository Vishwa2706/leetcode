
var multiply = function(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = product + result[i + j + 1];
            
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.length === 0 ? '0' : result.join('');
}

// Example usage:
const num1 = "123";
const num2 = "456";
const product = multiply(num1, num2);
console.log(product);  // Output: "56088"

    