
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;

    // Make the binary strings equal length by padding with zeros
    while (a.length < b.length) {
        a = "0" + a;
    }

    while (b.length < a.length) {
        b = "0" + b;
    }

    // Iterate through the binary strings from right to left
    for (let i = a.length - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);

        // Calculate the sum and carry
        const sum = bitA ^ bitB ^ carry;
        carry = (bitA & bitB) | (bitB & carry) | (bitA & carry);

        // Prepend the current bit to the result
        result = sum + result;
    }

    // Add the final carry if there is one
    if (carry) {
        result = carry + result;
    }

    return result;
}

// Test with the given input
const a = "1010";
const b = "1011";
const result = addBinary(a, b);

console.log(result);


