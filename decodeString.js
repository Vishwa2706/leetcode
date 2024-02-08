var decodeString = function(s) {
    const stack = [];
    
    for (let char of s) {
        if (char !== ']') {
            stack.push(char);
        } else {
            let currentStr = '';
            let repeatStr = '';
            let repeatCount = 0;
            
            while (stack[stack.length - 1] !== '[') {
                currentStr = stack.pop() + currentStr;
            }
            
            stack.pop(); // Pop '['
            
            while (!isNaN(stack[stack.length - 1])) {
                repeatStr = stack.pop() + repeatStr;
            }
            
            repeatCount = parseInt(repeatStr);
            stack.push(currentStr.repeat(repeatCount));
        }
    }
    
    return stack.join('');
}

// Example usage:
const encodedString = "3[a]2[bc]";
console.log(decodeString(encodedString)); // Output: "aaabcbc"

    