var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        if (stack.length === 0 || asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroid) {
                stack.pop();
            }
            if (stack.length && stack[stack.length - 1] === -asteroid) {
                stack.pop();
            } else if (!stack.length || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            }
        }
    }

    return stack;
}

// Example usage:
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]